<script>
import { store } from '../store';
import SingleVoiceMenu from './SingleVoiceMenu.vue';

export default {
  name: 'AppMenu',
  components: {
    SingleVoiceMenu,
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>



</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;



</style>
