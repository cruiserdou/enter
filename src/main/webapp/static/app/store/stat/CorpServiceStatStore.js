Ext.define('app.store.stat.CorpServiceStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpServiceStatModel',
    alias: 'store.corpservicestatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/equity/statserverlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});