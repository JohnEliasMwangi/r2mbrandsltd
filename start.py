import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 3000
os.chdir(Path(__file__).parent)

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.webp': 'image/webp',
    '.js': 'application/javascript',
})

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"\n🚀 R2M Brands running at http://localhost:{PORT}/")
    print(f"📁 Serving from: {os.getcwd()}")
    print(f"📄 Pages: index.html, about.html, services.html, approach.html, industries.html, contact.html, insights.html")
    print(f"\nPress Ctrl+C to stop\n")
    try:
        # Try open browser
        webbrowser.open(f"http://localhost:{PORT}/")
    except:
        pass
    httpd.serve_forever()
