import { Map, View } from 'ol';
import { Tile } from 'ol/layer';
import { XYZ } from 'ol/source';

/**
 * 渲染地图
 * @param {el} target 节点ID
 * @param {string} url 地图地址
 * @param {array} center 地图中心点
 * @param {array} layers 图层
 * 
 * @return {Map}
 */
function render(target, url, center, layers = []) {
    let tile = new Tile({
		source: new XYZ({
			url: url
		}),
		name: 'base'
    });
    
    layers.unshift(tile);

	return new Map({
		target: target,
		view: new View({
			zoom: 12,
			center: center,
			projection: 'EPSG:4326'
		}),
		layers: layers
	});
}

export default render;