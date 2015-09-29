/**
 * Created by dou on 15-9-21.
 */

/**
 * 显示在顶部的按钮菜单，可以切换至标准菜单，菜单树
 */
Ext.define('app.view.main.region.ButtonMainMenu', {
    extend : 'app.ux.ButtonTransparent',
    alias : 'widget.buttonmainmenu',
    viewModel : 'tree-list',

    text : '菜单',
    iconCls: 'fa fa-bars',

    initComponent : function() {

        this.menu = this.getViewModel().getMenus();

        this.callParent();
    }

})
