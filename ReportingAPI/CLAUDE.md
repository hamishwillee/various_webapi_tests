# CLAUDE.md — ReportingAPI

## Project purpose

Manual browser tests and demos for the [Reporting API](https://developer.mozilla.org/en-US/docs/Web/API/Reporting_API). Each subdirectory exercises a specific report type using:

- **Caddy** — local HTTPS server that sets the necessary response headers and reverse-proxies `/report-handler` to the Node.js report server
- **report-server.js** — a minimal Node.js HTTP server (port 3000) that logs reports POSTed by the browser

Tests cover both the in-page `ReportingObserver` JavaScript API and server-side delivery via the `Reporting-Endpoints` header.

---

## Directory layout

| Directory | Report type tested |
|---|---|
| `coep/` | COEP / CORP violations (cross-origin embedder + resource policy) |
| `crash/` | Crash reports (tab kill / unresponsive) |
| `deprecation/` | Deprecated API usage (e.g. synchronous XHR) |
| `integrity-policy-violation/` | SRI / Integrity-Policy violations |
| `intervention/` | Browser intervention reports (e.g. blocked autoplay, `document.write`) |
| `document-policy/` | Document-Policy violations (e.g. JS Self-Profiling API blocked) |
| `permissions-policy-violation/` | Permissions-Policy violations (e.g. blocked geolocation) |

---

## Running a test

### One-command startup (recommended)

From the `ReportingAPI/` root, install dependencies once:

```sh
npm install
```

Then start both the report server and Caddy together:

```sh
npm run start:crash
npm run start:deprecation
npm run start:document-policy
npm run start:intervention
npm run start:permissions
npm run start:integrity
npm run start:coep
```

Press `Ctrl+C` to stop both processes.

### Manual startup (two terminals)

**Terminal 1** — start the report server (from `ReportingAPI/` root, or from any subdirectory's `origin8443/`):

```sh
node report-server.js
```

**Terminal 2** — start Caddy (from the relevant subdirectory, e.g. `deprecation/`):

```sh
caddy run
```

Then open `https://localhost:8443` in Chrome.

---

## report-server.js

The file `ReportingAPI/report-server.js` is the canonical copy. All subdirectory copies (`*/origin8443/report-server.js`) are identical and kept for backwards compatibility. If you change the server, update the root copy and sync the subdirectory copies.

The server:
- Listens on `http://localhost:3000`
- Accepts `POST /report-handler` and logs the JSON payload with a timestamp
- Returns `204 No Content` (the standard response for reporting endpoints)
- Handles `OPTIONS` (CORS preflight) and `GET` (health check)

---

## Caddy setup

- Version: v2.10.2, installed via Chocolatey
- Caddy auto-generates a local CA and HTTPS certificates on first run
- The Caddyfiles are in each subdirectory; `caddy run` must be executed from within that subdirectory (relative paths in the `root` directive are resolved relative to the Caddyfile location)

### Certificate cleanup

After you're done, remove the Caddy-generated certificate:

```sh
caddy untrust
```

Then delete the PKI directory:

- Windows: `%LOCALAPPDATA%\Caddy\pki`
- Linux: `~/.local/share/caddy/pki`
- macOS: `~/Library/Application Support/Caddy/pki`

---

## Debugging tips

- Reports to endpoints are often delayed significantly (the browser batches them). Use `chrome://net-export/` to capture network logs, then inspect via `https://netlog-viewer.appspot.com/#import` → Reporting sidebar.
- The `coep/` test uses a second origin on `localhost:9443` for cross-origin resource loading. Both Caddy blocks are defined in `coep/Caddyfile`.
- Browser must be Chrome; Firefox/Safari have limited Reporting API support.
