<template>
  <div class="film-info" :id="id">
    <span class="info">Film: {{name}}</span>
    <span class="info">Date: {{date_of_release}}</span>
    <span class="info">Format: {{format}}</span>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    id: String,
    name: String,
    format: String,
    date_of_release: String,
  }
}
</script>

<style lang="scss" scoped>
.film-info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  .info {
    margin-top: 15px;
  }
}

</style>