<template>
<div id="mi-componente">
    <section id="content">
    <h1>este es mi componente :)</h1>
    <h3>{{subtitulo}}</h3>
    <h2>Reactividad</h2>
    <h3> el nombre es {{nombre}}</h3>
    <input type="text" v-model="nombre"/>
    <h2>Directivas condicionales</h2>
     <input v-model="edad" type="number" />
     <h3>mi edad es {{edad}}</h3>
<p>
    <strong style="color:red" v-if="edad>=18" >{{mayor}}</strong>
    <strong style="color:red" v-else-if="edad<18 && edad>0" >{{menor}}</strong>
    <strong style="color:red" v-else-if="!edad || edad <= 0" >No inventes tio xD</strong>
    </p>
     <h2>Directivas iterativas</h2>
     <ul>
<li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>

     </ul>
    </section>
    </div>
</template>
<script>
export default {
    name:'MiComponente',
    data(){
        return{
            subtitulo:'soy el subtitulo de mi componente',
            nombre:"",
            edad:18,
            mayor:"es mayor de edad",
            menor:"es menor de edad",
            peliculas:['batman', 'superman','bourne','los inmortales']
        }
    }
}
</script>
