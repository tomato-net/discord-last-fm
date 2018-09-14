#!/bin/bash

set -euf -o pipefail

function tests {
    npm run lint
}

if [ "$TRAVIS_PULL_REQUEST" != "false"  ]; then
    echo -e "\e[36m\e[1mBuild triggered for PR #${TRAVIS_PULL_REQUEST} to branch \"${TRAVIS_BRANCH}\" - only running tests."
    tests
    exit 0
fi
