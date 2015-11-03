Package.describe({
  summary: "ocLazyLoad module for angular",
  name: "planettraining:oclazyload",
  version: "1.0.8",
  git:"https://github.com/planet-training/meteor-ocLazyLoad.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');


  api.use("angular:angular@1.4.7", "client");

  api.addFiles([
    'bower_components/ocLazyLoad/dist/ocLazyLoad.js'
  ], "client");
});
