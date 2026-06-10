#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse


HOST = "127.0.0.1"
PORT = 18073
PROJECT_PATH = "/SonicSphereFeySystemDiagram"
ROOT = Path(__file__).resolve().parent


class ProjectHandler(SimpleHTTPRequestHandler):
    def maybe_redirect_hash_route(self):
        request_path = urlparse(self.path).path
        hash_routes = {
            PROJECT_PATH + "/diagram": PROJECT_PATH + "/#/diagram",
            PROJECT_PATH + "/full-system": PROJECT_PATH + "/#/full-system",
        }

        if request_path in hash_routes:
            self.send_response(302)
            self.send_header("Location", hash_routes[request_path])
            self.end_headers()
            return True

        return False

    def do_GET(self):
        if self.maybe_redirect_hash_route():
            return

        super().do_GET()

    def do_HEAD(self):
        if self.maybe_redirect_hash_route():
            return

        super().do_HEAD()

    def translate_path(self, path):
        parsed = urlparse(path)
        request_path = unquote(parsed.path)

        if request_path == "/":
            request_path = PROJECT_PATH + "/"

        if request_path == PROJECT_PATH:
            request_path = PROJECT_PATH + "/"

        if not request_path.startswith(PROJECT_PATH + "/"):
            return str(ROOT / "index.html")

        relative = request_path[len(PROJECT_PATH) + 1 :]
        local_path = (ROOT / relative).resolve()

        try:
            local_path.relative_to(ROOT)
        except ValueError:
            return str(ROOT / "index.html")

        if local_path.is_file():
            return str(local_path)

        return str(ROOT / "index.html")

    def log_message(self, format, *args):
        print("%s - %s" % (self.address_string(), format % args))


def main():
    server = ThreadingHTTPServer((HOST, PORT), ProjectHandler)
    url = f"http://{HOST}:{PORT}{PROJECT_PATH}/"
    print(f"Serving Sonic Sphere Fey System Diagram at {url}")
    server.serve_forever()


if __name__ == "__main__":
    main()
