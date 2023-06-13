<script>
import SectionFooterTweets from './SectionFooterTweets.vue'
import SectionFooterContact from './SectionFooterContact.vue'

export default {
  name: 'AppFooter',
  components: {
    SectionFooterTweets,
    SectionFooterContact
  },
}

</script>

<template>

  <footer>

  <!-- parte alta -->
    <div class="container d-flex justify-content-between">

      <!-- prima sezione -->
      <section id="learn-more">
        <div class="logo">
          <img src="../assets/img/footer-logo.png" alt="logo" class="img-fluid">
        </div>
        <p>
          We are specialists in the construction of unique and exclusive properties. Our works inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.
        </p>
        <button type="buttton" class="yellow">learn more</button>
      </section>

      <!-- seconda sezione -->
      <SectionFooterTweets />
      <!-- terza sezione -->
      <SectionFooterContact />
      <!-- quarta sezione -->
      <section id="where">
        <h4>find us</h4>
        <div class="map">
          <img src="../assets/img/construction_map_pin.png" alt="map" class="img-fluid">
        </div>
      </section>
    </div>

    <!-- footer bottom -->
    <div class="footer-bottom">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="footer-info">
          copyright 2023 -2024 costruction theme by <strong>boolen theme</strong> | all rhights reserved | powered by <strong>vue js</strong>
        </div>
        <div>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-instagram"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

footer{
  background-color: $color-second;
  border-top: 10px solid rgb(63, 63, 63);
  padding-top: 50px;
  .container{
    section{
      width: calc((100% / 4) - 30px);
    }
    #learn-more{
      color: gray;
      font-size: 14px;
      .logo{
        margin-bottom: 20px;
        width: 60%;
      }
    }
  }

  .footer-bottom{
    margin-top: 50px;
    align-items: center;
    padding: 20px 0;
    background-color: rgb(17, 17, 17);
    color: gray;
    text-transform: uppercase;
    font-size: 10px;
    .container > div:last-child{
      font-size: 14px;
      display: flex;
      gap: 10px;
      cursor: pointer;
    }
  }
}

</style>
