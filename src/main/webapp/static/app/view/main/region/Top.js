/**
 * Created by dou on 15-9-21.
 */
/**
 * 系统主页的顶部区域，主要放置系统名称，菜单，和一些快捷按钮
 */
Ext.define('app.view.main.region.Top', {

    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.maintop', // 定义了这个组件的xtype类型为maintop

    requires: [
        'app.ux.ButtonTransparent',
        'app.view.main.region.ButtonMainMenu'
    ],

    defaults: {
        xtype: 'buttontransparent'
    },

    items: [{
        xtype: 'image',
        bind: { // 数据绑定到MainModel中data的system.iconUrl
            hidden: '{!system.iconUrl}', // 如果system.iconUrl未设置，则此image不显示
            src: '{system.iconUrl}' // 根据system.iconUrl的设置来加载图片
        }
    }, {
        xtype: 'label',
        bind: {
            text: '{system.name}' // text值绑定到system.name
        },
        style: 'font-size : 20px; color : blue;'
    }, {
        xtype: 'label',
        bind: {
            text: '{system.version}'
        }
    }, '->', {
        xtype : 'buttonmainmenu'
        //iconCls: 'fa fa-bars',
        //text: '菜单',
        //menu: [{
        //    text: '工程管理',
        //    menu: [{
        //        text: '工程项目'
        //    }, {
        //        text: '工程标段'
        //    }]
        //}]
    }, ' ', ' ', {
        text: '主页',
        iconCls: 'fa fa-home'
    }, {
        iconCls: 'fa fa-question-circle',
        text: '帮助'
    }, {
        iconCls: 'fa fa-life-ring',
        text: '关于'
    }, {
        iconCls: 'fa fa-close',
        text: '注销'
    }, '->', '->', {
        iconCls: 'fa fa-gear',
        text: '设置'
    }, {
        iconCls: 'fa fa-angle-double-up',
        handler: 'hiddenTopBottom',
        tooltip: '隐藏顶部和底部区域'
    }]

});
