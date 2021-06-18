<template>
  <div class="films">
    <span>Film: {{films_name}}</span>
    <span>Date: {{date_of_release}}</span>
    <span>Fromat: {{format}}</span>
    <span>Actors: {{fname}} {{lname}}</span>
  </div>
</template>

<script>
export default {
  name: "AllFilms",
  props: {
    films_name: String,
    date_of_release: String,
    format: String,
    lname: String,
    fname: String
  }
}
</script>

<style lang="scss" scoped>
.films{
  display: flex;
  flex-direction: column;
  margin: 20px;
}
</style>