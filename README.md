#lazy load for angular modules

https://github.com/ocombe/ocLazyLoad
##Install
```
meteor add planettraining:oclazyload
```

##How to
Put source you want to lazy load either 
 - in the public folder```/public/a_lazy_file.js``` folder 
 - or if you have them in a package add them as asset to the client
```
//foo:bar package.js:
api.addFiles('my_large_file.js', ['client'],{isAsset:true});
```

then somewhere in your angular code use the service to load it
```
var myApp = angular.module("MyApp", ["oc.lazyLoad"]);
```
And then during runtime:
```
$ocLazyLoad.load([
    'a_lazy_file.js',
    'packages/foo_bar/my_large_file.js'
]).then(function(){
    console.log("yeah lazy!!!!!!!1111")
});

```

Futher reading:
- https://oclazyload.readme.io
