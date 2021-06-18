<template>
  <Header/>
  <div class="wrapper">
    <form class="newFilm">
      <div class="mes">Add new Film</div>
      <div class="settings">
        <span>Name</span>
        <Text placeholder="Type film`s name here..." v-model="filmName"/>
      </div>
      <div class="settings">
        <span>Year</span>
        <Text placeholder="Year of release..." v-model="date_of_release"/>
      </div>
      <div class="wrap-radio">
        <Radio name="format" value="DVD" id="DVD" v-model="selected"/><label for="DVD">DVD</label>
        <Radio name="format" value="VHS" id="VHS" v-model="selected"/><label for="VHS">VHS</label>
        <Radio name="format" value="Blu-Ray" id="Blu-Ray" v-model="selected"/><label for="Blu-Ray">Blu-Ray</label>
      </div>
      <div class="actors" :key="i" v-for="(input, i) in actors">
        <div class="settings" >
          <span>Actor`s name</span>
          <Text placeholder="Name..." v-model="input.fname"/>
        </div>
        <div class="settings">
          <span>Actor`s last name</span>
          <Text placeholder="Last name..." v-model="input.lname"/>
        </div>
      </div>
      <div class="buts">
        <CustomBut value="Add actor" @click.prevent="pushInput"/>
        <CustomBut value="Add film" @click="create"/>
      </div>
      
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Text from '../components/controllers/Text.vue'
import Radio from '../components/controllers/Radio.vue'
import CustomBut from '../components/controllers/CustomBut.vue'
import api from '../api/api'
import router from '../router/index'
export default {
  name: "AddFilm",
  components: {
    Header,
    Text,
    Radio,
    CustomBut,
  },
  data() {
    return {
      selected: "",
      actors: [
        {fname: this.fname, lname: this.lname}
      ],
      filmName: "",
      date_of_release: "",
    }
  },
  methods: {
    pushInput() {
      this.actors.push( {
        fname: "", 
        lname: "",
      })
    },
    create() {
      const data = {
        films_name: this.filmName,
        date_of_release: this.date_of_release,
        format: this.selected,
        actors: this.actors,
      }
      api.post("film", data)
        .then(() => {
          router.push('/films')
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
  width: 40%;
  height: 500px auto;
  background-color: rgb(255, 255, 255);
  .newFilm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    .mes{
      font-size: 26px;
      font-weight: bold;
      margin-top: 20px;
    }
    .buts{
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
    }
    .settings{
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
      margin-top: 20px;
      align-self: flex-start;
      }
    }
    .actors{
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .settings{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          margin-top: 20px;
          align-self: flex-start;
        }
      }
    }
    
    .wrap-radio{
      margin-top: 20px;
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

</style>