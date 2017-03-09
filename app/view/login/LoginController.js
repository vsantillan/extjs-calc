Ext.define('AdeaProjects.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function() {
    localStorage.setItem("UserLoggedIn", true);
    this.getView().destroy();

    Ext.create({
      xtype: 'tree-list'
    });
  }
});