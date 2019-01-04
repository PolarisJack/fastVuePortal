/**
 * Created by Jack on 2018/3/28.
 * #table模块接口
 */


import axios from 'js/http/demo/axios';

export default {
    tableList(param) { //table列表
        return axios.get('/demo/table/list', { params: param })
    },
}