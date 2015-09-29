/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.rehr.RehrView', {
    extend: 'Ext.panel.Panel',
    xtype: 'rehrview',
    closable: true,
    requires: [
        'app.view.maintain.rehr.RehrController',
        'app.view.maintain.rehr.RehrGridView',
        'app.view.maintain.rehr.RehrDetailView',
        'app.view.maintain.rehr.RehrQueryView'
    ],

    controller: 'rehrcontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '删除',
                    iconCls: 'fa fa-trash',
                    handler: 'delete'
                },
                {
                    text: '刷新',
                    iconCls: 'fa fa-refresh',
                    handler: 'refresh' },
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
        xtype: 'rehrgridview',
        region: 'center',
        id: 'rehrgridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'rehrdetailview',
        region: 'east',
        id: 'rehrdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
