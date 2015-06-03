Package.describe({
  summary: "ocLazyLoad module for angular",
  name: "planettraining:oclazyload",
  version: "1.0.1",
  git:"https://github.com/planet-training/meteor-ocLazyLoad.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');


  api.use("angular:angular@1.3.15", "client");

  api.addFiles([
    'bower_components/ocLazyLoad/dist/ocLazyLoad.js'
  ], "client");
});
