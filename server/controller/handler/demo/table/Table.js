/*
 * @Author: jack.lu 
 * @Date: 2018-12-30 01:07:26 
 * @Last Modified by: jack.lu
 * @Last Modified time: 2018-12-30 01:11:56
 */


import apis from '../../../apis/demo';
import PackRequest from '../../../lib/PackRequest';


class Table {
    constructor() {
        //super()
    }
    async tableList(ctx) { //table列表
        let ls = [];
        for (let i = 0; i < 10; i++) {
            ls.push({
                code: i + 1,
                code1: '字段1',
                code2: '字段2',
                code3: '字段3',
                code4: '字段4',
                code5: '字段5',
                code6: '字段6',
                code7: '字段7'
            })
        }
        ctx.body = {
            returnSuccess: true,
            returnErrMsg: '',
            returnErrCode: '',
            list: ls
        }
    }
}

export { Table }