/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintainplan.MaintainplanView', {
    extend: 'Ext.panel.Panel',
    xtype: 'maintainplanview',
    closable: true,
    requires: [
        'app.view.workmgr.maintainplan.MaintainplanController',
        'app.view.workmgr.maintainplan.MaintainplanGridView',
        'app.view.workmgr.maintainplan.MaintainplanDetailView',
        'app.view.workmgr.maintainplan.MaintainplanAddView',
        'app.view.workmgr.maintainplan.MaintainplanQueryView'
    ],

    controller: 'maintainplancontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'maintainplan_add_id',
                    iconCls: 'fa fa-plus-square-o',
                    handler: 'btnAdd'
                },
                {
                    text: '删除',
                    iconCls: 'fa fa-trash',
                    handler: 'delete'
                },
                {
                    text: '刷新',
                    iconCls: 'fa fa-refresh',
                    handler: 'refresh'  },
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
        xtype: 'maintainplangridview',
        region: 'center',
        id: 'maintainplangridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'maintainplandetailview',
        region: 'east',
        id: 'maintainplandetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
