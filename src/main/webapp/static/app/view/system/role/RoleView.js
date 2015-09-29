/**
 * This view is an example list of people.
 */
Ext.define('app.view.system.role.RoleView', {
    extend: 'Ext.panel.Panel',
    xtype: 'roleview',
    closable: true,
    requires: [
        'app.view.system.role.RoleController',
        'app.view.system.role.RoleGridView',
        'app.view.system.role.RoleDetailView',
        'app.view.system.role.RoleAddView',
        'app.view.system.role.RoleQueryView'
    ],

    controller: 'rolecontroller',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [
                {
                    text: '添加',
                    id: 'role_add_id',
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
        xtype: 'rolegridview',
        region: 'center',
        id: 'rolegridview_id',
        margin : '1 1 0 0',
        listeners: {
            afterrender: function (_this) {
                var store = _this.getStore();
                store.load();
            }
        }
    },{
        xtype: 'roledetailview',
        region: 'east',
        id: 'roledetailview_id',
        margin: '0 0 0 1',
        width:  360
    }]
});
