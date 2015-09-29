Ext.define('app.store.changelist.CorpRefiChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpRefiChangeModel',
    alias: 'store.corprefichangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/enter/corprefichangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});