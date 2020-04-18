import lozad from 'lozad';
import Alert from 'bootstrap/js/src/alert'
import Button from 'bootstrap/js/src/button'
import Carousel from 'bootstrap/js/src/carousel'
import Collapse from 'bootstrap/js/src/collapse'
import Dropdown from 'bootstrap/js/src/dropdown'
import Modal from 'bootstrap/js/src/modal'
import Popover from 'bootstrap/js/src/popover'
import Scrollspy from 'bootstrap/js/src/scrollspy'
import Tab from 'bootstrap/js/src/tab'
import Toast from 'bootstrap/js/src/toast'
import Tooltip from 'bootstrap/js/src/tooltip'
import Util from 'bootstrap/js/src/util'

import { mapboxList } from "./modules/mapbox-list";

// Lazy Load Elements
const observer = lozad('.lozad', {
  rootMargin: '256px 0px',
  threshold: 0
});
observer.observe();

// Mapbox for orte list
if (document.body.classList.contains('orteList') || document.body.classList.contains('orteSingle')) {
	mapboxList.init();
}