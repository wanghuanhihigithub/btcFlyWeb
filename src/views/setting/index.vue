<<template>
    <div style="padding:20px;" id="app">
        <el-form ref="form" :model="form" label-width="180px">
          <el-form-item label="是否开启短信通知">
            <el-switch v-model="form.enableSms" active-text="开启"  inactive-text="关闭"/>
          </el-form-item>
          <el-form-item label="发送短信间隔时间(分钟)">
                <el-input  v-model="form.smsSendInterval "></el-input>
          </el-form-item>
          <el-form-item label="短信收件人(多个用,分隔)">
                <el-input  v-model="form.smsReceiver"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="goBack">导航</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'setting',
  data: function(){
    return {
        form: {
                  enableSms:false,
                  smsSendInterval: 30,
                  smsReceiver: ''
                }
    }
  },
  mounted: function(){
      this.findSetting()
    },
  methods: {
      findSetting:function(){
           axios.get('/api/setting/1').then(res=>{
                 res.data.enableSms = !!res.data.enableSms
                 this.form = res.data;
           }).catch(error=>console.log(error));
      },
      onSubmit: function(){
          axios.post('/api/setting/1',this.form).then(res=>{
                   debugger;
          }).catch(error=>console.log(error));
      },
      goBack: function(){
        this.$router.push({ path: '/' })
      }
  }
}
</script>

<style scoped>

</style>