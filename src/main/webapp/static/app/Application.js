/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('app.Application', {
    extend: 'Ext.app.Application',

    name: 'app',

    stores: [
        // TODO: add global / shared stores here
        'system.QuickStartMenuStore'
    ],

    launch: function () {
        // TODO - Launch the application
        //程序启动时执行以下代码
        //var loginWindow = Ext.create('Ext.window.Window', {
        //    height: 230,
        //    width: 320,
        //    id: 'loginwindow',
        //    title: '登录窗口',
        //    constrain: true,
        //    closable: false,
        //    modal: true,
        //    layout: 'fit',
        //    items: {  // Let's put an empty grid in just to illustrate fit layout
        //        xtype: 'form',
        //        defaultType: 'textfield',
        //        bodyPadding: 20,
        //        //url: '/equity/userslist/user',
        //        defaults: {
        //            labelWidth: 80,
        //            anchor: '100%'
        //        },
        //        items: [{
        //            allowBlank: false,
        //            fieldLabel: '用户名',
        //            id: 'account_id',
        //            name: 'account',
        //            value: localStorage.getItem('account'),
        //            emptyText: '用户名'
        //        }, {
        //            allowBlank: false,
        //            fieldLabel: '密码',
        //            id: 'password_id',
        //            name: 'password',
        //            emptyText: 'password',
        //            inputType: 'password'
        //        }, {
        //            xtype: 'checkbox',
        //            id: 'rem_id',
        //            checked: true,
        //            name: 'rem',
        //            fieldLabel: '记住我'
        //        }],
        //        buttons: [
        //            {
        //                text: '重置',
        //                handler: function () {
        //                    this.up('form').getForm().reset();
        //                }
        //            },
        //            {
        //                text: '登 录',
        //                handler: function () {
        //                    if (Ext.getCmp('rem_id').getValue() == true) {
        //                        if (window.localStorage) {
        //                            localStorage.account = Ext.getCmp('account_id').getValue();
        //                        }
        //                    }
        //
        //                    if (Ext.getCmp('account_id').getValue() != 'admin') {
        //                        Ext.Msg.alert('失败', '用户名或密码错误!');
        //                        return;
        //                    }
        //                    if (Ext.getCmp('password_id').getValue() != '1') {
        //                        Ext.Msg.alert('失败', '用户名或密码错误!')
        //                        return;
        //                    }
        //
        //                    Ext.getCmp('enter_grid_id').getStore().load();
        //                    loginWindow.close();
        //
        //                    //var form = this.up('form').getForm();
        //                    //if (form.isValid()) {
        //                    //    form.submit({
        //                    //        headers: {
        //                    //            Authorization: 'Basic bWFyaXNzYTprb2FsYQ=='
        //                    //        },
        //                    //        success: function () {
        //                    //            console.log("ok");
        //                    //            Ext.getCmp('enter_grid_id').getStore().load();
        //                    //            loginWindow.close();
        //                    //        },
        //                    //        failure: function () {
        //                    //            console.log("no");
        //                    //        }
        //                    //    })
        //                    //}
        //                }
        //            }
        //        ]
        //    }
        //}).show();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
