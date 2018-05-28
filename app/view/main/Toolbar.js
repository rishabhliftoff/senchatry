Ext.define('senchatry.view.main.Toolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'maintoolbar',

    requires: [
        'Ext.Button',
        'Ext.Img',
    ],

    items: ['->', {
        ui: 'header',
        iconCls: 'x-fa fa-search',
        href: '#searchresults',
        margin: '0 7 0 0',
        handler: 'toolbarButtonClick'
    }, {
        ui: 'header',
        iconCls: 'x-fa fa-envelope',
        href: '#email',
        margin: '0 7 0 0',
        handler: 'toolbarButtonClick'
    }, {
        ui: 'header',
        iconCls: 'x-fa fa-question',
        href: '#faq',
        margin: '0 7 0 0',
        handler: 'toolbarButtonClick'
    }, {
        ui: 'header',
        iconCls: 'x-fa fa-th-large',
        href: '#dashboard',
        margin: '0 7 0 0',
        handler: 'toolbarButtonClick'
    }, {
        xtype: 'component',
        html: 'Goff Smith',
        margin: '0 12 0 4',
        userCls: 'main-user-name'
    }, {
        xtype: 'image',
        userCls: 'main-user-image ',
        imageCls: 'circular small-image',
        alt: 'Current user image',
        src: '<shared>images/user-profile/2.png',
        mode: 'image',
        height: 35,
        width: 35,
    }]
});
