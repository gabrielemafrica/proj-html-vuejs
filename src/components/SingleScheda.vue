<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  name: 'SingleTesti',

  props: {
    card: Object,
  },
};

</script>

<template>
  <div class="carta">
    <div class="immagine" v-html="card.foto"></div>
    <h5>{{ card.title }}</h5>
    <small v-if="card.data">{{ card.data }}</small>
    <p>{{ card.content }}</p>
  </div>


</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;
@use '../styles/partials/singleScheda' as *;


</style>
