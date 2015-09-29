Ext.define('app.store.corpall.CorpInvAllStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.corpinvallstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/equity/corpinvlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});