Ext.define('app.store.stat.CorpRehrStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpRehrStatStore',
    alias: 'store.corprehrstatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/enter/statrehrlist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
