<template>
    <aside id="sidebar">
            <div id="nav-blog" class="sidebar-item">
                <h3>Puedes Hacer Esto</h3>
                <router-link to="/crear-articulo" class="btn btn-success">Crear Articulo</router-link>
            </div>

            <div id="search" class="sidebar-item">
                <h3>Buscador</h3>
                <p>Encuentra el Articulo que buscas</p>
                <form action="#" @submit.prevent="goSearch">
                    <input type="text" name="search"  v-model="searchString">
                    <input type="submit" class="btn" value="buscar">
                </form>
            </div>
        </aside>
</template>

<script>
export default {
    name:'Sidebar',
    data(){
return{
    searchString:null
}
    },
    methods:{
        goSearch(){
            this.$router.push('/redirect/'+this.searchString)
        }
    }
}
</script>