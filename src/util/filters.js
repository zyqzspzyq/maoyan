
import Vue from 'vue'
import { strict } from 'assert';

// 上映时间
Vue.filter('jpg',(jpgurl) => {
    let _url= jpgurl.replace(/w.h/,'128.180')
    return _url.replace(/w.h/, 128.180 )

})
Vue.filter('Snum',(snum) => {
    let Nnum = Math.round(snum/1000)/10
    return Nnum
})
Vue.filter('premiere', (timetamp, hasDay) => {
    let _date = new Date(timetamp)
    let _day = `  ${ formatDay(_date.getDay()) }`
    return `${(_date.getMonth() + 1)}月${_date.getDate()}日上映${hasDay ? _day : ''}`
})

function formatDay(day) {
    switch (day) {
        case 0: return '星期日';
        case 1: return '星期一';
        case 2: return '星期二';
        case 3: return '星期三';
        case 4: return '星期四';
        case 5: return '星期五';
        case 6: return '星期六';
    }
}