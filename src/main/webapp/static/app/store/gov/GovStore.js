/**
 * Created by xwq on 15-9-03.
 */
Ext.define('app.store.gov.GovStore', {
    extend: 'Ext.data.Store',
    model: 'app.model.corpall.CorpAll',
    alias: 'store.govstore',
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