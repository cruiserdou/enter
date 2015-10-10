/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintainplan.MaintainplanAddView', {
    extend: 'Ext.window.Window',
    xtype: 'maintainplanaddview',
    width: 400,
    title: '添加维护计划',
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
            fieldLabel: '省',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'mp_city',
            fieldLabel: '市',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'mp_county',
            fieldLabel: '县',
            allowBlank: false
        },{
            xtype: 'datefield',
            name: 'mp_last_date',
            fieldLabel: '最后一次维护时间',
            value: new Date(),
            format: 'Y-m-d H:i:s',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'mp_content',
            fieldLabel: '维护内容',
            allowBlank: false
        },{
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
                    var form = this.up('form').getForm();
                    if (form.isValid()){
                        form.submit({
                            url: '/enter/add_maintain_plan_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('maintainplangridview_id').getStore().reload();
                            },
                            failure: function(form, action){
                                Ext.Msg.alert("失败", "数据保存失败!");
                            }
                        });
                    }
                }
            }
        ]
    }
});
