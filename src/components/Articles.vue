<template>
<section>
<div v-if="!articles">
<h2 class="subheader">
  Cargando...
</h2>
</div>

<div class="articles-list"  v-if="articles && articles.length >=1">
  <article class="article-item" v-for="article in articles" :key="article._id">
    <div class="image-wrap">
            <img :src="url+ 'get-image/'+article.image" :alt="article.title" v-if="article.image">
        <img src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Paisaje" v-if="!article.image">
    </div>
    <h2>
      <router-link :to="{name:'article', params:{id: article._id}}">{{article.title}}</router-link></h2>
    <span class="date">{{article.date| moment('from', 'now')}}</span>
    <router-link :to="{name:'article', params:{id: article._id}}">Leer Mas</router-link>
    <div class="clearfix"></div>
</article>
</div>
<div v-if="articles.length==0">
<h2 class="subheader">
 No hay articulos para mostrar
</h2>
</div>
</section>
</template>

<script>
import Global from '../Global'
export default {
name:'Articles',
props:[
    'articles'
],
data(){
    return{
      url:Global.url
    }
}
}
</script>

<style>

</style>