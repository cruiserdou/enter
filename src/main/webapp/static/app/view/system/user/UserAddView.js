/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.user.UserAddView', {
    extend: 'Ext.window.Window',
    xtype: 'useraddview',
    iconCls: 'fa fa-plus-square-o',
    width: 400,
    title: '添加用户',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [{
            xtype: 'textfield',
            name: 'id',
            fieldLabel: '用户ID',
            hidden: 'true'
        }, {
            xtype: 'textfield',
            name: 'account',
            fieldLabel: '帐号',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: '密码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '姓名',
            allowBlank: false
        }, {
            xtype: 'radiofield',
            name: 'sex',
            value: '男',
            fieldLabel: '性别',
            boxLabel: '男'
        }, {
            xtype: 'radiofield',
            name: 'sex',
            value: '女',
            fieldLabel: '',
            labelSeparator: '',
            hideEmptyLabel: false,
            boxLabel: '女'
        },{
            xtype: 'textfield',
            name: 'phone',
            fieldLabel: '手机号',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'address',
            fieldLabel: '联系地址',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'remark',
            fieldLabel: '备注'
        }, {
            xtype: 'filefield',
            name: 'img',
            fieldLabel: '上传头像',
            buttonText: '选择'
        }],
        buttonAlign: "center",
        buttons: [
            {
                text: '重置',
                iconCls: 'fa fa-refresh',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            },
            {
                text: '保存',
                iconCls: 'fa fa-save',
                handler: function () {
                    if (Ext.getCmp('rem_id').getValue() == true) {
                        if (window.localStorage) {
                            localStorage.account = Ext.getCmp('account_id').getValue();
                        }
                    }

                    if (Ext.getCmp('account_id').getValue() != 'admin') {
                        Ext.Msg.alert('失败', '用户名或密码错误!');
                        return;
                    }
                    if (Ext.getCmp('password_id').getValue() != '1') {
                        Ext.Msg.alert('失败', '用户名或密码错误!')
                        return;
                    }

                    Ext.getCmp('enter_grid_id').getStore().load();
                    loginWindow.close();

                    //var form = this.up('form').getForm();
                    //if (form.isValid()) {
                    //    form.submit({
                    //        headers: {
                    //            Authorization: 'Basic bWFyaXNzYTprb2FsYQ=='
                    //        },
                    //        success: function () {
                    //            console.log("ok");
                    //            Ext.getCmp('enter_grid_id').getStore().load();
                    //            loginWindow.close();
                    //        },
                    //        failure: function () {
                    //            console.log("no");
                    //        }
                    //    })
                    //}
                }
            }
        ]
    }
});
