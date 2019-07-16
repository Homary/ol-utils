import render from '@/components/render';
import createFeature from '@/components/createFeature';
import createLayer from '@/components/createLayer';
import addEvent from '@/components/addEvent';
import addCustomEvent from '@/components/addCustomEvent';

// img
import orange from '@/img/orange.png';

window.onload = function() {
	console.log('load');

	let url =
		'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0';
	let elID = 'app';
	let center = [112.55, 28.27];

	let map = render(elID, url, center);

	let feature = createFeature(center, orange);
	let layer = createLayer({ name: 'test' });

	layer.getSource().addFeature(feature);

	map.addLayer(layer);
};
