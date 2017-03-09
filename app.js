Ext.Loader.setConfig({
  enabled: true
});

Ext.Loader.setPath('AdeaProjects', 'app');

Ext.onReady(function() {
  Ext.application({
    name: 'AdeaProjects',

    requires: [
      'Ext.container.Viewport'
    ],

    views: [
      'AdeaProjects.view.login.Login',
      'AdeaProjects.view.main.Main',
      'AdeaProjects.view.demo.Demo',
      'AdeaProjects.view.menu.MenuMain',
      'AdeaProjects.view.menu.Menu'
    ],

    launch: function() {
      Ext.setGlyphFontFamily('FontAwesome');

      var loggedIn;

      loggedIn = localStorage.getItem("UserLoggedIn");

      Ext.create('Ext.container.Viewport', {
        layout: 'anchor',
        items: [{
          xtype: loggedIn ? 'form-contact' : 'login',
          autoShow: true
        }]
      });

      //Ext.create({
      //    xtype: loggedIn ? 'menu-main' : 'login'
      //  })
      //Ext.create('AdeaProjects.view.login.Login').show();
    }
  });
});