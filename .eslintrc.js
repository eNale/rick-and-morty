module.exports = {
    root: true,
    plugins: ['react'],
    parser: '@babel/eslint-parser',
    parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
    settings: {
        react: {
          version: 'detect',
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    rules: {
        'no-unused-vars': [
            1,
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true
            }
        ],
        'quotes': [
            1,
            'single',
            'avoid-escape'
        ],
        'semi': 1,
        'eol-last': 1,
        'no-trailing-spaces': 1,
        'comma-dangle': 0,
        'no-undef': 2,
        'react/jsx-no-undef': 1,
        'no-undef-init': 1,
        'no-undefined': 0,
		'react/react-in-jsx-scope': 1,
		'react/jsx-uses-vars': 1,
    }
};
