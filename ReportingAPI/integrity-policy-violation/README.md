# Reporting API: permissions-policy-violation

This tests `integrity-policy-violation` types using a ReportingObserver. 
There isn't any reporting endpoint so not server.

Do from this folder:

In separate terminal at `ReportingEndpoints\integrity-policy-violation\origin8443`

```sh
node report-server.js
```

Then in this folder

```sh
caddy run
```

Then open https://localhost:8443 


Should see report like this at the reporting endpoint on load.

```json
[
  {
    age: 176279,
    body: {
      blockedURL: 'https://example.com/example-framework.js',
      destination: 'script',
      documentURL: 'https://localhost:8443/',
      reportOnly: false
    },
    type: 'integrity-violation',
    url: 'https://localhost:8443/',
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36'
  }
]
```

In page
```json
{
  "type": "integrity-violation",
  "url": "https://localhost:8443/",
  "body": {
    "documentURL": "https://localhost:8443/",
    "blockedURL": "https://example.com/example-framework.js",
    "destination": "script",
    "reportOnly": false
  }
}
```