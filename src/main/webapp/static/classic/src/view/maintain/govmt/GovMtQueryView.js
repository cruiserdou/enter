/**
 * This view is an example list of people.
 */
Ext.define('app.view.maintain.govmt.GovMtQueryView', {
    extend: 'Ext.form.Panel',
    xtype: 'govmtqueryview',

    layout: {
        type: 'table',
        columns: 3,
        tableAttrs: {
            style: {
                width: '100%'
            }
        },
        tdAttrs: {
            valign: 'top'
        }
    },

    bodyPadding: 10,
    defaults: {
        bodyPadding: '15 20',
        border: true
    },


    items: [
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '公司名称',
            id: 'query_gov_mt_name_id',
            name: 'name'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '公司简称',
            id: 'query_gov_mt_nos_id',
            name: 'nos'
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-search',
            text: '查找',
            handler: 'btnFind'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '营业执照号码',
            id: 'query_gov_mt_buslicno_id',
            name: 'buslicno'
        },
        {
            xtype: 'textfield',
            anchor: '-5',
            fieldLabel: '挂牌代码',
            id: 'query_gov_mt_listcode_id',
            name: 'listcode'
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-refresh',
            text: '重置',
            handler: 'btnReset'
        }
    ]
});