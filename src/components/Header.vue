<template>
  <header class="wrap-header">
    <div class="logo"><router-link to="/">FilmHub</router-link></div>
    <div class="wrap-menu">
      <router-link to="/films">Films</router-link>
      <router-link to="/addFilm">Add film</router-link>
      <router-link to="/search/film">Search</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.wrap-header {
  width: 100%;
  height: 50px;
  background-color: rgb(59, 59, 184);
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .logo {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
  }
  .wrap-menu {
    width: 30%;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      font-weight: bold;
    }
  }
}
</style>
