<script>
import { store } from '../store';
import SingleScheda from './SingleScheda.vue';



export default {
  name: 'SectionMainNews',
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

 <section id="news">

    <!-- test -->

  
  <h5 class="section-title">Latest News</h5>
  <p class="sottotitolo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.</p>
  

  <!--  schede  -->

  <div class="container d-flex justify-content-center gap-4" id="schede-bottom">
    <div class="scheda" v-for="(scheda, index) in store.news" :key="index">
      <SingleScheda :card= "scheda"/>
    </div>
  </div>
  <span>VIEW ALL ARTICLES</span>
 </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

#news{
  text-align: center;
  background-color: #F5F5F5;
  padding-bottom: 100px;
  .scheda:first-child, .scheda:last-child{
    border-bottom: 2px solid white;
  }
  span{
    color: rgb(154, 154, 154);
    cursor: pointer;
    &:hover{
      color: $color-primary;
    }
  }

}
</style>
