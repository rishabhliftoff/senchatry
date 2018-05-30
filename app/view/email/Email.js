Ext.define('senchatry.view.email.Email', {
    extend: 'Ext.Img',
    xtype: 'email',

    userCls: 'main-user-image ',
    imageCls: 'circular small-image',
    alt: 'Current image',
    src: '<shared>images/image.png',
    mode: 'background',

    // controller: 'dashboard',
    // viewModel: {
    //     type: 'dashboard'
    // },

    cls: 'email',
    scrollable: true,

    defaults: {
        shadow: true
    },
});
