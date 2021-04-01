<template>
  <div class="btn">this is {{text}}, click me and get some tags!</div>
</template>
<script>
export default {
  props:{
    text:{
      type:String,
      default:'a'
    }
  },
  data() {
    return {
    };
  }
}
</script>
<style>
.btn{
  margin-top:8px;
  cursor: pointer;
  border-radius:4px;
  padding:4px;
  border:1px solid #dcdee2;
}
.btn:hover{
  border-color: #57a3f3;
  color:#57a3f3;
}
</style>