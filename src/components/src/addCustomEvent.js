/**
 * 添加自定义事件
 * @param {Map} map Map实例对象
 * @param {string} mapEvent 需要在地图上注册的事件
 * @param {Feature} feature Feature实例对象
 * @param {string} featureEvent feature上注册的自定义事件名
 * @param {function} fn 触发自定义事件的回调函数
 */
const addCustomEvent = (map, mapEvent, feature, featureEvent, fn) => {
	map.on(mapEvent, event => {
		map.forEachFeatureAtPixel(event.pixel, feature => {
			feature.dispatchEvent({ type: featureEvent, event: event });
		});
	});

	feature.on(featureEvent, fn);
};

export default addCustomEvent;