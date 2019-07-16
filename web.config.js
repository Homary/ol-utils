console.log(process.env.NODE_ENV);

let isPublish = process.env.NODE_ENV == 'publish';

module.exports = {
	entry: isPublish ? 'src/dist.js' : 'src/index.js',
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
