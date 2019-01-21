workflow "New workflow" {
  on = "push"
  resolves = ["Run NPM RUN BUILD"]
}

action "Run NPM RUN BUILD" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  runs = "build"
}
