<template>
  <div class="container mt-5">
    <h1 class="text-primary">{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: '¡Hola Mundo con Laravel, Vue.js y Bootstrap!'
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
h1 {
  font-weight: bold;
  text-align: center;
}
</style>