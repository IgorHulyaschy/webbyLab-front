<template>
  <Header/>
  <div class="wrapper">
    <form class="newFilm">
      <div class="mes">Add new Film</div>
      <div class="settings">
        <span>Name</span>
        <Text placeholder="Type film`s name here..." v-model="filmName"/>
        <span class="error">{{filmError}}</span>
      </div>
      <div class="settings">
        <span>Year</span>
        <Text placeholder="Year of release..." v-model="date_of_release"/>
        <span class="error">{{yearError}}</span>
      </div>
      <div class="wrap-radio">
        <Radio name="format" value="DVD" id="DVD" v-model="selected"/><label for="DVD">DVD</label>
        <Radio name="format" value="VHS" id="VHS" v-model="selected"/><label for="VHS">VHS</label>
        <Radio name="format" value="Blu-Ray" id="Blu-Ray" v-model="selected"/><label for="Blu-Ray">Blu-Ray</label>
      </div>
      <div class="actors" :key="i" v-for="(input, i) in actors">
        <div class="settings" >
          <span>Actor`s name</span>
          <Text placeholder="Name..." v-model="input.fname" @keydown="validate(event)"/>
        </div>
        <div class="settings">
          <span>Actor`s last name</span>
          <Text placeholder="Last name..." v-model="input.lname"/>
        </div>
        <hr/>
      </div>
      <input type="file" accept=".txt" @change="getFile"/>
      <div class="error" v-if="fileError">{{errorFileMessage}}</div>
      <div class="succses" v-if="succsesBool">{{succses}}</div>
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
// import router from '../router/index'
import { useField} from 'vee-validate'
import * as yup from 'yup'
export default {
  name: "AddFilm",
  components: {
    Header,
    Text,
    Radio,
    CustomBut,
  },
  data() {

    const {errorMessage: filmError, value: filmName} = useField('fieldName', yup.string().min(3).max(30).required());
    const {errorMessage: yearError, value: date_of_release} = useField('fieldName', yup.number().min(1900).max(2021).required());
    return {
      selected: "",
      actors: [
        {fname: this.fname, lname: this.lname}
      ],
      filmName,
      date_of_release,
      file: String,
      filmError,
      yearError,
      fileError: false,
      errorFileMessage: String,
      succses: String,
      succsesBool: false,
    }
  },
  methods: {
    pushInput() {
      this.actors.push( {
        fname: "", 
        lname: "",
      })
    },
    validate(event) {
      return /[a-z 0-9]/i.test(event.key)
    },
    getFile(e){
      const file = e.target.files[0]
      const reader = new FileReader();
      reader.addEventListener('load', event => {
        let content = event.target.result;
        let rows = content.split('\r\n');
        api.post('films', rows)
          .then(() => {
            this.fileError = false;
            this.succsesBool = true;
            this.succses = "All the films from the file added succsessfully"
          })
          .catch((err) => {
            this.succsesBool = false;
            this.errorFileMessage = err.response.data.message || err.response.data.error
            this.fileError = true
          });
      });
      reader.readAsText(file)        
    },
    create() {
      const data = {
        films_name: this.filmName,
        date_of_release: this.date_of_release,
        format: this.selected,
        actors: this.actors,
      }
      if(this.filmError === undefined && this.yearError === undefined && this.selected != ""){
        api.post("film", data)
          .then(() => {
            this.fileError = false;
            this.succsesBool = true;
            this.succses = "Film created!!!"
          })
          .catch((err) => {
            this.fileError = true;
            this.succsesBool = false;
            this.errorFileMessage = err.response.data.error;
          })
      }
      else {
        this.errorFileMessage = "Fill all the fields correctly"
        this.fileError = true 
      }
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
    .error{
        color: rgb(197, 31, 31);
    }
    .succses{
      color: green;
      font-size: 20px;
      font-weight: bold;
    }
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
      color: rgb(187, 187, 187);
      }
      .error{
        color: rgb(197, 31, 31);
      }
    }
    hr{
      width: 70%;
      
      margin-top: 10px;
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