/**
 * This example demonstrates basic tree configuration.
 */
Ext.define('app.view.tree.TreeFilesView', {
    extend: 'Ext.Container',
    xtype: 'basic-trees',
    width: 640,
    requires: [
        'app.store.tree.TreeFiles'
    ],
    layout: {
        type: 'table',
        columns: 2,
        tdAttrs: {style: 'padding: 10px;'}
    },

    items: [{
        xtype: 'treepanel',
        requires: [
            'app.store.tree.TreeFiles'
        ],
        width: 300,
        height: 200,
        rootVisible: false,
        // Sharing the store synchronizes the views:
        store: 'treestore'
    }]

    //defaults: {
    //    xtype: 'treepanel',
    //    width: 300,
    //    height: 200,
    //    rootVisible: false,
    //    // Sharing the store synchronizes the views:
    //    store: 'treestore'
    //}
    //,
    //
    //initComponent: function () {
    //    this.items = [
    //        {
    //            title: 'Tree'
    //        }
    //    ];
    //
    //    this.callParent();
    //}
});
