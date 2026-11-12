# Deployment guide

The card is a folder of static files. Any HTTPS static host works. The address you choose becomes
**permanent** once it is written into NFC tags and printed QR codes, so pick it first.

## Option 1: GitHub Pages (free, fastest)

1. Public repository on GitHub: `bgols-limited/Business-Card-Md-Robiul-Islam`.
2. Upload the contents of this folder (or `git push`). `node_modules/` is not needed.
3. Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
4. After ~1 minute the site is at `https://bgols-limited.github.io/Business-Card-Md-Robiul-Islam/`, the address
   already in `js/config.js`, so nothing needs regenerating.
5. Tick **Enforce HTTPS** (on by default for `github.io`).

## Option 2: Netlify or Cloudflare Pages (free, drag-and-drop)

- Netlify: app.netlify.com → *Add new site → Deploy manually* → drag the folder in.
- Cloudflare Pages: dash.cloudflare.com → *Workers & Pages → Create → Pages → Upload assets*.
- You get an `https://…netlify.app` / `…pages.dev` address. Put it in `js/config.js`, run
  `node scripts/build.mjs`, upload again.

## Option 3 (recommended long-term): `https://card.bgols.com/robiul/`

This keeps the card on the company domain, so it survives any change of hosting provider.
It needs B-GOLS IT (whoever manages the `bgols.com` DNS):

1. Host the folder on any of the options above, inside a sub-folder `robiul/`
   (e.g. repository `card`, files in `robiul/`).
2. DNS: add a **CNAME** record `card` → `bgols-limited.github.io` (GitHub) or the Netlify/Cloudflare target.
3. GitHub Pages: Settings → Pages → *Custom domain* `card.bgols.com` → wait for the certificate → *Enforce HTTPS*.
4. Open `https://card.bgols.com/robiul/` in a browser and check the padlock **before** writing tags.
5. Set `PROFILE_URL` to `https://card.bgols.com/robiul/`, run the build, redeploy.

> Do not write NFC tags or print QR codes with `card.bgols.com` until step 4 succeeds.

## After every deployment

- [ ] Address opens on mobile data (not only Wi-Fi) with a valid padlock.
- [ ] `…/contact.vcf` downloads/opens the contact preview.
- [ ] Sharing the link in WhatsApp shows the preview image (WhatsApp caches previews; test with a fresh chat).
- [ ] Bump `VERSION` in `sw.js` whenever files change.
