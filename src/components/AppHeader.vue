<script>
import AppMenu from './AppMenu.vue';

export default {
  name: 'AppHeader',
  components: {
    AppMenu,
  },
}

</script>

<template>
  <header>
    
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
        <img src="../assets/img/construction_logo.png" alt="logo" class="img-fluid">
      </div>

      <div class="menu">
        <AppMenu />
      </div>
    
    </div>

  </header>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

header{
  height: $h-header;
  .container{
    height: 100%;
    .logo{
      width: 150px;
    }
  }
}

</style>
