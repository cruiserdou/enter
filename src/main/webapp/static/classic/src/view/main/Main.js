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

        //'app.view.workmgr.Export',
        'app.view.workmgr.FinService',

        'app.view.workmgr.InnerInfo',
        'app.view.workmgr.msg.MsgView',
        'app.view.workmgr.maintaininfo.MaintaininfoView',
        'app.view.workmgr.maintainplan.MaintainplanView',
        'app.view.workmgr.refimosf.RefimosfView',
        //'app.view.workmgr.export.ExportView',

        //'app.view.system.MenuMt',
        //'app.view.system.RoleMt',
        //'app.view.system.ActMt',
        //'app.view.system.SecMt',
        //'app.view.system.SysDict',
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

    //header: {
    //    items: [{
    //        xtype: 'button',
    //        text: '设置',
    //        menu: [{
    //            text: 'Expander Only',
    //            checked: true,
    //            handler: 'onToggleConfig',
    //            config: 'expanderOnly'
    //        }, {
    //            text: 'Single Expand',
    //            checked: false,
    //            handler: 'onToggleConfig',
    //            config: 'singleExpand'
    //        }]
    //    }, {
    //        xtype: 'button',
    //        text: 'Nav',
    //        enableToggle: true,
    //        reference: 'navBtn',
    //        toggleHandler: 'onToggleNav'
    //    }, {
    //        xtype: 'button',
    //        text: 'Micro',
    //        enableToggle: true,
    //        toggleHandler: 'onToggleMicro'
    //    }]
    //},

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
                title: '企业信息查询'
            }]
        }]
    }]
});
