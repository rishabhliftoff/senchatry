/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'senchatry',
    extend: 'senchatry.Application',

    requires: [
        'senchatry.*'
    ],
});
