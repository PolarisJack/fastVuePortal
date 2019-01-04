/**
 * Created by Jack on 2018/3/28.
 *
 */


import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations';//根mutations
import state from './state';//根state
import actions from './actions';//根action
import getters from './getters';//根getters
import modules from './modules';//根modules

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules,
})
