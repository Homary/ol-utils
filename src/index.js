import { render } from 'ol-utils';
import { createCluster, createLayer, createFeature, createOverlay } from '@/components';
import { Style } from 'ol/style';

import orange from '@/img/orange.png';

window.onload = function() {
	let url =
		'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0';
	let elID = 'app';
	let center = [112.55, 28.27];

	let map = render(elID, url, center);

	let features = [];

	for (let i = 0; i < 50; i++) {
		let lon = 112.55 + i * 0.001;
		let lat = 28.27 + i * Math.random() * 0.005;
		let feature = createFeature([lon, lat]);
		features.push(feature);
	}

	let cluster = createCluster(features, orange, 'test');
    map.addLayer(cluster);
    
    addDialog();

    let overlay = createOverlay('over', center, [0, 0]);

    map.addOverlay(overlay)
};

function addDialog() {
   let div = document.createElement('div');

   div.id = 'over';
   div.style.width = '300px';
   div.style.height = '300px';
   div.style.background = '#666';

   document.getElementById('app').appendChild(div);
}
