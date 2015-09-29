Ext.define('app.store.service.ServiceStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.servicestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/equity/corplist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});