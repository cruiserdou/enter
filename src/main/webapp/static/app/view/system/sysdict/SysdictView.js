/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sysdict.SysdictView', {
    extend: 'Ext.panel.Panel',
    xtype: 'sysdictview',
    closable: true,
    requires: [
        'app.view.system.sysdict.SysdictController',
        'app.view.system.sysdict.SysdictGridView',
        'app.view.system.sysdict.SysdictDetailView',
        'app.view.system.sysdict.SysdictQueryView'
    ],

    controller: 'sysdictcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    iconCls: 'fa fa-plus-square-o',
                    handler: 'btnAdd'
                },
                {
                    text: '编辑',
                    iconCls: 'fa fa-edit',
                    handler: 'btnEdit'
                },
                {
                    text: '删除',
                    iconCls: 'fa fa-trash',
                    handler: 'btnDelete'
                },
                {
                    text: '刷新',
                    iconCls: 'fa fa-refresh',
                    handler: 'btnRefresh'  },
                {
                    text: '查询',
                    iconCls: 'fa fa-search',
                    handler: 'btnSearch'
                }
            ]
        }
    ],
    layout: 'border',
    items: [{
        xtype: 'sysdictgridview',
        region: 'center',
        id: 'sysdictgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'sysdictdetailview',
        region: 'east',
        id: 'sysdictdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
