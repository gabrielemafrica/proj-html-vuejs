<script>

export default {
  name: 'SectionMainBuilding',
  components: {
  },
};

</script>

<template>
  <section id="building">
    <div class="container d-flex align-items-center">

      <!-- area testo -->
      <div class="text">
        <h5>Building Inspiring Spaces</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.
        </p>
      </div>
      
      <!-- area button -->
      <div class="call">
        <button type="button" class="yellow big">get a free quote</button>
        <div>
          <small>Only takes a few seconds!</small>
        </div>
      </div>
    </div>
  </section>
 

</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

#building{
  color: white;
  padding: 100px 0;
  background-image: url(../assets/img//about-call-to-action-57862405.jpg);
  background-size: cover;
  background-attachment: fixed;
  .container{
    height: 100%;
    width: 70%;
    .text{
      text-align: left;
      max-width: 60%;
      
      h5{
        position: relative;
        padding-bottom: 30px;
        margin-bottom: 30px;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 25%;
          height: 2px;
          background-color: $color-primary;
        }
      }
    }
    .call{
      width: 40%;
      text-align: center;
      button{
        font-size: 20px;
        padding: 15px 35px;
        margin-bottom: 10px;
      }
    }
  }
}

</style>
