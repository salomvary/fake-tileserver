Fake http tile server for testing map applications.

Usage:

```
npm install
node server
```

Configure the application to use tiles at `http://localhost:3000/{z}/{x}/{y}`. See [example](test.html).

If npm install complains about missing fontconfig, try this:
```
PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig/ npm install
```
