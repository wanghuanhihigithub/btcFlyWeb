<<template>
    <div style="padding:20px;" id="app">
            <div class="panel panel-primary">
                <div class="panel-heading">用户管理</div>
                <button v-on:click="insert()">insert</button>
                <table class="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>用户名</th>
                            <th>年龄</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for = "(user,index) in users">
                          <td>{{index+1}}</td>
                          <td>{{user.name}}</td>
                          <td>{{user.age}}</td>
                          <td><button v-on:click="remove(user)">remove</button></td>
                          </tr>
                    </tbody>
                </table>
            </div>

            <!--添加/修改页面-->
             <div>
                <div class="dialog-wrap">
                  <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
                  <transition name="drop">
                    <div class="dialog-content"  v-if="isShow">
                      <p class="dialog-close" @click="closeMyself">x</p>
                      <div class="content">用户ID：<input v-model="user.id" type="text"></div>
                      <div class="content">用户名：<input v-model="user.name" type="text"></div>
                      <div class="content">用户年龄：<input v-model="user.age" type="text"></div>
                      <button v-on:click="save()">save</button>
                    </div>
                  </transition>
                </div>
              </div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
      isShow: {
        type: Boolean,
        default: false
      }
  },
  name: 'hello',
  data: function(){
    return {users:[],user:{name:"",age:"",isShow:false}}
  },
  mounted: function(){
    this.findAll();
  },
  methods: {
    insert: function () {
      this.isShow = true;
    },
    findAll: function(){
        axios.get('/api/user/list').then(res=>{
            this.users = res.data;
        }).catch(error=>console.log(error));
    },
    remove: function (user) {
           debugger;
          axios.post('/api/user/delete',user).then(res=>{
             this.findAll();
          }).catch(error=>console.log(error));
    },
    closeMyself () {
        this.isShow = false;
    },
    save:function(){
         debugger;
         axios.post('/api/user/add',this.user).then(res=>{
               this.user = {id:"",name:"",age:""};
               this.closeMyself();
               this.findAll();
         }).catch(error=>console.log(error));
    }
  }
}
</script>

<style scoped>
  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
  }
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-leave-active {
    transform: translateY(-500px);
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>