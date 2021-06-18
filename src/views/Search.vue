<template>
  <Header/>
  <div class="wrapper">
    <div class="mes">Search</div>
    <div class="search">
      <Text placeholder="Search by film`s name" v-model="filmName"/>
      <Text placeholder="Search by actor`s fname" v-model="actorFname"/>
    </div>
    <div class="buts">
      <CustomBut value="Search by name" @click="findByName"/>
      <CustomBut value="Search by actor" @click="findByActor"/>
    </div>
    <div v-if="nores"></div>
    <div class="result"  v-if="search1">
      <div v-for="film in films" :key="film.id">
        <SearchResult
          :id="film.id"
          :name="film.films_name"
          :date_of_release="film.date_of_release"
          :format="film.format"
        />
      </div>
    </div>
    <div class="result"  v-if="search2">
      <div v-for="film in films2" :key="film.id">
        <SearchResult
          :id="film.id"
          :name="film.films_name"
          :date_of_release="film.date_of_release"
          :format="film.format"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Text from '../components/controllers/Text.vue'
import CustomBut from '../components/controllers/CustomBut.vue'
import Header from '../components/Header.vue'
import SearchResult from '../components/SearchResult.vue'
import api from '../api/api'
export default {
  name: "Search",
  components: {
    Text,
    Header,
    CustomBut,
    SearchResult,
  },
  data() {
    return {
      filmName: "",
      actorFname: "",
      search1: false,
      search2: false,
      films: [{}],
      films2: [{}],
      nores: false
    }
  },
  methods: {
    findByName() {
      api.get(`film/${this.filmName}`)
        .then((res) => {
          
            this.films = res.data
            console.log(this.films)
            this.nores = false
            this.search1 = true
            this.search2 = false
          
        })
    },
    findByActor() {
      api.get(`film/actor/${this.actorFname}`)
        .then((res) => {
          this.films2 = res.data
            console.log(this.films)
            this.nores = false
            this.search1 = false
            this.search2 = true
        })
    }
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
  .buts{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    .ButforAction{
    display: flex;
    justify-self: flex-end;
    font-size: 14px;
    width: 45%;
    }
  }
  
  .mes{
    font-size: 26px;
    font-weight: bold;
    margin-top: 20px;
  }
  .search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .inputForSmthing{
      margin-top: 20px;
      width: 50%;
    }
  }
}

</style>