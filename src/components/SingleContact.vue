<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  name: 'SingleContact',

  props: {
    contact: Object,
  },
};

</script>

<template>

  <div class="d-flex">

  <!-- icona con v html -->
    <div v-html="contact.img"></div>
    
    <!-- valore contatto -->
    <div>
      <div v-if="contact.nome">{{ contact.nome }}</div>
      <div>{{ contact.valore }}</div>
    </div>  
  </div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;


.d-flex{
  gap: 15px;
  font-size: 12px;
}
 
</style>
