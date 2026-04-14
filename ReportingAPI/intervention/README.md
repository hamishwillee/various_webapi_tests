# Reporting API: intervention

This tests `intervention` types using a ReportingObserver. 
There isn't any reporting endpoint so not server.

Do from this folder:

In serparate terminal at ReportingEndpoints\intervention\origin8443

```sh
node report-server.js
```

Then in this folder

```
caddy run
```

Then open https://localhost:8443 

Should see report on load