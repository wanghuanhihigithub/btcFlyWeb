<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: function(){
    return {}
  },
  mounted: function(){
    axios.get('/virtual/oken').then(res=>{
        debugger;
    }).catch(error=>console.log(error));

    axios.get('/virtual/upbit').then(res=>{
            debugger;
    }).catch(error=>console.log(error));
  }

}
</script>

<style scoped>

</style>