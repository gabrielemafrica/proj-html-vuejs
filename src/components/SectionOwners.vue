<script>
import { store } from '../store';



export default {
  name: 'SectionOwners',
  components: {
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>


  <section id="owners">
  <!-- onda top -->
    <div class="wave">
      <img src="../assets/img/wave3.svg" alt="wave">
    </div>

<!-- schede owners -->
<div class="owners-say" @click="store.owner1Speaking = !store.owner1Speaking">
  <h5 class="section-title">Our Home Owners Say</h5>

  <!-- primo proprietario -->
  <div class="owner1" v-if="store.owner1Speaking">
    <!-- foto -->
    <div class="foto">
      <img src="../assets/img/home-testimonial-113165296.jpg" alt="harry">
    </div>
    <!-- citazione -->
    <blockquote>
      <em>&quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam error, ullam vitae iure harum eligendi sapiente veritatis ex a quia pariatur corporis. Sunt facilis nobis perspiciatis repudiandae delectus numquam qui!.&quot;</em>
      <br>
      <br>
      <cite class="cita">HARRY SMITH - NEW HOME OWNER</cite>
    </blockquote>
    <div class="puntini">
      <i class="bi bi-circle-fill"></i>
      <i class="bi bi-circle"></i>
    </div>
  </div>

  <!-- secondo proprietario -->
  <div class="owner2" v-else>
    <!-- foto -->
    <div class="foto">
      <img src="../assets/img/home-testimonial-84268399.jpg" alt="harry">
    </div>
    <!-- citazione -->
    <blockquote>
      <em>&quot;Questa è stata una bellissima esperianza, mai dimenticherò quanto avete fatto per me! La casa in cui vivo adesso è la casa dei miei sogni, molto carina, senza soffitto e senza cucina. Non ci posso dormire dentro, perchè non c'è il pavimento.&quot;</em>
      <br>
      <br>
      <cite class="cita">PIPPO BAUDO - CONSTRUCTOR</cite>
    </blockquote>
    <div class="puntini">
      <i class="bi bi-circle"></i>
      <i class="bi bi-circle-fill"></i>
    </div>
  </div>

</div>

<!-- onda bottom -->
    <div class="wave">
      <img src="../assets/img/wave4.svg" alt="wave">
    </div>
    
  </section>
 

</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

#owners{
  // height: 700px;
  background-image: url(../assets/img/home-parallax-144609983.jpg);
  background-size: cover;
  background-attachment: fixed;
  // position: relative;

  .wave{
    height: 300px;
    width: 100%;
  }
  .owners-say{
    cursor: pointer;
    text-align: center;
    color: white;
    .foto{
      height: 150px;
      width: 150px;
      margin: 0 auto;
      margin-bottom: 20px;
      border-radius: 50%;
      img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    blockquote{
      margin: 0 auto;
      max-width: 40%;
      font-weight: bolder;
      font-size: 20px;
    }
    .puntini{
      font-size: 14px;
      margin-top: 40px;
      i{
        margin: 0 5px;
      }
    }
  }

}

</style>
