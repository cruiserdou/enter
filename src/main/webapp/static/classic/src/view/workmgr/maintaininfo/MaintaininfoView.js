/**
 * This view is an example list of people.
 */
Ext.define('app.view.workmgr.maintaininfo.MaintaininfoView', {
    extend: 'Ext.panel.Panel',
    xtype: 'maintaininfoview',
    closable: true,
    requires: [
        'app.view.workmgr.maintaininfo.MaintaininfoController',
        'app.view.workmgr.maintaininfo.MaintaininfoGridView',
        'app.view.workmgr.maintaininfo.MaintaininfoDetailView',
        'app.view.workmgr.maintaininfo.MaintaininfoAddView',
        'app.view.workmgr.maintaininfo.MaintaininfoQueryView'
    ],

    controller: 'maintaininfocontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'maintaininfo_add_id',
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
        xtype: 'maintaininfogridview',
        region: 'center',
        id: 'maintaininfogridview_id',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'maintaininfodetailview',
        region: 'east',
        id: 'maintaininfodetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
