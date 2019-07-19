import {
	render,
	createLayer,
	createFeature,
	addEvent
} from 'ol-utils';
import { addCustomEvent } from '@/components';

import {Style, Circle, Fill} from 'ol/style';

import orange from '@/img/orange.png';

window.onload = function() {
	let url =
		'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0';
	let elID = 'app';
	let center = [112.55, 28.27];
	let map = render(elID, url, center);
    let feature = createFeature(center, orange);
    
    // 设置值
    feature.set('greet', 'this is a icon on map');

	let layer = createLayer();
    
	layer.getSource().addFeature(feature);
	map.addLayer(layer);

	// 添加事件
	addEvent(map, 'singleclick', (e) => {
        console.log(e);
        
        // 获得点位的值
        let greet = e.selected[0].get('greet');

	    alert(greet);
    })
};

function addDialog() {
	let div = document.createElement('div');

	div.id = 'over';
	div.style.width = '300px';
	div.style.height = '300px';
	div.style.background = '#666';

	document.getElementById('app').appendChild(div);
}
