<template>
  <input type="text" class="inputForSmthing" :placeholder="placeholder" :value="modelValue"  @input="(event) => $emit('update:modelValue', event.target.value)"/>
</template>

<script>
export default {
  name: 'Text',
  props: {
    placeholder: String,
    id: String,
    modelValue: String,
  },
}
</script>

<style lang="scss"  scoped>
  
    .inputForSmthing{
      padding:10px;
      border:0;
      box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
      border-left: 4px solid transparent;
      box-sizing: border-box;
      width: 100%;
    }
    .inputForSmthing:focus{
      border-left-color: rgb(59, 59, 184);
      border-width: 4px;
    }
  

</style>