# Reporting API: deprecation 

This tests `deprecation` types using a ReportingObserver. 
There isn't any reporting endpoint so not server.

Do from this folder:

In separate terminal at `ReportingEndpoints\deprecation\origin8443`

```sh
node report-server.js
```

Then in this folder

```sh
caddy run
```

Then open https://localhost:8443 



Should see report on load in page, and one like this at the reporting endpoint.

```json
{
  "type": "deprecation",
  "url": "https://localhost:8443/",
  "body": {
    "sourceFile": "https://localhost:8443/",
    "lineNumber": 54,
    "columnNumber": 11,
    "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
    "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
    "anticipatedRemoval": null
  }
}
```
