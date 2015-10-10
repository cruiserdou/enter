/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintaininfo.MaintaininfoAddView', {
    extend: 'Ext.window.Window',
    xtype: 'maintaininfoaddview',
    width: 400,
    title: '添加维护信息',
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
            name: 'mi_listcode',
            fieldLabel: '挂牌代码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'mi_province',
            fieldLabel: '省',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'mi_city',
            fieldLabel: '市',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'mi_county',
            fieldLabel: '县',
            allowBlank: false
        },{
            xtype: 'datefield',
            name: 'mi_mt_date',
            fieldLabel: '维护时间',
            value: new Date(),
            format: 'Y-m-d H:i:s',
            allowBlank: false
        },{
            xtype: 'combo',
            name: 'mi_cust_type',
            fieldLabel: '企业客户分级（A/B）',
            autoRender: true,
            autoShow: true,
            store: Ext.create('Ext.data.Store', {
                fields: ['type'],
                data: [{'type':'A'}, {'type': 'B'}]
            }),
            displayField: 'type',
            valueField: 'type'
        },{
            xtype: 'datefield',
            name: 'mi_next_date',
            fieldLabel: '下次维护时间',
            value: new Date(),
            format: 'Y-m-d',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'mi_next_plan',
            fieldLabel: '下次维护计划',
            allowBlank: false
        },{
            xtype: 'textareafield',
            name: 'mi_remark',
            fieldLabel: '维护结果'
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
                            url: '/enter/add_maintain_info',
                            waitMsg: '正在保存数据...',
                            success: function(form, action){
                                Ext.Msg.alert("成功", "数据保存成功!");
                                //重新载入渠道信息
                                Ext.getCmp('maintaininfogridview_id').getStore().reload();
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
