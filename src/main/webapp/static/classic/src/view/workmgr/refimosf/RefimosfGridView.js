/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.refimosf.RefimosfGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'refimosfgridview',
    columnLines: true,
    requires: [
        'app.view.workmgr.refimosf.RefimosfController',
        'app.store.workmgr.refimosf.RefimosStore',
        'Ext.grid.filters.Filters'
    ],

    controller: 'refimosfcontroller',
    store: {
        type: 'refimosstore'
    },
    listeners: {
        itemclick: 'itemclick'
    },

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    columns: [
        {text: '融资服务ID',  width: 220, dataIndex: 'mos_id',hidden:true},
        {text: '企业ID',  width: 220, dataIndex: 'mos_corp_id',hidden:true},
        {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
        {text: '融资产品',  width: 200, dataIndex: 'mos_cots'},
        {text: '融资金额', width: 150, dataIndex: 'mos_amounts'},
        {text: '项目经理', width: 150, dataIndex: 'mos_mop'},
        {
            text: '进度',width: 150, dataIndex: 'mos_id',
            renderer: function (v, m, record) {



                return "<span style='color: #FF4444;' onclick='add_refi_rop(\"" + v + "\")' >添加</span>"

            }
        },
        {text: '融资进度', width: 150 , dataIndex: 'mos_rop'}
    ]
});

function add_refi_rop(id) {


    Ext.create('widget.window', {
        title: '添加进度',
        modal: true,
        id:'add_refi_rop_windows',
        width: 370,
        height: 500,
        border: false,
        layout: 'fit',
        defaults: {
            width: 200,
            allowBlank: false
        },
        items: [
            {
                xtype: 'form',
                frame: true,
                bodyPadding: 10,
                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth: 70
                },
                defaults: {
                    labelAlign: 'left',
                    xtype: 'textfield'
                },
                items: [

                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '事项',
                        name: 'rop_items'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '具体内容',
                        name: 'rop_desc'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '完成时间',
                        name: 'rop_endt',
                        xtype: 'datefield',
                        value: new Date(),
                        format: 'Y-m-d H:i:s'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '需解决问题',
                        name: 'rop_crb'
                    },
                    {
                        xtype: 'container',
                        anchor: '100%',
                        layout: 'column',
                        items: [

                            {
                                xtype: "panel",
                                layout: "column",
                                fieldLabel: '是否完成',
                                xtype: 'radiogroup', anchor: '220%', columns: 20, items: [
                                {boxLabel: "是", name: 'rop_stat', inputValue: '是',checked: true},
                                {boxLabel: "否", name: 'rop_stat', inputValue: '否'}
                            ]
                            }
                        ]
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '备注',
                        name: 'rop_remark'
                    }
                ],
                buttonAlign: "center",
                buttons: [
                    {
                        text: '保存',
                        iconCls: 'icon_save',
                        handler: function () {

                            var form = this.up('form').getForm();
                            if (form.isValid()) {
                                form.submit({
                                    url: 'add_refi_rop_info',
                                    method: 'POST',
                                    params: {
                                        rop_mos_id: id
                                    },
                                    waitMsg: '正在保存...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "保存成功!");
                                        Ext.getCmp('add_refi_rop_windows').close();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "保存失败!");
                                    }
                                });
                            }

                        }
                    },
                    {
                        text: '重置',
                        handler: function () {
                            this.up('form').getForm().reset();
                        }
                    }
                ]
            }
        ]
    }).show(Ext.get(id));
};