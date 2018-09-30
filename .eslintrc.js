module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["plugin:vue/strongly-recommended"],
    "parserOptions": {
		"parser": "babel-eslint",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": 0,
        "semi": [
            "error",
            "always"
        ],
        "vue/max-attributes-per-line": [2, {
            "singleline": 4,
            "multiline": {
              "max": 1,
              "allowFirstLine": false
            }
        }]
    }
}