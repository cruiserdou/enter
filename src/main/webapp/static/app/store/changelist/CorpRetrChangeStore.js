Ext.define('app.store.changelist.CorpRetrChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpRetrChangeModel',
    alias: 'store.corpretrchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/enter/corpretrchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
