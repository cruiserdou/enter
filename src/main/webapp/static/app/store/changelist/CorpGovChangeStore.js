Ext.define('app.store.changelist.CorpGovChangeStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.changelist.CorpGovChangeModel',
    alias: 'store.corpgovchangestore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/enter/corpgovchangelist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
