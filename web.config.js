let isPublish = process.env.NODE_ENV == 'publish';

module.exports = {
	entry: isPublish ? 'src/components/index.js' : 'src/index.js',
	rootID: 'app',
	extensions: ['.js'],
	alias: {
		'@': 'src/'
	},
	server: {
		port: '8080'
	},
	lazyLoading: !isPublish,
	splitCode: !isPublish
};
