Ext.define('app.store.changelist.CorpServerChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpServiceChangeModel',
    alias: 'store.corpserverchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/equity/corpserverchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});