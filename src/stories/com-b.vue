<template>
<div class="com-b">
  <div class="com-b-item" v-for="item in items" :key="item">this is {{item}}</div>
</div>
</template>
<script>
export default {
  props:{
    items:{
      type:Array,
      default:()=>{
        return ['b1','b2','b3']
      },
      required:true
    }
  },
  data() {
    return {
    };
  }
}
</script>
<style>
.com-b{
  display: flex;
  align-items: center;
}
.com-b-item{
  display: inline-block;
  border: 1px solid #ccc;
  color:black;
  padding:5px;
  margin-left:8px;
  margin-bottom: 8px;
}
</style>