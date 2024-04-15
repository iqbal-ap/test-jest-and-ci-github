#!/usr/bin/env node

const arg = require('arg');
const { postGithubCommitStatus } = require('../src/githubAPI')

const args = arg({
    '--github-repository': String,
    '--github-sha': String,
});

async function setGithubStatus(options) {
    try {
        await postGithubCommitStatus(options.repository, options.sha);
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
}

const options = {
    'repository': args['--github-repository'],
    'sha': args['--github-sha'],
};

setGithubStatus(options);
