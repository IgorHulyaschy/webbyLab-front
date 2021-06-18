<template>
  
    <input type="button" :value="value" class="ButforAction">
  
</template>

<script>
export default {
  name: 'CustomBut',
  props: {
    value: String,
  }
}
</script>

<style lang="scss" scoped>
  .ButforAction{
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 19px;
    border-radius: 5px;
    border-color: rgb(59, 59, 184);
    background-color: rgb(59, 59, 184);
    color: white;
    cursor: pointer;
    margin-bottom: 30px;
    
  }
  .ButforAction:hover{
    font-weight:bold;
    background-color:white;
    color:rgb(59, 59, 184);
  }
  .ButforAction:active{
    border-color: rgb(59, 59, 184);
    background-color: rgb(59, 59, 184);
    color: white;
  }

</style>