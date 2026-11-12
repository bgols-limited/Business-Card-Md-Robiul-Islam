# Test report (Md. Robiul Islam card), 2026-11-12

Tested in headless Chromium with the iPhone 13 profile (390 × 844, touch) against a local copy.

| Check | Result |
|---|---|
| Page loads, no console errors, no failed requests | Pass |
| No horizontal scroll at phone width | Pass |
| `tel:` links: +8801335134461 and +8801819129304 | Pass |
| `mailto:` links: robiul.islam@bgols.com and ricky@bgols.com | Pass |
| WhatsApp links `wa.me/8801335134461` and `wa.me/8801819129304` | Pass |
| WeChat sheet (quick button and contact row) shows both numbers, each with Copy | Pass |
| `#qr` opens the card on the QR side; plain address opens the front | Pass |
| QR codes (SVG/PNG, printed card back, portrait card back) decode to `https://bgols-limited.github.io/Business-Card-Md-Robiul-Islam/` | Pass (zxing-cpp) |
| `contact.vcf`: vCard 3.0, CRLF, lines ≤ 75 octets, two mobile numbers, two emails, three labelled office addresses, embedded 256 px photo | Pass |
| card.html, nfc-setup.html, email-signature.html, manifest, sw.js load | Pass |

## Still to test on a real iPhone

- [ ] Save Contact in Safari shows the contact preview with photo, both numbers, both emails, three office addresses, website and card link.
- [ ] NameDrop between two iPhones (iOS 17.1+) after setting My Card.
- [ ] AirDrop of My Card and of the card link.
- [ ] Add to Home Screen icon and name ("Robiul Islam").
- [ ] Back Tap shortcut opens `#qr`.
- [ ] NFC tag written with NFC Tools opens the card on iPhone and Android.
- [ ] WeChat: the number can be found in WeChat search (depends on Mr. Robiul's WeChat privacy settings).

SHAMS confirmed 2026-11-12: both numbers have WhatsApp and WeChat. The quick WhatsApp button uses Mobile 1.
