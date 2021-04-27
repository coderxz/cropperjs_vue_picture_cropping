<template>
  <div class="hello">
    <div class="btn">
      <el-button type="success" @click="gotoUploadImg" class="btn">去上传图片</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  methods:{
    gotoUploadImg(){
      this.$router.push({
        name:'uploadImage',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  width: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
