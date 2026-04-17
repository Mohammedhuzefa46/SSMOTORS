/* SS Trusted Motors — partials.js */
(function () {
  const logoSVG = `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="23" fill="rgba(184,145,42,0.1)" stroke="#c9a84c" stroke-width="1.5"/>
  <path d="M8 28c0 0 5-8 16-8s16 8 16 8" fill="none" stroke="#c9a84c" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="14" cy="28" rx="4" ry="4" fill="none" stroke="#c9a84c" stroke-width="1.5"/>
  <ellipse cx="34" cy="28" rx="4" ry="4" fill="none" stroke="#c9a84c" stroke-width="1.5"/>
  <path d="M12 28h-4m28 0h4" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M18 20l3-5h6l3 5" fill="none" stroke="#c9a84c" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="24" y="16" text-anchor="middle" font-family="Bebas Neue,sans-serif" font-size="7" fill="#c9a84c" letter-spacing="1">SS</text>
</svg>`;

  const ph = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z"/></svg>`;
  const em = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>`;

  document.getElementById('header-placeholder').outerHTML = `
<header class="site-header" id="site-header">
  <div class="header-top"><div class="container"><div class="header-top-inner">
    <div class="header-contact-strip">
      <a href="tel:+919010786208">${ph} +91 9010786208</a>
      <a href="mailto:sstrustedmotors@gmail.com">${em} sstrustedmotors@gmail.com</a>
      <span>Mon–Sat 10AM–9PM &nbsp;|&nbsp; Sun 10AM–7PM</span>
    </div>
    <span>Hyderabad, Telangana — Premium Pre-Owned Cars</span>
  </div></div></div>
  <div class="container"><div class="header-main">
    <a href="index.html" class="logo">
      <div class="logo-icon">${logoSVG}</div>
      <div class="logo-text"><span class="logo-name">SS Trusted Motors</span><span class="logo-tagline">Scan · Know · Decide</span></div>
    </a>
    <button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    <nav class="nav-menu">
      <a href="index.html" class="nav-link">Home</a>
      <a href="inventory.html" class="nav-link">Inventory</a>
      <a href="antiques.html" class="nav-link">Vintage</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="contact.html" class="nav-link">Contact</a>
    </nav>
  </div></div>
</header>`;

  const pin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const phF = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z"/></svg>`;
  const emF = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>`;

  document.getElementById('footer-placeholder').outerHTML = `
<footer class="site-footer">
  <div class="container"><div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <div class="logo-icon" style="width:40px;height:40px">${logoSVG}</div>
        <div class="logo-text"><span class="logo-name">SS Trusted Motors</span><span class="logo-tagline">Scan · Know · Decide</span></div>
      </a>
      <p>Hyderabad's most trusted pre-owned car dealership. Every vehicle is thoroughly inspected and comes with transparent documentation.</p>
      <div class="footer-social">
        <a href="https://www.instagram.com/ss_trusted_motors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="social-btn" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://www.facebook.com/share/1CpHvyDuAg/" class="social-btn" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
        <a href="https://www.youtube.com/@SSTRUSTEDMOTORS" class="social-btn" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://wa.me/919010786208" class="social-btn" aria-label="WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Quick Links</div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="inventory.html">Car Inventory</a>
        <a href="antiques.html">Antique Collection</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Services</div>
      <div class="footer-links">
        <a href="#">Car Inspection</a>
        <a href="#">RC Transfer</a>
        <a href="#">Finance Assistance</a>
        <a href="#">Insurance Help</a>
        <a href="#">QR Car Scan</a>
        <a href="#">Test Drive</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Contact Info</div>
      <div class="footer-contact-item">${phF}<span>+91 90107 86208</span></div>
      <div class="footer-contact-item">${emF}<span>sstrustedmotors@gmail.com</span></div>
      <div class="footer-contact-item">${pin}<span>RCI Rd, Sultanpur, Mallapur,<br>Hyderabad, Kurmalguda,<br>Telangana – 500 005</span></div>
    </div>
  </div></div>
  <div class="container"><div class="footer-bottom">
    <span>© 2025 SS Trusted Motors. All rights reserved.</span>
    <span>Powered by <span class="gold-text">Scan · Know · Decide</span> Technology</span>
  </div></div>
</footer>`;
})();
