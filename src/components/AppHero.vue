<script>
import { store } from '../store';
export default {
  name: 'AppHero',
  components: {
    
  },
  data() {
    return {
      store,
      selectedIdx: null,
    };
  },
};

</script>

<template>
  <div class="jumbotron d-flex justify-content-center align-items-center">

    <div class="info">
      <div class="square">
        <i class="bi bi-collection-play-fill"></i>
        <div>
          Demos
        </div>
      </div>
      <div class="square">
        <div class="green">
          <span>$</span>
          <span>39</span>
        </div>
        <div>
          On Sale
        </div>
      </div>
    </div>

    <div class="container-buttons">
      
      <h1>BUILDING INSPRING SPACES</h1>
      <p>We Build Ispiring Residential &amp; Commercial Spaces</p>
      <div class="jumbobuttons">
        <button type="button" class="gray">EXPLORE RECENT WORK</button>
        <button type="button" class="yellow">GET A QUOTE TODAY</button>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;
  .jumbotron{
    position: relative;
    color: white;
    height: 500px;
    width: 100%;
    background-image: url('../assets/img/home-slider-62528242.jpg');
    background-size: cover;

    .info{
      position: absolute;
      top: 20px;
      right: 20px;
      .square{
        cursor: pointer;
        padding: 5px;
        height: 50px;
        width: 50px;
        border-radius: 5px;
        margin-bottom: 5px;
        background-color: #fff;
        color: black;
        font-size: 10px;
        text-align: center;

        i, .green{
          font-size: 18px;
          span:first-child{
            font-size: 10px;
            vertical-align: top;
          }
        }

        
      }
    }

    .container-buttons{
      text-align: center;
      h1{
        font-weight: bold;
      }
      p{
        color: $color-primary;
        font-weight: lighter;
        font-size: 18px;
      }
      button{
        font-size: 14px;
        padding: 10px 20px;
        margin: 0 10px;
      }
    }
  }

</style>
