<template>
<div>
  <nav>
    <router-link to="/">Hello World</router-link>
    <router-link to="/loop">Componente do loop</router-link>
    <router-link to="/triangulo">Área do triângulo</router-link>
    <router-link to="/circulo">Área do círculo</router-link>
    <router-link to="/trapezio">Área do trapézio</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/sobrenos">Sobre nós</router-link>
  </nav>
</div>
<RouterView/>
</template>

<script>
export default {
    name: 'App',
  }
</script>

<style>

</style>
