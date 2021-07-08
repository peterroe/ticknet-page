module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        // "node": true,
        // "jest": true
    },
    "extends": [
        "vue",
        "standard",
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "vue",
        "promise"
    ],
    "rules": {
        "no-tabs": "off",
        "semi": "error",
        "indent": "off",
        "vue/html-indent": ["error", 4], //html元素缩进
        'vue/script-indent': ["error", 4], //script元素缩进
        "vue/singleline-html-element-content-newline": "off", //html元素的属性换行
        "space-before-function-paren": "off", //方法名后空格
        "vue/max-attributes-per-line": "off",
        "vue/html-self-closing": "off" //close <img />✔  <img/>✘
    },
    "overrides": [{
        "files": ["*.test.js", ".spec.js"],
        "rules": {
            "no-unused-expressions": "off"
        }
    }]
};