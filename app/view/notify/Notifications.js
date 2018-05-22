Ext.define('senchatry.view.notify.Notifications', {
  extend: 'Ext.Panel',
  xtype: 'notifications',
  requires: [
    'Ext.grid.Grid',
    'Ext.grid.column.Date',
    'Ext.layout.Fit'
  ],

  layout: 'fit', // #2
  items: [{
    xtype: 'grid',

    store: {
        type: 'notifications' // we'll define this next
    },

    columns: [{
        xtype: 'datecolumn',
        text: 'Date',
        dataIndex: 'date'
    }, {
        text: 'Description',
        dataIndex: 'description',
        flex: 1
    }]
  }]
})
