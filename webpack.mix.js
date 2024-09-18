const mix = require('laravel-mix')

mix.setPublicPath('assets')
	.js('src/js/app.js', 'js')
	.postCss('src/css/app.css', 'css', [require('tailwindcss')])

mix.options({
	processCssUrls: false,
	terser: { extractComments: false },
})

if (!mix.inProduction()) {
	mix.sourceMaps().webpackConfig({ devtool: 'source-map' })
}
