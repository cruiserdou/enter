Ext.define('app.store.changelist.CorpRetrChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpRetrChangeModel',
    alias: 'store.corpretrchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/equity/corpretrchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});