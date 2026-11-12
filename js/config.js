/*
 * ONE place to change the public address of the card.
 *
 * Set PROFILE_URL to the permanent HTTPS address where this folder is hosted,
 * then run:  node scripts/build.mjs
 * That regenerates the QR codes, the .vcf contact file and the link-preview tags
 * so the NFC tag, QR code and contact file all point to the same address.
 *
 * GitHub Pages address of the repository bgols-limited/Business-Card-Md-Robiul-Islam.
 * (The path is case-sensitive: keep the capital letters.)
 */
window.CARD_CONFIG = {
  PROFILE_URL: "https://bgols-limited.github.io/Business-Card-Md-Robiul-Islam/"
};
