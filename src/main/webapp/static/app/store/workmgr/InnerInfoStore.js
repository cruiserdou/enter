/**
 * Created by xwq on 15-9-2.
 */
Ext.define('app.store.workmgr.InnerInfoStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.workmgr.InnerInfoModel',
    alias: 'store.innerinfostore',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        api: {
            read: '/equity/innerinfolist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
