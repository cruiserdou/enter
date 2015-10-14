/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'app.view.main.TreeListModel',
        'app.view.main.TreeListController',

        'app.view.enter.EnterInfoView',
        'app.view.query.serviceq.ServiceQView',
        'app.view.query.investorq.InvestorQView',
        'app.view.query.govq.GovQView',

        'app.view.query.refi.RefiQView',
        'app.view.query.rehr.RehrQView',
        'app.view.query.retr.RetrQView',


        'app.view.maintain.entermt.EnterMtView',
        'app.view.maintain.govmt.GovMtView',
        'app.view.maintain.investormt.InvestorMtView',
        'app.view.maintain.servicemt.ServiceMtView',


        'app.view.maintain.refi.RefiView',
        'app.view.maintain.rehr.RehrView',
        'app.view.maintain.retr.RetrView',

        'app.view.statis.EnterStatis',
        'app.view.statis.ServiceStatis',
        'app.view.statis.InvestorStatis',
        'app.view.statis.GovStatis',
        'app.view.statis.demand.FsDmStatis',
        'app.view.statis.demand.TrainDmStatis',
        'app.view.statis.demand.HrDmStatis',

        'app.view.workmgr.FinService',

        'app.view.workmgr.InnerInfo',
        'app.view.workmgr.msg.MsgView',
        'app.view.workmgr.maintaininfo.MaintaininfoView',
        'app.view.workmgr.maintainplan.MaintainplanView',
        'app.view.workmgr.refimosf.RefimosfView',
        'app.view.workmgr.exportimport.ExportImportView',

        'app.view.system.log.LoginLog',
        'app.view.system.role.RoleView',
        'app.view.system.menu.MenuView',
        'app.view.system.sysdict.SysdictView',
        'app.view.system.act.ActView',
        'app.view.system.sec.SecView'
    ],

    ui: 'navigation',

    layout: 'fit',
    title: '甘肃中小企业信息管理系统',
    controller: 'tree-list',

    //iconCls: 'fa fa-desktop',
    layout: 'border',
    viewModel: {
        type: 'tree-list'
    },

    items: [
        {
            region: 'west',
            width: 250,
            reference: 'treelistContainer',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            scrollable: 'y',
            items: [{
                xtype: 'treelist',
                reference: 'treelist',
                bind: '{navItems}'
            }]
        }, {
            region: 'center',
            bodyStyle: 'background-image: url(resources/panel_back.png)',
            bodyPadding: 8,
            layout: 'fit',
            items: [{
                xtype: 'tabpanel',
                id: 'mTabpanel',
                items: [{
                    xtype: 'enterinfoview',
                    id: 'enterinfoview_id',
                    title: '企业信息查询',
                    listeners: {
                        afterrender: function () {
                            var loginWindow = Ext.create('Ext.window.Window', {
                                height: 230,
                                width: 320,
                                id: 'loginwindow',
                                title: '登录窗口',
                                constrain: true,
                                closable: false,
                                modal: true,
                                layout: 'fit',
                                items: {  // Let's put an empty grid in just to illustrate fit layout
                                    xtype: 'form',
                                    defaultType: 'textfield',
                                    bodyPadding: 20,
                                    defaults: {
                                        labelWidth: 80,
                                        anchor: '100%'
                                    },
                                    items: [{
                                        allowBlank: false,
                                        fieldLabel: '用户名',
                                        id: 'account_id',
                                        name: 'account',
                                        value: localStorage.getItem('account'),
                                        emptyText: '用户名'
                                    }, {
                                        allowBlank: false,
                                        fieldLabel: '密码',
                                        id: 'password_id',
                                        name: 'password',
                                        emptyText: 'password',
                                        inputType: 'password'
                                    }, {
                                        xtype: 'checkbox',
                                        id: 'rem_id',
                                        checked: true,
                                        name: 'rem',
                                        fieldLabel: '记住我'
                                    }],
                                    buttons: [
                                        {
                                            text: '重置',
                                            handler: function () {
                                                this.up('form').getForm().reset();
                                            }
                                        },
                                        {
                                            text: '登 录',
                                            handler: function () {
                                                if (Ext.getCmp('rem_id').getValue() == true) {
                                                    if (window.localStorage) {
                                                        localStorage.account = Ext.getCmp('account_id').getValue();
                                                    }
                                                }

                                                if (Ext.getCmp('account_id').getValue() != 'admin') {
                                                    Ext.Msg.alert('失败', '用户名或密码错误!');
                                                    return;
                                                }
                                                if (Ext.getCmp('password_id').getValue() != '1') {
                                                    Ext.Msg.alert('失败', '用户名或密码错误!')
                                                    return;
                                                }

                                                Ext.getCmp('enter_grid_id').getStore().load();
                                                loginWindow.close();
                                            }
                                        }
                                    ]
                                }
                            }).show();
                        }
                    }
                }]
            }]
        }]
});
