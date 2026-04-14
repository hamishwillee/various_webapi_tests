# Reporting API tests (and Reporting Endpoints)

Manual tests and demos for the [Reporting API](https://developer.mozilla.org/en-US/docs/Web/API/Reporting_API). They cover both the in-page `ReportingObserver` JavaScript API and server-side delivery via the `Reporting-Endpoints` header.

## Tests

| Directory | Report type |
|---|---|
| [coep/](coep/README.md) | COEP / CORP violations (cross-origin embedder + resource policy) |
| [deprecation/](deprecation/README.md) | Deprecated API usage (e.g. synchronous XHR) |
| [integrity-policy-violation/](integrity-policy-violation/README.md) | SRI / Integrity-Policy violations |
| [intervention/](intervention/README.md) | Browser intervention reports (e.g. blocked `document.write`) |
| [permissions-policy-violation/](permissions-policy-violation/README.md) | Permissions-Policy violations (e.g. blocked geolocation) |

## Quick start

Each test uses [Caddy](https://caddyserver.com/) for local HTTPS and a Node.js report server on port 3000.

Install dependencies once:

```sh
npm install
```

Then run any test with a single command from this directory:

```sh
npm run start:deprecation       # or: start:coep, start:intervention, start:permissions, start:integrity
```

The prompt you used to start the process displays the server report.
You will need to open the `https://localhost:8443` to trigger the violation and observe it in-page.
You may need to close the page to cause the server report to be sent.

See [CLAUDE.md](CLAUDE.md) for full setup details, manual startup instructions, and certificate cleanup.
