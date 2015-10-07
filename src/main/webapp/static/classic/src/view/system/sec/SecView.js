/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.sec.SecView', {
    extend: 'Ext.panel.Panel',
    xtype: 'secview',
    closable: true,
    requires: [
        'app.view.system.sec.SecController',
        'app.view.system.sec.SecGridView',
        'app.view.system.sec.SecDetailView',
        'app.view.system.sec.SecAddView',
        'app.view.system.sec.SecQueryView'
    ],

    controller: 'seccontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'sec_add_id',
                    iconCls: 'fa fa-plus-square-o',
                    handler: 'btnAdd'
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
        xtype: 'secgridview',
        region: 'center',
        id: 'secgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'secdetailview',
        region: 'east',
        id: 'secdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});