import Vue from 'vue'
import App from './App.vue'
// 全部引入
// import ElementUI from 'element-ui';
// 按需引入
import { Button, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem,Tag,Form,FormItem ,Input, Select,Switch,DatePicker,Option,Dialog,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router/index.js';
import store from './store/index.js'
import axios from 'axios'

import './assets/less/index.less';
import './api/mock.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch) 
Vue.use(DatePicker) 
Vue.use(Option) 
Vue.use(Dialog) 

Vue.prototype.axios = axios



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
