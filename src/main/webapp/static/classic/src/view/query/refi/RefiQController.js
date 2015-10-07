/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.query.refi.RefiQController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.refiqcontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('refiqdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);

        Ext.getCmp('corprefieditloggridview_id').getStore().load({
            params: {
                corp_id: record_.get('id')

            }
        });
    },

    refresh: function () {
        Ext.getCmp('refiqgridview_id').getStore().load();
    },
    
    btnSearch: function (_this) {
        if (!Ext.getCmp('refiqqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'refiqqueryview',
                    id: 'refiqqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('refiqqueryview_id'));
        }
    },

    btnLog: function (_this) {
        if (!Ext.getCmp('corprefieditloggridview_id')) {
            _this.up().up().add(
                {
                    xtype: 'corprefieditloggridview',
                    id: 'corprefieditloggridview_id',
                    title: '变更记录',
                    collapsible: true,
                    region: 'south',
                    margin: '1 0 0 0',
                    height: 200
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('corprefieditloggridview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('refiqgridview_id').getSelectionModel();
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
                                Ext.getCmp('refiqgridview_id').getStore().load();
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
