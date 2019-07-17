import Feature from 'ol/Feature';
import pointGeom from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';

/**
 * 创建点位
 * @param {array} coord 经纬度数组
 * @param {string} icon 图标,创建聚合图层时可不传
 * @param {number} scale 缩放级别,默认为0.6
 * @return Feature实例
 */
function createFeature(coord, icon, scale = 0.6) {
	let feature = new Feature({
		geometry: new pointGeom(coord)
    });
    
    if(icon) {
        feature.setStyle(
            new Style({
                image: new Icon({
                    src: icon,
                    scale: scale
                })
            })
        );
    }

	return feature;
}

export default createFeature;
