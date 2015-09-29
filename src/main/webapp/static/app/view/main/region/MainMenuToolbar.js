/**
 * Created by dou on 15-9-21.
 */
/**
 * 系统的主菜单条，根据MainModel中的数据来生成，可以切换至按钮菜单，菜单树
 */
Ext.define('app.view.main.region.MainMenuToolbar', {
    extend : 'Ext.toolbar.Toolbar',
    alias : 'widget.mainmenutoolbar',

    defaults : {
        xtype : 'buttontransparent'
    },

    items : [{
        iconCls: 'fa fa-angle-double-left',
        tooltip : '在左边栏中显示树状菜单', // 几种菜单样式切换的按钮
        disableMouseOver : true,
        margin : '0 -5 0 0'
    }, {
        iconCls: 'fa fa-angle-double-up',
        tooltip : '在顶部区域显示菜单',// 几种菜单样式切换的按钮
        disableMouseOver : true
    }],
    viewModel : 'tree-list',

    initComponent : function() {

        // 把ViewModel中生成的菜单items加到此toolbar的items中
        this.items = this.items.concat(this.getViewModel().getMenus());

        this.callParent();
    }
});