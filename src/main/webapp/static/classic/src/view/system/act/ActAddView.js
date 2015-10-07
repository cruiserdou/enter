/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.act.ActAddView', {
    extend: 'Ext.window.Window',
    xtype: 'actaddview',
    iconCls: 'fa fa-plus-square-o',
    width: 320,
    title: '添加信息',
    constrain: true,
    closable: true,
    modal: true,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        bodyPadding: 10,
        layout: 'form',

        items: [{
            xtype: 'combobox',
            name: 'roleid',
            fieldLabel: '角色'
        }, {
            xtype: 'combobox',
            name: 'treeid',
            fieldLabel: '菜单'
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
