/**
 * Created by xwq on 15/9/5.
 */
Ext.define('app.view.enter.EnterInfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.enterinfocontroller',

    itemclick: function (this_, record_) {
        var vPanel = Ext.getCmp('enterdetailview_id');
        vPanel.tpl.overwrite(vPanel.body, record_.data);

        Ext.getCmp('entereditloggridview_id').getStore().load({
            params: {
                corp_id: record_.get('id')
            }
        });
    },


    btnClick: function () {
        Ext.getCmp('enter_grid_id').getStore().load();
    },

    btnSearch: function (_this) {
        if (!Ext.getCmp('enterinfoqueryview_id')) {
            _this.up().up().add(
                {
                    xtype: 'enterinfoqueryview',
                    id: 'enterinfoqueryview_id',
                    region: 'north',
                    margin: '1 0 0 0'
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('enterinfoqueryview_id'));
        }
    },

    btnLog: function (_this) {
        if (!Ext.getCmp('entereditloggridview_id')) {
            _this.up().up().add(
                {
                    xtype: 'entereditloggridview',
                    id: 'entereditloggridview_id',
                    title: '变更记录',
                    collapsible: true,
                    region: 'south',
                    margin: '1 0 0 0',
                    height: 200
                }
            );
        }else{
            _this.up().up().remove(Ext.getCmp('entereditloggridview_id'));
        }
    },

    btnFind: function () {
        Ext.getCmp('enter_grid_id').getStore().load({
            params: {
                name: Ext.getCmp('query_name_id').getValue(),
                nos: Ext.getCmp('query_nos_id').getValue(),
                buslicno: Ext.getCmp('query_buslicno_id').getValue(),
                listcode: Ext.getCmp('query_listcode_id').getValue()

            }
        });
    },

    btnReset: function (_this) {
        _this.up('form').getForm().reset();
        Ext.getCmp('enter_grid_id').getStore().load();
    },

    onToggleConfig: function (menuitem) {
        var treelist = this.lookupReference('treelist');

        treelist.setConfig(menuitem.config, menuitem.checked);
    },

    onToggleMicro: function (button, pressed) {
        var treelist = this.lookupReference('treelist'),
            navBtn = this.lookupReference('navBtn'),
            ct = treelist.ownerCt;

        treelist.setMicro(pressed);

        if (pressed) {
            navBtn.setPressed(true);
            navBtn.disable();
            this.oldWidth = ct.width;
            ct.setWidth(44);
        } else {
            ct.setWidth(this.oldWidth);
            navBtn.enable();
        }

        // IE8 has an odd bug with handling font icons in pseudo elements;
        // it will render the icon once and not update it when something
        // like text color is changed via style addition or removal.
        // We have to force icon repaint by adding a style with forced empty
        // pseudo element content, (x-sync-repaint) and removing it back to work
        // around this issue.
        // See this: https://github.com/FortAwesome/Font-Awesome/issues/954
        // and this: https://github.com/twbs/bootstrap/issues/13863
        if (Ext.isIE8) {
            this.repaintList(treelist, pressed);
        }
    },

    onToggleNav: function (button, pressed) {
        var treelist = this.lookupReference('treelist'),
            ct = this.lookupReference('treelistContainer');

        treelist.setExpanderFirst(!pressed);
        treelist.setUi(pressed ? 'nav' : null);
        treelist.setHighlightPath(pressed);
        ct[pressed ? 'addCls' : 'removeCls']('treelist-with-nav');

        if (Ext.isIE8) {
            this.repaintList(treelist);
        }
    }
});
