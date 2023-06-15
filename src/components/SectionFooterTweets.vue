<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import { store } from '../store';

export default {
  name: 'SectionFooterTweets',
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
    <h4>latest tweets</h4>

    <!-- container conatanuti -->
    <div class="container d-flex">

      <!-- logo -->
      <div>
        <div class="logo-post">
          <img :src="store.tweets.logoURL" :alt="store.tweets.nome">
        </div>
      </div>

      <!-- post -->
      <div class="post">

        <!-- icone -->
        <i class="bi bi-twitter"></i>
        <i class="bi bi-heart"></i>
        <i class="bi bi-box-arrow-right"></i>
        <i class="h">22h</i>

        <h5>{{ store.tweets.nome }}</h5>
        <h6>{{ store.tweets.nomeAsh }}</h6>

        <!-- post che nel testo ha tag a -->
        <p v-html="store.tweets.post"></p>
        <div class="attachment">
          <img :src="store.tweets.imageURL" :alt="store.tweets.nome" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

section{
  color: white;
  .logo-post{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;
    margin-right: 10px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .post{
    padding-bottom: 30px;
    position: relative;
    i{
      cursor: pointer;
      position: absolute;
      filter: opacity(0.5);
      &.bi-twitter{
        top: 0;
        right: 0;
      }
      &.bi-heart, &.bi-box-arrow-right, &.h{
        bottom: 0;
      }
      &.bi-heart{
        left: 0;
      }
      &.bi-box-arrow-right{
        left: 30px;
      }
      &.h{
        right: 0;
        text-decoration: underline;
      }
      &:hover{
        color: $color-primary;
        filter: opacity(1);
      }
    }
    
    h5,h6{
      font-size: 15px;
      font-weight: bold;
      margin-bottom: -1px;
    }
    h6{
      font-weight: lighter;
    }
    p{
      font-size: 14px;
    }
  }
}

</style>
