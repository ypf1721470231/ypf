import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import index from '../components/index.vue'
import Menu from '../components/menu.vue'
import Mine from '../components/mine.vue'
import Creation from '../components/Creation.vue'
import CreateTable from '../components/CreateTable.vue'
import SingleChoice from '../components/function/SingleChoice.vue'
import MultipleChoice from '../components/function/MultipleChoice.vue'
import GapFilling from '../components/function/GapFilling.vue'
import Gun from '../components/function/Gun.vue'
Vue.use(VueRouter)


const Login = () => import('../views/Login.vue')
const Singin = () => import('../views/Singin.vue')
const CreatTitle = () => import('../views/CreatTitle.vue')
const Recycle = () => import('../views/Recycle.vue')

const routes = [{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'index',
		component: index
	},
	{
		path: '/homepage',
		name: 'HomePage',
		component: HomePage,
		children: [{
				path: '/homepage/login',
				name: 'Login',
				component: Login,
				// beforeEnter(to, from, next) {
				// 	// 在渲染该组件的对应路由被 confirm 前调用
				// 	// 不！能！获取组件实例 `this`
				// 	// 因为当守卫执行前，组件实例还没被创建
				// 	if (window.localStorage.getItem("tokenlo")) next("/index");
				// 	else next();
				// }
			},
			{
				path: '/homepage/singin',
				name: 'Singin',
				component: Singin
			}
		]
	},
	{
		path: '/menu',
		name: 'Menu',
		component: Menu
	},
	{
		path: '/mine',
		name: 'Mine',
		component: Mine
	},
	{
		path: '/creation',
		name: 'Creation',
		component: Creation
	},
	{
		path: '/creat-title',
		name: 'CreatTitle',
		component: CreatTitle
	},
	{
		path: '/create-table',
		name: 'CreateTable',
		component: CreateTable
	},
	{
		path: '/recycle',
		name: 'Recycle',
		component: Recycle
	},
	{
		path: '/single-choice',
		name: 'SingleChoice',
		component: SingleChoice
	},
	{
		path: '/multiple-choice',
		name: 'MultipleChoice',
		component: MultipleChoice
	},
	{
		path: '/gap-gilling',
		name: 'GapFilling',
		component: GapFilling
	},
	{
		path: '/gun',
		name: 'Gun',
		component: Gun
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router