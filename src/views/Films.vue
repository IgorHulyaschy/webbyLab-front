<template>
  <Header/>
  <div class="wrap-cont">
    <div class="wrapper">
      <div class="wrap" v-for="film in films"  :key="film.id">
        <AllFilms
          @click="log(film.id)"
          :films_name="film.films_name"
          :id="film.id"
        />
      </div>
      
    </div>
    <div class="info" v-if="info">
      <div class="info-wrap" >
        <div class="name">{{film.films_name}}</div>
        <div class="cont">Release: {{film.date_of_release}}</div>
        <div class="cont">Format: {{film.format}}</div>
        <ul class="cont">Actors:
          <li v-for="(actor, i) in actors" :key="i">
            {{actor.fname}} {{actor.lname}}
          </li>
        </ul>
        <CustomBut value="delete" @click="deleteFilm(film.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import AllFilms from '../components/AllFilms.vue'
import api from '../api/api'
import CustomBut from '../components/controllers/CustomBut.vue'
export default {
  name: "Films",
  components: {
    Header,
    AllFilms,
    CustomBut,
  },
  data() {
    return {
      films: [{}],
      actors: [],
      info: false,
      film: {},
    }
  },
  beforeCreate(){
    api.get('films')
      .then((res) => {
        this.films = res.data.films
      })
  },
  methods: {
    log(id) {
      api.get(`film/info/${id}`)
        .then((res) => {
          this.info = true;
          this.film = res.data.film
          this.actors = res.data.actors
        })
    },
    deleteFilm(id) {
      const list = this.films.filter( item => {
        return item.id != id
      })
      this.films = list;
      this.info = false;
      api.delete('film', {data:{id: id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-cont{
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .wrapper{
    margin-top: 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    height: auto;
    background-color: rgb(255, 255, 255);
    align-items: center;
    .wrap{
      width: 100%;
    }
  }
  .info{
    margin-top: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 80vh;
    background-color: rgb(255, 255, 255);
    .info-wrap{
      
      width: 80%;
      display: flex;
      align-self: center;
      flex-direction: column;  
      .name{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        font-size: 25px;
      }
      .cont{
        margin-top: 15px;
      }
      ul{
        margin: 0;
        padding:0;
        font-weight: bold;
        margin-bottom: 20px;
        li{
          font-weight: normal;
          margin-top: 10px;
          padding-left: 15px;
          list-style-type: none;
        }
      }
      .ButforAction{
        display: flex;
        align-self: flex-end;
      }
    }
  }
}

</style>