(function () {
  if (window.location.protocol !== 'file:') return;

  document.open();
  document.write(
    '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>Portfolio preview</title>' +
      '<style>html{font-family:Arial,sans-serif;color:#0b172d;background:#fff}' +
      'body{min-height:100vh;margin:0;display:grid;place-items:center;padding:24px;box-sizing:border-box}' +
      'main{max-width:560px}h1{font-size:clamp(28px,6vw,48px);line-height:1.05;margin:0 0 18px}' +
      'p{font-size:17px;line-height:1.6;margin:0;color:#31415c}</style></head>' +
      '<body><main><h1>Serve this portfolio over HTTP.</h1>' +
      '<p>Use the local preview command documented in README.md. Direct filesystem previews cannot load the site routes and styles reliably.</p>' +
      '</main></body></html>'
  );
  document.close();
}());
