<script>
import { store } from '../store';
import SingleScheda from './SingleScheda.vue';



export default {
  name: 'SectionMainCore',
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

 <section id="core">

    <!-- parte testo -->

    <div class="testi">
      <h5 class="section-title">Our Core Values</h5>
      <p class="sottotitolo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.</p>
    </div>

    <!--  schede -->

    <div class="container d-flex justify-content-center gap-4" id="schede-bottom">
      <div class="scheda" v-for="(scheda, index) in store.core" :key="index">
        <SingleScheda :card= "scheda"/>
      </div>
    </div>

 </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

#core{
  text-align: center;
  background-color: rgb(245, 245, 245);
  padding-top: 80px;
  }

</style>
