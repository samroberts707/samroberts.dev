workflow "New workflow" {
  on = "push"
  resolves = ["Test"]
}

action "Test" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  runs = "test"
  secrets = ["GITHUB_TOKEN"]
}
