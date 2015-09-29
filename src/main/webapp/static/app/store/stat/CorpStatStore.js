Ext.define('app.store.stat.CorpStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpStatStore',
    alias: 'store.corpstatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/equity/statlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});