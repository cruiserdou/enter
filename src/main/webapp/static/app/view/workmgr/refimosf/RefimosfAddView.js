/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.refimosf.RefimosfAddView', {
    extend: 'Ext.window.Window',
    xtype: 'refimosfaddview',
    iconCls: 'fa fa-plus-square-o',
    width: 400,
    title: '添加融资服务信息',
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
            name: 'mp_corp_id',
            id: 'corp_id',
            hidden: true
        },{
            xtype: 'textfield',
            name: 'corp_name',
            id: 'corp_name_id',
            fieldLabel: '企业名称'
        }, {
            xtype: 'textfield',
            name: 'mp_listcode',
            fieldLabel: '挂牌代码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'mp_province',
            fieldLabel: '融资产品',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'mp_city',
            fieldLabel: '融资金额',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'mp_county',
            fieldLabel: '项目经理',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'remark',
            fieldLabel: '融资进度'
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
