### Openlayer 函数封装  

> 开箱即用  

### Example  

``` JavaScript  
import { render } from 'gol';

window.onload = function() {
	let url =
		'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0';
	let elID = 'app';
	let center = [112.55, 28.27];

	let map = render(elID, url, center);
};
```    

### Document  

[文档说明](https://homary.github.io/ol-utils/)