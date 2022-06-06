<template>
  <div class="tabs">
    <el-tag
      size="medium"
      v-for="(item,index) in tags"
      :key="item.name"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changMenu(item)"
      @close="handleClose(item,index)"
    >
    {{item.label}}
    </el-tag>
  </div>
</template>

<script>
import { mapState ,mapMutations} from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
     changMenu(item){
        this.$router.push(item.name);
     },
     handleClose(item,index){ 
        const length = this.tags.length -1
        this.close(item)
        if(item.name !== this.$route.name){
           return;
        }
        if(index === length){
           this.$router.push(this.tags[index-1].name);
        }else{
           this.$router.push(this.tags[index].name);
        }
     },  
     ...mapMutations({
        close:'closeTag'
     }) 
  }
};
</script>

<style lang="less" scoped  >
.tabs{
   margin:20px;
   .el-tag{
      margin-right: 15px;
      cursor:pointer;
   }

}
</style>