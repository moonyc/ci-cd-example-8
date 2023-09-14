const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

// commit node_modules: they must be available
function run() {
    core.notice('Hello from my custom javascript action')      
}

run()