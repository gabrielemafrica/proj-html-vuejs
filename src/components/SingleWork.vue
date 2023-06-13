<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  name: 'SingleWork',

  props: {
    work: Object,
  },
};

</script>

<template>
  <div class="work">
    <div class="immagine" v-html="work.logo"></div>
    <h5>{{ work.numero }}</h5>
    <p>{{ work.content }}</p>
  </div>


</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;
.work{
  color: $color-primary;
  text-align: center;

  .immagine{

    font-size: 55px;
 
  }

  h5{
    font-size: 50px;
    font-weight: lighter;
  }
  p{
    font-size: 16px;
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }
}

</style>
