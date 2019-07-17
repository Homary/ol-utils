### Openlayer 函数封装

> 开箱即用

### Example

1. create map 创建地图

```JavaScript
import { render } from 'ol-utils';

window.onload = function() {
    // 地图地址
	let url =
        'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0';

    // 地图挂载的DOM元素ID
    let elID = 'app';

    // 地图中心的经纬度
	let center = [112.55, 28.27];

	let map = render(elID, url, center);
};
```

2. 添加点位

``` javascript  

// 点位图标
import orange from '@/img/orange.png';

window.onload = function() {
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
```

### Document

[文档说明](https://homary.github.io/ol-utils/)
