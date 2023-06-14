<script>
import { store } from '../store';
import SingleScheda from './SingleScheda.vue';



export default {
  name: 'SectionMainSchede',
  components: {
    SingleScheda,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>

 <section id="schede">

 <!-- schede parte alta -->
  <div id="schede-top">
    <span>Do You Have A Costruction Project We Can Help With?</span>
    <button type="button" class="gray big">get a free quote</button>
  </div>

  <!-- parte centrale -->

<div id="schede-centro">
  <h5 class="section-title">Specialists In Modern Constriction</h5>
  <p class="sottotitolo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.</p>
</div>

<!--  schede bottom -->

<div class="container d-flex justify-content-between" id="schede-bottom">
  <div class="scheda" v-for="(scheda, index) in store.schede" :key="index">
    <SingleScheda :card= "scheda"/>
  </div>
</div>
 </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

#schede{
  text-align: center;
  
  #schede-top{
    position: relative;
    background-color: $color-primary;
    padding: 40px 0;
    font-size: 30px;
    font-weight: lighter;

    button{
      border: 2px solid white;
      position: absolute;
      transform: translate(-50%, 50%);
      bottom: 0;
      left: 50%;
    }
  }
  #schede-centro{
    padding-top: 100px;
  }
}
</style>
