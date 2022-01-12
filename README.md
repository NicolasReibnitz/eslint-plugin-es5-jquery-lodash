# eslint-plugin-es5-jquery-lodash

ESLint extension plugin for ES5 plugin users who want better differentiation between jQuery and Lodash functions and ES6 methods.

## Why?

Sometimes someone uses the great [eslint-plugin-es5](https://github.com/nkt/eslint-plugin-es5) and jQuery or Lodash at the same time and get irritated by all those false errors.

Like the following message:

```bash
error  ES6 methods not allowed: find  es5/no-es6-methods
```

when using something like this:

```js
$('#myDiv').find('.child');
// or
_.find([1, 2, 3]);
// or even
a.b.c.$d.find('.child');
```

which are of course not ES6 methods but Lodash and jQuery functions and therefore perfectly fine in an ES5 context.

That's why I took the [pull request](https://github.com/nkt/eslint-plugin-es5/pull/39) by [Nikita Chuklinov](https://github.com/skyway777), added support for nested jQuery functions, and turned it into its own plugin. It extends [eslint-plugin-es5](https://github.com/nkt/eslint-plugin-es5) by turning off the original `es5/no-es6-methods` rule and adding `es5-jquery-lodash/no-es6-methods` instead.

## Installation

```
npm install --save-dev eslint-plugin-es5-jquery-lodash
```

## Usage

Add the plugin to your `.eslintrc`:

```json
{
	"plugins": ["es5", "es5-jquery-lodash"]
}
```

And then switch out the rule in question like this:

```json
{
	"rules": {
		"es5/no-es6-methods": "off",
		"es5-jquery-lodash/no-es6-methods": "error"
	}
}
```

Or just use the preset which does all of that for you:

```json
{
	"extends": [ ..., "plugin:es5-jquery-lodash/recommended"]
}
```

## List of supported rules

`es5-jquery-lodash/no-es6-methods`

Forbid ES2015 [methods](http://babeljs.io/learn-es2015/#math--number--string--object-apis) for `Array` and `String`, while ignoring Lodash and jQuery functions.
You can also allow specific ES6 methods. For example:
`"es5-jquery-lodash/no-es6-methods": ["error", { exceptMethods: ["includes"] }]`

## License

[MIT](LICENSE)
