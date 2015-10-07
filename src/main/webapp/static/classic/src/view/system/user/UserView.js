/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.user.UserView', {
    extend: 'Ext.panel.Panel',
    xtype: 'userview',
    closable: true,
    requires: [
        'app.view.system.user.UserController',
        'app.view.system.user.UserGridView',
        'app.view.system.user.UserQDetailView',
        'app.view.system.user.UserQueryView',
        'app.view.system.user.UserAddView'
    ],

    controller: 'usercontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'user_add_id',
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
        xtype: 'usergridview',
        region: 'center',
        id: 'usergridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'userdetailview',
        region: 'east',
        id: 'userdetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
