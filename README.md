# Overview
Landing page for Levo Financial.

# Gulp Tasks
* `gulp dev` starts dev server with BrowserSync.
* `gulp build` minifies files and puts necessary files into `dist/` directory. Contents of `dist/` can then be synced with cloud service. For example with Google Cloud Storage:
```
$ cd dist
$ gsutil rsync -R . gs://<BUCKET_NAME>
```

# Credit
Started with following template:
[New Age](http://startbootstrap.com/template-overviews/new-age/) is a web app landing page theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

Copyright 2013-2017 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-new-age/blob/gh-pages/LICENSE) license.
