<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import { store } from '../store';

export default {
  name: 'SingleVoiceMenu',

  props: {
    voce: String,
    i: Number,
  },
  emits: ['selected'],
  computed: {
    isSelected() {
      return this.i === store.selectedIdx;
    },
  },
  methods: {
    selectItem() {
      store.selectedIdx = this.i
      this.$emit('selected', this.i);
    },
  },
};

</script>

<template>

  <a :class="{ selected: isSelected }"  @click="selectItem" href="#">{{ voce }}</a>
  <div class="triangle" :class="{ active: isSelected }"><i class="bi bi-caret-down-fill"></i></div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

  a{
    text-transform: uppercase;
    line-height: 100px;
    vertical-align: middle;
    &.selected, &:hover{
                color: $color-primary;
            }
  }
  .triangle{
    position: absolute;
    z-index: 99;
    top: 105%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: white;
    display: none;
  }
  .triangle.active {
    display: block;
}


</style>
