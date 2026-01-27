# This tests reporting for COEP

caddy run from this folder

Open: https://localhost:8443  - index runs the tests, some of which are commented.

The page loads an image that doesn't have CORP set when CORP is required, and we use reporting API to log the result.

It also sends a report to the server which you must run in a serparate terminal from ReportingEndpoints\coep\origin8443
```sh
node report-server.js
```

Takes forever to actually deliver the report, which might look like this
```
node report-server.js
Report Collector running at http://localhost:3000/report-handler

--- New Report Received [6:00:43 pm] ---
[
  {
    age: 599920,
    body: {
      blockedURL: 'https://www.wikipedia.org/static/images/project-logos/enwiki.png',
      destination: 'image',
      disposition: 'enforce',
      type: 'corp'
    },
    type: 'coep',
    url: 'https://localhost:8443/',
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36'
  }
]

```

You can use chrome://net-export/ to export a report, load https://localhost:8443, then stop it after 20 secs.
Then import the file via https://netlog-viewer.appspot.com/#import and go to reporting in the sidebar - from there you can see the report.


# Using Caddy

https://github.com/caddyserver/caddy/releases/tag/v2.10.2

Caddy cool server for doing HTTPs and works without me having to create CA. Also can set CSP headers and multiple servers in one file.
Installed with choclaty.

Need to remove the certificate afterwards.

```sh
caddy untrust
```

Then delete Caddy’s PKI directory:

%LOCALAPPDATA%\Caddy\pki   (Windows)
~/.local/share/caddy/pki   (Linux)
~/Library/Application Support/Caddy/pki   (macOS)

  Mirroring of text in RTL modes has always worked for "normal" text in HTML or most MathML token elements, but did not work well for operators that might need to be stretched across multiple lines, such as square root elements containing.

## Stuff or workers

https://medium.com/@krishnachirumamilla/content-security-policy-worker-src-cd06ecfa2fe8 - CSP


