<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  name: 'SingleScheda',

  props: {
    card: Object,
  },
};

</script>

<template>
  <div class="carta">
    <div class="immagine" v-html="card.logo"></div>
    <h5>{{ card.title }}</h5>
    <p>{{ card.content }}</p>
  </div>


</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;
.carta{
  padding: 20px 30px;
  background-color: rgb(245, 245, 245);
  border-radius: 15px;
  margin: 0 15px;
  .immagine{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  h5{
    font-size: 30px;
    font-weight: lighter;
  }
}

</style>
