Ext.define('app.store.corpall.CorpRetrAllStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corpretrallstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/enter/corpretrlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
