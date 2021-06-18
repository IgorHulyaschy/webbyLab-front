<template>
  <Header/>
  <div class="wrapper">
    <div class="wrap" v-for="film in films"  :key="film.id">
      <AllFilms
        :films_name="film.films_name"
        :date_of_release="film.date_of_release"
        :format="film.format"
        v-for="actor in actors"  :key="actor.id"
        :fname="actor.fname"
        :lname="actor.lname"
      />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import AllFilms from '../components/AllFilms.vue'
import api from '../api/api'
export default {
  name: "Films",
  components: {
    Header,
    AllFilms,
  },
  data() {
    return {
      films: [{}],
      actors: [{}],
    }
  },
  beforeCreate(){
    api.get('films')
      .then((res) => {
        this.films = res.data.films
        const [arr] = [];
        res.data.result.map((item) => {
          arr.push(item)
        })
        this.actors = [arr]
        console.log(this.actors)
      })
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  height: 500px auto;
  background-color: rgb(255, 255, 255);
  align-items: center;
  .wrap{
    width: 100%;
  }
}

</style>