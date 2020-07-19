<template>
    <header id="header">

        <div class="center">
            <!-- Logo -->
            <div id="logo">
                <img src="../assets/logo.png" class="app-logo" alt="logotipo">
                <span id="brand">
                    <strong>FrameV</strong>log
                </span>
            </div>
            <!-- Menu nav -->
            <nav id="menu">
                <ul>

                    <li>
                        <router-link to="/home" active-class="active">Inicio</router-link>
                    </li>
                    <li>
                       <router-link to="/blog" active-class="active">Blog</router-link>
                    </li>
                    <li>
                      <router-link to="/formulario" active-class="active">Formulario</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'pagina', params:{id:'soy el parametro pasado desde el url d header'}}" active-class="active">Pagina</router-link>
                    </li>
                    <li>
                    <router-link to="/peliculas" active-class="active">Peliculas</router-link>
                    </li>
                </ul>

            </nav>
            <!-- Limpiar flotado -->
            <div class="clearfix"></div>
        </div>

    </header>
</template>


<script>
export default {
    name:'HeaderComponent'
}
</script>