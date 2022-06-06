import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user from './user'

Vue.use(Vuex) 

//创建并暴露store
export default new Vuex.Store({
	modules:{
		tab,
		user
	}
})