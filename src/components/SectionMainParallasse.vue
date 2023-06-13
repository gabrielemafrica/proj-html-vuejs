<script>
import { store } from '../store';
import SingleWork from './SingleWork.vue';



export default {
  name: 'SectionMainParallasse',
  components: {
    SingleWork,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>


  <section id="parallasse">
    <div class="wave">
      <img src="../assets/img/wave.svg" alt="wave">
    </div>

    <div class="works d-flex justify-content-around align-items-center">
      <div v-for="(element, index) in store.works" :key="index">
        <SingleWork :work="element"/>
       </div>
    </div>

    <div class="wave">
      <img src="../assets/img/wave2.svg" alt="wave">
    </div>
    
  </section>
 

</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

#parallasse{
  // height: 700px;
  background-image: url(../assets/img/home-244125289.jpg);
  background-size: cover;
  background-attachment: fixed;
  // position: relative;

  .wave{
    height: 300px;
    width: 100%;
  }

  .works{
    height: 100%;
    width: 80%;
    margin: 0 auto;
  }

}

</style>
