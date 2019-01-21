workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Test" {
  uses = "actions/npm@master"
  runs = "test"
}

action "GitHub Action for npm" {
  uses = "actions/npm@master"
  needs = ["Test"]
  runs = "build"
}
