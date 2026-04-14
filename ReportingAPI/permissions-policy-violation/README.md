# Reporting API: permissions-policy-violation

This tests `permissions-policy-violation` types using a ReportingObserver.
There isn't any reporting endpoint so not server.

Do from this folder:

In separate terminal at `ReportingEndpoints\permissions-policy-violation\origin8443`

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
[
  {
    age: 44334,
    body: {
      columnNumber: 29,
      disposition: 'enforce',
      lineNumber: 44,
      message: 'Permissions policy violation: Geolocation access has been blocked because of a permissions policy applied to the current document. See https://crbug.com/414348233 for more details.',
      policyId: 'geolocation',
      sourceFile: 'https://localhost:8443/'
    },
    type: 'permissions-policy-violation',
    url: 'https://localhost:8443/',
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36'
  }
]
```
