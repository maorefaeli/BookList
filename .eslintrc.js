module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react", "jsx-a11y", "import"
    ],
    "globals": {
        "document": true,
        "console": true,
        "window": true
    },
    "rules": {
        "indent": [
            "error", 4
        ],
        "react/jsx-indent": [
            "error", 4
        ],
        "comma-dangle": [
            "error", "never"
        ],
        "comma-dangle": [
            "error", {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "ignore"
            }
        ],
        "object-curly-spacing": [
            "error", "never"
        ],
        "react/jsx-space-before-closing": [
            "error", "never"
        ],
        "react/jsx-tag-spacing": [
            "error", {
                "closingSlash": "never",
                "beforeSelfClosing": "never",
                "afterOpening": "never"
            }
        ]
    }
};
