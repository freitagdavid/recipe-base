import { marked, type TokenizerAndRendererExtension, type TokenizerExtension } from 'marked';

const layout: TokenizerAndRendererExtension = {
	name: 'layout',
	level: 'block',
	start(src) {
		return src.match(/layout:/)?.index;
	},
	tokenizer(src) {
		const match = /^layout:\s(.*)\n/.exec(src);
		if (match) {
			return {
				type: 'layout',
				raw: match[0],
				text: match[1],
				level: 1,
				lines: 1
			};
		}
	},
	renderer(token) {
		return `{'layout': ${token.text}}\n`;
	}
};

const title: TokenizerExtension = {
	name: 'title',
	level: 'block',
	start(src) {
		return src.match(/title:/)?.index;
	},
	tokenizer(src) {
		const match = /^title:.*"(.*)"\n/.exec(src);
		if (match) {
			return {
				type: 'title',
				raw: match[0],
				text: match[1],
				level: 1,
				lines: 1
			};
		}
	},
	renderer(token) {
		return `{'title': ${token.text}}\n`;
	}
};

const image: TokenizerExtension = {
	name: 'image',
	level: 'block',
	start(src) {
		return src.match(/image:/)?.index;
	},
	tokenizer(src) {
		const match = /^image:\s(.*)\n/.exec(src);
		if (match) {
			return {
				type: 'image',
				raw: match[0],
				text: match[1],
				level: 1,
				lines: 1
			};
		}
	},
	renderer(token) {
		return `{'image': ${token.text}}\n`;
	}
};

const imageCredit: TokenizerExtension = {
	name: 'imageCredit',
	level: 'block',
	start(src) {
		return src.match(/imagecredit:/)?.index;
	},
	tokenizer(src) {
		const match = /^imagecredit:\s(.*)\n/.exec(src);
		if (match) {
			return {
				type: 'imageCredit',
				raw: match[0],
				text: match[1],
				level: 1,
				lines: 1
			};
		}
	},
	renderer(token) {
		return `{'imageCredit': ${token.text}}\n`;
	}
};

const tags: TokenizerExtension = {
	name: 'tags',
	level: 'block',
	start(src: string) {
		return src.match(/tags:/)?.index;
	},
	tokenizer(src: string) {
		const match = /^tags:\s(.*)\n/.exec(src);
		if (match) {
			// Match comma separated tags
			const tags = match[1].match(/([^,\s]+)/g);
			return {
				type: 'tags',
				raw: match[0],
				text: match[1],
				level: 1,
				lines: 1,
				tags: tags
			};
		}
	},
	renderer(token) {
		return `{'tags': ${token.tags}}\n`;
	}
};

const parser = marked.use({ extensions: [layout, title, image, imageCredit, tags] });

// const parser = marked.use({extensions: [layout]})

export { parser };
