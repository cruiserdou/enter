/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'app.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: '姓名',  dataIndex: 'name', width: 100 },
        { text: '邮箱', dataIndex: 'email', width: 230 },
        { text: '电话', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
