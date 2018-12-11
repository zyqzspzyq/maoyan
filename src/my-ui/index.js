import {cities} from './citys'

const util = {
    cities
}

const install  = (Vue) =>{
    Vue.prototype.$util = util
}

export {util}

export default {
    install
}