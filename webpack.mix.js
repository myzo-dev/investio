const mix = require('laravel-mix');

mix.setPublicPath('assets')
	.ts('src/js/app.ts', 'js')
	.postCss('src/css/app.css', 'css', [require('tailwindcss')]);

mix.options({
	processCssUrls: false,
	terser: { extractComments: false },
});

if (!mix.inProduction()) {
	mix.sourceMaps().webpackConfig({ devtool: 'source-map' });
}
