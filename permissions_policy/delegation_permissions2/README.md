# Permissions-Policy Fullscreen

This attempts to clarify the way that default permissions policies work, and in particular their relationship to the `allow=""` attribute on an iframe.
The discussion comes out of https://github.com/mdn/content/pull/42534#issuecomment-3698262868

By default a permission might have a default value of

- `*` allows the feature in all origins for a document and for any nested contexts. 
- `self` allows the feature in the document and same-origin nested contexts, but not cross origin contexts by default.
- You can set the container policy using [`allow`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#allow), but only to grant access to a feature that is already allowed by the parent node.

The last point is important. I had read this as "if the parent policy doesn't allow the origin then it can't be granted to the child". It is actually "if the **feature** isn't allowed in the parent".
If the parent policy is `self` or `*` for a feature the parent HAS the feature - the difference between these two is that when it is `self`, that feature isn't automatically delegated to cross origin frames.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy



## Using Caddy

caddy run from this folder

Open: https://localhost:8443  - index runs the tests, some of which are commented.


There is also https://localhost:9443 from which "cross origin" scripts are loaded

--- 

Note Caddy cool server for doing HTTPs and works without me having to create CA. Also can set CSP headers and multiple servers in one file.
Installed with choclaty.
See https://github.com/caddyserver/caddy/releases/tag/v2.10.2


### Removing the certificate added by Cady

Need to remove the certificate afterwards.

```sh
caddy untrust
```

Then delete Caddy’s PKI directory:

%LOCALAPPDATA%\Caddy\pki   (Windows)
~/.local/share/caddy/pki   (Linux)
~/Library/Application Support/Caddy/pki   (macOS)

  Mirroring of text in RTL modes has always worked for "normal" text in HTML or most MathML token elements, but did not work well for operators that might need to be stretched across multiple lines, such as square root elements containing.

