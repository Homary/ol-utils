import { click, pointerMove } from 'ol/events/condition.js';
import Select from 'ol/interaction/Select.js';

/**
 * 添加地图事件
 * @param {Map} map Map实例对象
 * @param {singleclick | click | pointmove} type 事件类型
 * @param {function} fn 回调函数
 */
const mapEvent = (map, type, fn) => {
    let _type = type;
    let select = null,
        selectSingleClick = new Select(),
        selectClick = new Select({
            condition: click
        }),
        selectPointerMove = new Select({
            condition: pointerMove
        })
    
    switch (_type) {
        case 'singleclick':
            select = selectSingleClick;
            break;
        
        case 'click':
            select = selectClick;
            break;

        case 'pointermove':
            select = selectPointerMove;
            break;
    
        default:
            break;
    }

    if(select !== null) {
        map.removeInteraction(select);
    }

	select.on('select', fn);
	map.addInteraction(select);
};

export default mapEvent;