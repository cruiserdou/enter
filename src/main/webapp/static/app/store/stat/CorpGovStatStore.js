Ext.define('app.store.stat.CorpGovStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpGovStatModel',
    alias: 'store.corpgovstatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/enter/statgovlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});