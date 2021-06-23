<template>
  <Header/>
  <div class="content">
    <ul>
      <ol>
        Films - link to page where you can see all the films in DB in order by alphabet. By clicking on one of them, you can see their full information, and delete them.
      </ol>
      <ol>
        Add film - link to page where you can create new Film by filling the fields or import them from the .txt file. 
      </ol>
      <ol>
        Search - link to page where you can find films by their name or by actor`s name. These responses has wild cards (%%), so you dont need to fill the full name.
      </ol>
    </ul>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'Main',
  components: {
    Header,
  }
}
</script>

<style  lang="scss" scoped>
  .content{
    width: 40%;
    ul{
      ol{
        margin-top: 50px;
      }
    }
  }
</style>