/**
 * 添加自定义事件
 * @param {Map} map Map实例对象
 * @param {string} mapEvent 需要在地图上注册的事件
 * @param {string} featureEvent feature上注册的自定义事件名
 */
const addCustomEvent = (map, mapEvent, featureEvent) => {
	map.on(mapEvent, event => {
		map.forEachFeatureAtPixel(event.pixel, feature => {
			feature.dispatchEvent({ type: featureEvent, event: event });
		});
	});
};

export default addCustomEvent;