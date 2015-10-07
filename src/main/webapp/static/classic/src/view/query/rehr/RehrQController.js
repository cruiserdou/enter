/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.query.rehr.RehrQController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rehrqcontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('rehrqdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);

        Ext.getCmp('corprehreditloggridview_id').getStore().load({
            params: {
                corp_id: record_.get('id')

            }
        });
    },

    refresh: function () {
        Ext.getCmp('rehrqgridview_id').getStore().load();
    },

    btnFind: function(){
        Ext.getCmp('rehrqgridview_id').getStore().load({
            params: {
                name: Ext.getCmp('query_rehr_q_name_id').getValue(),
                nos: Ext.getCmp('query_rehr_q_nos_id').getValue(),
                buslicno: Ext.getCmp('query_rehr_q_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_rehr_q_listcode_id').getValue()

            }
        });
    },

    btnReset: function(_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('rehrqgridview_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('rehrqqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'rehrqqueryview',
                    id: 'rehrqqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('rehrqqueryview_id'));
        }
    },

    btnLog: function (_this) {
        if (!Ext.getCmp('corprehreditloggridview_id')) {
            _this.up().up().add(
                {
                    xtype: 'corprehreditloggridview',
                    id: 'corprehreditloggridview_id',
                    title: '变更记录',
                    collapsible: true,
                    region: 'south',
                    margin: '1 0 0 0',
                    height: 200
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('corprehreditloggridview_id'));
        }
    },

    delete: function () {
        Ext.Msg.confirm('信息', '确定要删除所选信息吗？', function (btn) {
            if (btn == 'yes') {
                var sm = Ext.getCmp('rehrqgridview_id').getSelectionModel();
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
                                Ext.getCmp('rehrqgridview_id').getStore().load();
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