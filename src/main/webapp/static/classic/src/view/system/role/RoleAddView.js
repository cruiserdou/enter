/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.role.RoleAddView', {
    extend: 'Ext.window.Window',
    xtype: 'roleaddview',
    width: 360,
    title: '添加角色',
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
            fieldLabel: '角色ID',
            hidden: true
        }, {
            xtype: 'textfield',
            name: 'rolename',
            fieldLabel: '角色名称'
        }, {
            xtype: 'textareafield',
            name: 'roledesc',
            fieldLabel: '角色描述'
        }, {
            xtype: 'textareafield',
            name: 'remark',
            fieldLabel: '备注'
        }],
        buttonAlign: "center",
        buttons: [
            {
                text: '重置',
                handler: function () {
                    this.up('form').getForm().reset();
                }
            },
            {
                text: '保存',
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
