/**
 * @author : wenhao.huang
 * @date   : 2018/3/12
 */

import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import filter from 'filter'
Vue.use(filter)

import notify from 'components/notice/index'
Vue.use(notify)

import ajax from 'common/js/ajax.js'
Vue.use(ajax)

import utils from 'common/js/utils.js'
Vue.prototype.$utils = utils

import EChart from 'components/EChart'
Vue.component('EChart',EChart)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
