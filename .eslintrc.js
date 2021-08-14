module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
	},
	extends: ['@nuxtjs', 'prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'prettier/prettier': [
			'warn',
			{
				useTabs: true,
				printWidth: 9999,
				tabWidth: 2,
				singleQuote: true,
				semi: false,
				trailingComma: 'all',
				jsxBracketSameLine: false,
				bracketSpacing: true,
				endOfLine: 'auto',
			},
		],
		'no-console': 'off',
		'vue/html-indent': [
			'warn',
			'tab',
			{
				attribute: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 15,
				multiline: {
					max: 5,
					allowFirstLine: true,
				},
			},
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'never',
			},
		],
		'vue/singleline-html-element-content-newline': [
			'error',
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: ['titleBar', 'modal', 'n-link', 'nuxt-link', 'span', 'a', 'label', 'btn', 'h2', 'p', 'div'],
			},
		],
	},
}
