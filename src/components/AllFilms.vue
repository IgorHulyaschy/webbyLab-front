<template>
  <div class="wrap">
    <div class="films" :id="id" @click="() => $emit('click')">
      <span>Film: {{films_name}}</span>
      <a href="#">more</a>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "AllFilms",
  props: {
    films_name: String,
    id: String
  },

}
</script>

<style lang="scss" scoped>
  .wrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .films{
      width: 80%;
      display: flex;
      justify-self: center;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      margin: 20px;
      a{
        text-decoration: none;
        color: blue;
      }
    }
    hr{
      width: 80%;
    }
  }
</style>