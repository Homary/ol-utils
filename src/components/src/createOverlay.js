import Overlay from 'ol/Overlay';

/**
 * 创建弹窗图层
 * @param {string} elID 节点ID
 * @param {array} coord 经纬度
 * @param {array} offset 偏移距离 [向上, 向右]; default: [0, 0]
 * @return {overlay}
 */
function createOverlay(elID, coord, offset = [0, 0]) {
	let container = document.getElementById(elID);
	let overlay = new Overlay(
		/** @type {olx.OverlayOptions} */ ({
			element: container,
			autoPan: true,
			autoPanAnimation: {
				duration: 250
			},
			offset: offset
		})
	);
    overlay.setPosition(coord);

	return overlay;
}

export default createOverlay;