https://github.com/caddyserver/caddy/releases/tag/v2.10.2

Caddy cool server for doing HTTPs and works without me having to create CA. Also can set CSP headers.
Indstalled with choclaty.

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

## Running this

caddy run

