'use strict'

function requireDir() {
    return require('require-dir')('./api');
}

function loadCommands(send) {
    const files = requireDir()
    const cmds = {}

    Object.keys(files).forEach(file => {
        cmds[file] = files[file](send)
    })

    return cmds
}

module.exports = loadCommands