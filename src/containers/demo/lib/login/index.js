/**
 * Created by Jack on 2018/3/28.
 * #login模块数据
 */

export default (vm) => {
    const validateUsername = (rule, value, callback) => {
        if (!value) {
            callback(new Error('请输入正确的用户名'));
        } else {
            callback();
        }
    }
    const validatePassword = (rule, value, callback) => {
        if (!value) {
            callback(new Error('请输入正确的密码'));
        } else {
            callback();
        }
    };
    return {
        fields: [{
                prop: 'userName',
                type: 'input',
                label: '用户名',
                placeholder: '请输入用户名',
                keyupEnter: () => {
                    vm.$refs.loginForm.onSubmit()
                }
            },
            {
                prop: 'password',
                type: 'input',
                label: '密码',
                placeholder: '请输入密码',
                inputAttrs: {
                    type: 'password'
                },
                keyupEnter: () => {
                    vm.$refs.loginForm.onSubmit()
                }
            }
        ],
        formFields: {
            userName: '',
            password: ''
        },
        formRules: {
            userName: [{
                validator: validateUsername,
                trigger: 'blur'
            }],
            password: [{
                validator: validatePassword,
                trigger: 'blur'
            }]
        },

    }
}