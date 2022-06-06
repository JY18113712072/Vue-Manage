<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <CommonForm
        :formLabel="operateFormLabel"
        :form.sync="operateForm"
        :inline="true"
        ref="from"
      ></CommonForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+&nbsp;新增</el-button>
      <CommonForm
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="from"
      >
        <el-button type="primary" @click="getList">搜索</el-button>
      </CommonForm>
    </div>
  </div>
</template>

<script>
import CommonForm from "../../components/CommonForm.vue";
export default {
  name: "view-user",
  data() {
    return {
      operateType: "add",
      isShow: false,
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      operateForm: {
        name: "",
        addr: "",
        age: "",
        brith: "",
        sex: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: {
        keyword: "",
      },
    };
  },
  components: { CommonForm },
  methods: {
    confirm() {
       if(this.operateType === "edit"){
          this.axios.post('/user/edit', this.operateForm).then(res =>{
             this.isShow = false;
             console.log(res);
          })   
       }else{
          this.axios.post('/user/add', this.operate).then(res =>{
             this.isShow = false;
             console.log(res);
          })
       }       
    },
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = { name: "", addr: "", age: "", brith: "", sex: "" };
    },
    getList() {},
  },
};
</script>

<style lang="less" scoped>
.manage-header{
   display: flex;
   justify-content:space-between ; 
   align-items:center
}
</style>