import sourceVector from 'ol/source/Vector';
import layerVector from 'ol/layer/Vector';

/**
 * 创建图层
 * @param {array} Features 点位
 * @param {object} extra 自定义参数
 * @return layer 实例
 */
function createLayer(features, extra) {
	let obj = Object.assign({
		source: new sourceVector({
			features: features
		}),
		extra
	});
	let layer = new layerVector(obj);

	return layer;
}

export default createLayer;
