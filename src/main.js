import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'
import Blog from './components/Blog.vue'
import Formulario from './components/Formulario.vue'
import Pagina from './components/Pagina.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import Peliculas from './components/Peliculas.vue'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/es'
import Search from './components/Search.vue'
import Redirect from './components/Redirect.vue'
import Article from './components/Article.vue'
import CreateArticle from './components/CreateArticle.vue'
import EditArticle from './components/EditArticle.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.use(VueMoment, {
  moment
})

const routes=[
{  path: '/home',    component: LastArticles},
{  path: '/ultimos-articulos',    component: LastArticles},
{  path: '/mi-componente',    component: MiComponente},
{  path: '/pagina/:id?', name:'pagina',   component: Pagina},
{  path: '/blog',    component: Blog},
{  path: '/formulario',    component: Formulario},
{  path: '*',    component: ErrorComponent},
{  path: '',    component: LastArticles},
{  path: '/buscador/:searchString',    component: Search},
{  path: '/redirect/:searchString',    component: Redirect},
{  path: '/articulo/:id', name:'article',    component: Article},

{  path: '/editar/:id', name:'edit',    component: EditArticle},
{  path: '/peliculas', name: 'peliculas',  component: Peliculas},
{  path: '/crear-articulo', name:'create', component: CreateArticle},


]

const router= new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
