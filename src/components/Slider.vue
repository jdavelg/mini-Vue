<template>
    <div id="slider" :class="{
        'slider-big': showButton,
        'slider-small': !showButton}">
        <h1>{{texto}}</h1>
        <router-link to="/blog" v-if="showButton" class="btn-white">Ir al Blog</router-link>

    </div>
</template>

<script>
export default {
    name:'Slider',
    props:['texto','showButton']
}
</script>