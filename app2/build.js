({
    name: 'app2',
    out: '../dist/app2.js',
    deps: ['../dist/core'],
    _paths: {
        myLib2: '../dist/core'
    },
    exclude: ['myLib', 'myLib2', 'myLib3']
})