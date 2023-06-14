<script>


export default {
  name: 'SectionMainRecent',
  components: {

  },
};

</script>

<template>

  <section id="recent">

    <!-- intestazione -->
    <h5 class="section-title">Explore Recent Work</h5>
    <p class="sottotitolo">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos dolorum iste nemo obcaecati impedit ad voluptatibus, doloremque consequuntur suscipit nesciunt eaque aliquam quam.
    </p>

    <!-- fotografie -->
    <div class="work-foto d-flex justify-content-center gap-4">
      <div>
        <img src="../assets/img/project2-featured-15013609-400x400.jpg" alt="project1">
      </div>
      <div>
        <img src="../assets/img/project1-featured-294276386-400x400.jpg" alt="project1">
      </div>
      <div>
        <img src="../assets/img/project3-featured-189023420-400x400.jpg" alt="project1">
      </div>
    </div>

    <!-- call to action -->
    <span>VIEW ALL PROJECTS</span>
    
  </section>
 

</template>

<style scoped lang="scss">
@use '../styles/general.scss'as * ;
@use '../styles/partials/variables' as *;

#recent{
  text-align: center;
  padding-bottom: 100px;
  .work-foto{

    div{
      width: 300px;
      padding-bottom: 50px;

      
      &:first-child, &:last-child {
        border-bottom: 2px solid rgb(244, 244, 244);
      }
      img{
        width: 100%;
      }
    }
  }
span{
  color: rgb(161, 161, 161);
  cursor: pointer;
  &:hover{
    color: $color-primary;
  }
}
}

</style>
