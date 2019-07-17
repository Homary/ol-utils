import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import ClusterSource from 'ol/source/Cluster';
import { Style, Icon, Text, Fill } from 'ol/style';

/**
 * 创建聚合图层  
 * 实现聚合点位效果
 * @param {Feature<array>} features 点位数组
 * @param {img} icon 图标
 * @param {string} name 图层名
 * @param {number} distance 聚合距离,default: 40
 * @param {number} scale 图标大小, default: .6
 * @return {LayerVector}
 */
function createCluster(features, icon, name, distance = 40, scale = 0.6) {
	let vectorSource = new VectorSource({
		features: features
	});
	let layerSource = new ClusterSource({
		distance: distance,
		source: vectorSource
	});
	let clusterLayer = new VectorLayer({
		source: layerSource,
		style: function(feature, resolution) {
			let size = feature.get('features').length;
			let style = new Style({
				image: new Icon({
					src: icon,
					scale: scale
				}),
				text: new Text({
					text: size.toString() > 1 ? size.toString() : '',
					fill: new Fill({
						coor: '#000'
					})
				})
			});

			return style;
		},
		name: name
	});

	return clusterLayer;
}

export default createCluster;
