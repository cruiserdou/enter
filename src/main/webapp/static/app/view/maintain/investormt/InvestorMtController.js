/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.maintain.investormt.InvestorMtController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.investormtcontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('investormtdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);
    },

    refresh: function () {
        Ext.getCmp('investormtgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('investormtgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_inv_mt_name_id').getValue(),
                nos: Ext.getCmp('query_inv_mt_nos_id').getValue(),
                buslicno: Ext.getCmp('query_inv_mt_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_inv_mt_listcode_id').getValue()

            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('investormtgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('investormtqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'investormtqueryview',
                    id: 'investormtqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('investormtqueryview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('investormtgridview_id').getSelectionModel();
                var rows = sm.getSelection();

                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var id = row.get('id');
                        Ext.Ajax.request({
                            url: '/cloudl/dpos/delete',
                            params: {
                                "id": id
                            },
                            waitMsg: '正在删除数据...',
                            success: function () {
                                Ext.getCmp('investormtgridview_id').getStore().load();
                                Ext.Msg.alert("成功", "数据删除成功!");
                            },
                            failure: function () {
                                Ext.Msg.alert("失败", "数据删除失败!");
                            }
                        });
                    }
                } else {
                    Ext.Msg.alert('提示', '请选择要删除的记录');
                }
            }
        });
    }
});
