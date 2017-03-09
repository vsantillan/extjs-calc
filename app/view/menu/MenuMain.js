Ext.define('AdeaProjects.view.menu.MenuMain', {
  extend: 'Ext.window.Window',
  xtype: 'menu-main',

  requires: [
    'AdeaProjects.view.demo.Demo',
    'AdeaProjects.view.demo.MainView',
    'AdeaProjects.view.demo.DemoController',
    'Ext.form.Panel'
  ],

  bodyPadding: 0,
  //maximized: true,
  closable: false,
  autoShow: true,
  draggable: false,
  resizable: false,

  items: {
    //xtype: 'form-contact'
    xtype: 'tree-list'
  }
});