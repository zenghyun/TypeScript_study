type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement  {
  animate(dx: number, dy: number, easing: Easing) {
    if(easing === 'ease-in') {
      console.log(easing);
    } else if (easing === 'ease-out') {
      console.log(easing);
    } else if (easing === 'ease-in-out') {
      console.log(easing);
    } else {
      console.log('올바르지 않은 easing 값 입니다.');
    }
  } 
}

const element = new UIElement();

element.animate(0,0,'ease-in');
element.animate(0,0,'ease-out');
element.animate(0,0,'ease-in-out');
// element.animate(0,0,'ease-x');

/** loc/lat 좌표에 지도를 생성합니다. */
declare function setupMap(config: MapConfig): void;
// ---생략---
interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });