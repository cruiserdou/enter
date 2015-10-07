/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        if (!this.overlay) {
            var panel = Ext.create('Ext.Panel', {
                modal: true,
                hideOnMaskTap: true,
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                centered: true,
                //width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
                //height: Ext.filterPlatform('ie10') ? '30%' : Ext.os.deviceType == 'Phone' ? 220 : 400,
                width: '90%',
                height: '80%',
                layout: 'card',
                items: [
                    {
                        html: "First Item"
                    },
                    {
                        html: "Second Item"
                    },
                    {
                        html: "Third Item"
                    },
                    {
                        html: "Fourth Item"
                    }
                ]
            });

            panel.setActiveItem(1);

            this.overlay = Ext.Viewport.add(panel);
        }

        this.overlay.show();
        //Ext.Msg.confirm('确定', '确定修改吗?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
