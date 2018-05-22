Ext.define('senchatry.store.Notifications', {
    extend: 'Ext.data.Store',
    alias: 'store.notifications',

    model: 'senchatry.model.Notification',

    data: [
        {
            date: '2017-05-20T10:20:30Z',
            description: 'The first notification'
        }
    ]
});
