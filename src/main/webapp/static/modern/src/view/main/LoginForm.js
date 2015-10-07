/**
 * This view is an example list of people.
 */
Ext.define('app.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    items: [{
        xtype: 'fieldset',
        title: '登录信息',
        instructions: '请在以上输入框输入用户名和密码.',
        defaults: {
            labelWidth: '90'
        },
        listeners: {
            painted: function () {
                c_compnent_id = 'loginform_id';
            }
        },
        items: [
            {
                xtype: 'textfield',
                name: 'usernm',
                label: '用户名',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'passwordfield',
                name: 'pass',
                label: '密码',
                clearIcon: !Ext.theme.is.Blackberry
            }]
    }, {
        xtype: 'container',
        defaults: {
            xtype: 'button',
            style: 'margin: 1em',
            flex: 1
        },
        layout: {
            type: 'hbox'
        },
        items: [
            {
                text: '登 录',
                ui: 'action',
                scope: this,
                hasDisabled: false,
                handler: function (btn) {
                    var fieldset1 = Ext.getCmp('fieldset1'),
                        fieldset2 = Ext.getCmp('fieldset2');

                    if (btn.hasDisabled) {
                        fieldset1.enable();
                        fieldset2.enable();
                        btn.hasDisabled = false;
                        btn.setText('Disable fields');
                    } else {
                        fieldset1.disable();
                        fieldset2.disable();
                        btn.hasDisabled = true;
                        btn.setText('Enable fields');
                    }
                }
            },
            {
                text: '重 置',
                ui: 'action',
                handler: function () {
                    Ext.getCmp('basicform').reset();
                }
            }
        ]
    }]

});
