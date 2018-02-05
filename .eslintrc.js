module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "valid-typeof": 2,
        "valid-jsdoc": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-unreachable": 2,
        "no-func-assign": 2,
        "no-alert": 2,
        "no-eq-null": 2,
        "no-implicit-globals": 1,
        "no-param-reassign": 1,
        "no-unused-vars": 0,
        "no-magic-numbers": 0,
        "no-useless-return": 2,
        "prefer-promise-reject-errors": 2,
        "comma-dangle": 2,
        "radix": 1,
        "no-undef-init": 2,
        "no-console": 0,
        "eqeqeq": [
            "error", 
            "always"
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};