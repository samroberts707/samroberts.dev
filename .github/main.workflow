workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Test" {
  uses = "actions/npm@master"
  runs = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@master"
  needs = ["Test"]
  runs = "build"
}
