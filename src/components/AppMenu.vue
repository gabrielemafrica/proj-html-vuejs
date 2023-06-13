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
      selectedIdx: null,
    };
  },

    methods: {
        selectItem(idx) {
            if (store.vociMenu[idx].selected) {
                store.vociMenu[idx].selected = false;
                // this.selectedIdx = null;
            } else {
            // Deselect previous item if any
            if (store.selectedIdx !== null) {
                store.vociMenu[store.selectedIdx].selected = false;
            }
            store.vociMenu[idx].selected = true;
            store.selectedIdx = idx; // Update selected index
            }
        },
    },

};

</script>

<template>

    <div class="menu">
        <ul class="orizontal">
            <li v-for="(voice, index) in store.vociMenu" :key="index">
                <SingleVoiceMenu  :voce="voice.nome" :i="index" @selected="selectItem"/>
            </li>
            <li>
                <button type="button" class="yellow">get quote</button>
            </li>
        </ul>
    </div>



</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

.menu{
    height: $h-header;
    .orizontal{
        height: 100%;
        font-size: 12px;
        color: gray;
        li{

            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            a{
                color: $color-primary;

            }
            // button{
            //     text-transform: uppercase;
            //     border: none;
            //     background-color: $color-primary;
            //     padding: 5px 10px;
            //     font-size: 12px;
            //     color: gray;
            //     &:hover{
            //         background-color: $color-second;
            //         color: white;
            //     }
            // }
        }
    }
}

</style>
