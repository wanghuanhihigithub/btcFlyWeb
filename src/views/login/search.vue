<<template>
    <div style="padding:20px;" id="app">
        <el-input v-model="createdTimeStart" placeholder="起始时间"></el-input>
        <el-input v-model="createdTimeEnd" placeholder="结束时间"></el-input>
        <el-button type="primary" icon="el-icon-search" v-on:click=search>查询</el-button>
        <el-table :data="coins"  style="width: 100%;margin-top:20px">
          <el-table-column  prop="fromType"  label="fromType"  width="120"/>
          <el-table-column  prop="toType"  label="toType"  width="90"/>
          <el-table-column  prop="fromMinSalePrice"  label="fromMinSalePrice"  width="120"/>
          <el-table-column  prop="fromMaxBuyPrice"  label="fromMaxBuyPrice"  width="120"/>
          <el-table-column  prop="toMinSalePrice"  label="toMinSalePrice"  width="120"/>
          <el-table-column  prop="toMaxBuyPrice"  label="toMaxBuyPrice"  width="120"/>
          <el-table-column  prop="lastVs"  label="lastVs"  width="120"/>
          <el-table-column  prop="fromToProfit"  label="fromToProfit"  width="180"/>
          <el-table-column  prop="toFromProfit"  label="toFromProfit"  width="180"/>
          <el-table-column  prop="createdTime"  label="createdTime"  width="180"/>
         </el-table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data: function(){
    return {coins:[]}
  },
  methods: {
    search: function(){

    }
    }
  }
}
</script>

<style scoped>

</style>