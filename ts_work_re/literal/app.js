"use strict";
class UIElement {
    animate(dx, dy, easing) {
        if (easing === 'ease-in') {
            console.log(easing);
        }
        else if (easing === 'ease-out') {
            console.log(easing);
        }
        else if (easing === 'ease-in-out') {
            console.log(easing);
        }
        else {
            console.log('올바르지 않은 easing 값 입니다.');
        }
    }
}
const element = new UIElement();
element.animate(0, 0, 'ease-in');
element.animate(0, 0, 'ease-out');
element.animate(0, 0, 'ease-in-out');
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
