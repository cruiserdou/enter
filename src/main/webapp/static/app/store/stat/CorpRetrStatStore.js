Ext.define('app.store.stat.CorpRetrStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpRetrStatStore',
    alias: 'store.corpretrstatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/equity/statretrlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});