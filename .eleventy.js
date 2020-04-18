const localImages = require('eleventy-plugin-local-images');

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/fonts');

	eleventyConfig.addPlugin(localImages, {
	distPath: 'dist',
	assetPath: '/images/assets',
	selector: 'img',
	verbose: true
	});

	return {
	dir: {
	  input: 'src',
	  output: 'dist',
	  data: '_data',
		includes: '_includes',
	},
	passthroughFileCopy: true,
	templateFormats: ['njk'],
	htmlTemplateEngine: 'njk'
	}
}