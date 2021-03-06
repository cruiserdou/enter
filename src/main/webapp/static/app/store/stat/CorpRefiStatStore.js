Ext.define('app.store.stat.CorpRefiStatStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.stat.CorpRefiStatStore',
    alias: 'store.corprefistatstore',
    proxy: {
        type: 'ajax',
        api: {
            read: '/enter/statrefilist'
        },
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});
