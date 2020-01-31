// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
// Changes here require a server restart.

const path = require("path");

function addStyleResource(rule) {
	rule.use("style-resource")
		.loader("style-resources-loader")
		.options({
			patterns: [path.resolve(__dirname, "./src/assets/styles/*.scss")]
		});
}

module.exports = {
	siteName: "BLOCKTEXT.CLUB",
	templates: {
		Post: "/:title"
		// Tag: "/tag/:id"
	},
	plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				// Location of the markdown content
				path: "content/posts/*.md",
				//GraphQL type/template name. Must have matching .vue file in src/templates
				typeName: "Post",
				// The route every post will follow
				//   route: "/:slug"
				refs: {
					// Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
					tags: {
						typeName: "Tag",
						create: true
					}
				}
			}
		}
	],
	transformers: {
		//Add markdown support to all file-system sources
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: ["nofollow", "noopener", "noreferrer"],
			plugins: ["@gridsome/remark-prismjs"]
		}
	},
	chainWebpack(config) {
		// Load variables for all vue-files
		const types = ["vue-modules", "vue", "normal-modules", "normal"];

		types.forEach((type) => {
			addStyleResource(config.module.rule("scss").oneOf(type));
		});
	}
};

