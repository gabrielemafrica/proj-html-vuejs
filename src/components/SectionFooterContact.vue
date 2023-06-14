<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import { store } from '../store';

import SingleContact from './SingleContact.vue';

export default {
  name: 'SectionFooterContact',
  components: {
    SingleContact,
  },
  data() {
    return {
      store,
    }
  },
};

</script>

<template>
  <section>
    <!-- titolo -->
    <h4>contact us today</h4>

    <!-- contatti -->
    <ul>
      <li v-for="(contatto, index) in store.contacts" :key="index">
        <SingleContact :contact= "contatto"/>
      </li>
    </ul>


  </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;
 
section{
  color: rgb(115, 115, 115);

  ul{
    margin: 0;
    li{
      margin-top: 15px;
      cursor: pointer;
      &:hover{
        color: $color-primary;
        text-decoration: underline;
      }
    }
  }
}
</style>
