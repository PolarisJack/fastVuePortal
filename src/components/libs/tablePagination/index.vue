
<template lang="html">
  <div class="tablePagination" v-loading.lock="loading" element-loading-spinner="el-icon-loading" style="width: 100%" element-loading-background="rgba(255, 255, 255, 0)">
    <el-table
      :empty-text="nodata"
      :height="height"
      :data="tableData.list">
      <template  v-for="(item ,index) in tableHeader">
        <el-table-column
          v-if="item.showIndex"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          v-else-if="!item.slot && !item.temps"
          :key="index"
          :prop="item.prop"
          :width="item.width"
          :label="item.label">
        </el-table-column>
        <el-table-column
          v-else-if="!item.slot && item.temps"
          :prop="item.prop"
          :width="item.width"
          :label="item.label">
          <template slot-scope="scope">
            <span
              v-for="(temp,i) in item.temps"
              :key="i+'tempNormal'"
              @click="temp.click(scope.row)"
              :class="[temp.class,scope.row[temp.keyClass]]"
              :style="temp.style">
              {{temp.label ? temp.label : scope.row[temp.key]}}
            </span>
            <el-switch
              v-for="(temp,i) in item.temps"
              :key="i+'tempSwitch'"
              v-model="scope.row[temp.model]"
              v-if="temp.switch"
              active-color="#13ce66"
              @change="temp.change(scope.row)">
            </el-switch>
          </template>
        </el-table-column>
        <slot :name="item.prop" v-else>1</slot>
      </template>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-if="!pageHidden && !innerHiddenPage"
      :current-page="defaultParam.curPage"
      :page-sizes="[10, 20, 50]"
      :page-size="defaultParam.pageSize"
      :total="totalRows.rows"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    props : {
      init   : {//初始化是否默认查询
        type    : Boolean,
        default : true
      },
      height : {//设定高度
        type : String
      },
      hiddenLoading : {//不开启加载状态
        type : Boolean,
        default : false
      },
      pageHidden : {//隐藏分页
        type    : Boolean,
        default : false
      },
      search : {//状态改变怎查询
        type    : Boolean,
        default : false
      },
      normal : {//通用状态，不用派发执行回调
        type    : Boolean,
        default : true
      },
      defaultParam : {//默认参数
        type : Object,
        default(){
          return {
            pageSize : 10,
            curPage  : 1,
          } //默认参数
        }
      },
      setting : {//接口名称、请求参数
        type : Object,
        default(){
          return {
            axiosName : 'table',//接口名称
            params : {},//参数
          }
        }
      },
      tableHeader : {//表头
        type : Array,
        default () {
          return []
        }
      },
      tableData : {//表格数据
        type : Object,
        default () {
          return {
            list : []
          }
        }
      },
      totalRows : {//总页数
        type : Object,
        default () {
          return {
            rows : 0
          }
        }
      },
      alias : { //字段转换
        type : Object,
        default(){
          return {
            totalRows : 'totalRows',
            curPage   : 'curPage',
            pageSize  : 'pageSize',
            list      : 'list'
          }
        }
      }
    },
    watch : {
      search(){
        //let {curPage=1,pageSize=10} = this.defaultParam;
        //let chosePage = curPage;
        this.defaultParam.curPage =1;
        // 需要判断下 不是第一页 handleCurrentChange 触发
        //if(chosePage == 1)this.sendTableAxios();
        this.sendTableAxios();
      }
    },
    computed : {

    },
    data() {
      return {
        loading : false,
        flag : true, //第一次加载
        nodata : '暂无数据',
        exist : [], //记录 请求 引用
        innerHiddenPage : true//内部隐藏分页
      }
    },
    created(){
      this.init && this.sendTableAxios();
    },
    methods: {
      ...mapActions([
        'handleAxios'
      ]),
      handleSizeChange(v) {//更改每页显示条数
        //let chosePage = this.defaultParam.curPage;//记录当前选中的页码
        //this.defaultParam.curPage = 1;//把当前页码置为第一页
        this.defaultParam.pageSize = v;
        //if(chosePage == 1) this.sendTableAxios();//改变每页条数在curPage ==1的时候不会调用handleCurrentChange
        this.sendTableAxios();
      },
      handleCurrentChange(v) {//换页
        this.defaultParam.curPage = v;
        this.sendTableAxios();
      },
      sendTableAxios(){
        if(!this.hiddenLoading){
          this.loading = true;
        };
        let {
              setting,
              defaultParam,
              alias:{totalRows='totalRows',curPage='curPage',pageSize='pageSize',list='list'}
            } = this;
        this.handleAxios({
          axiosName : setting.axiosName,
          params   : {
            ...defaultParam,
            ...setting.params
          },
          success : (res) => {
            this.loading = false;
            this.totalRows.rows = res[totalRows];
            this.defaultParam.curPage = res[curPage];
            this.defaultParam.pageSize = res[pageSize];
            this.normal && (this.tableData.list = res[list]);
            if(this.totalRows.rows ==0){
              this.innerHiddenPage = true
            }else{
              this.innerHiddenPage = false
            };
            this.$emit('tableSuccess',res);
          },
          error : (res) => {
            this.loading = false;
            this.tableData.list = res[list];
            this.totalRows.rows = 0;
            this.defaultParam.curPage = 1;
            this.defaultParam.pageSize = 10;
            this.innerHiddenPage = true;
            this.$emit('tableError',res);
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>
