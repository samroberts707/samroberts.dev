workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Test" {
  uses = "actions/npm@master"
  runs = "install"
  args = "-i"
}

action "GitHub Action for npm" {
  uses = "actions/npm@master"
  needs = ["Test"]
  runs = "build"
}
