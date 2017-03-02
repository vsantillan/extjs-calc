Ext.define('AdeaProjects.view.demo.DemoMain', {
  extend: 'Ext.window.Window',
  xtype: 'demo-main',

  requires: [
    'AdeaProjects.view.demo.Demo',
    'AdeaProjects.view.demo.DemoController',
    'Ext.form.Panel'
  ],

  bodyPadding: 0,
  closable: false,
  autoShow: true,
  draggable: false,
  resizable: false,

  items: {
    xtype: 'form-contact'
  }
});