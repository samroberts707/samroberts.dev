workflow "Install and Build" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "Install Packages" {
  uses = "actions/npm@master"
  args = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@master"
  needs = ["Install Packages"]
  args = "build"
}
