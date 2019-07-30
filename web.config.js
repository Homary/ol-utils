let isPublish = process.env.NODE_ENV == 'publish';

module.exports = {
	entry: isPublish ? 'src/components/index.js' : 'src/index.js',
    rootID: 'app',
    title: 'ol-utils(地图)开发测试环境',
	extensions: ['.js'],
	alias: {
		'@': 'src/'
	},
	// globalLib: {
	// 	open: true,
	// 	source: 'src/lib',
	// 	targetDir: 'lib'
	// },
	server: {
		port: '8080'
	},
	lazyLoading: !isPublish,
	splitCode: !isPublish
};
