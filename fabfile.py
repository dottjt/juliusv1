from fabric.api import *
import fabric.contrib.project as project
import os
import shutil
import sys
import SocketServer
import livereload

from pelican.server import ComplexHTTPRequestHandler

# Local path configuration (can be absolute or relative to fabfile)
env.deploy_path = 'output'
DEPLOY_PATH = env.deploy_path
env.master_path = '../julius'

# Remote server configuration
production = 'root@localhost:22'
dest_path = '/var/www'

# Github Pages configuration
env.github_pages_branch = "gh-pages"

# Port for `serve`
PORT = 8000

def clean():
    """Remove generated files"""
    if os.path.isdir(DEPLOY_PATH):
        shutil.rmtree(DEPLOY_PATH)
        os.makedirs(DEPLOY_PATH)

def build():
    """Build local version of site"""
    local('pelican -s pelicanconf.py')

def rebuild():
    """`clean` then `build`"""
    clean()
    build()

def regenerate():
    """Automatically regenerate site upon file modification"""
    local('pelican -r -s pelicanconf.py')

def serve():
    """Serve site at http://localhost:8000/"""
    os.chdir(env.deploy_path)

    class AddressReuseTCPServer(SocketServer.TCPServer):
        allow_reuse_address = True

    server = AddressReuseTCPServer(('', PORT), ComplexHTTPRequestHandler)

    sys.stderr.write('Serving on port {0} ...\n'.format(PORT))
    server.serve_forever()

from datetime import datetime

TEMPLATE = """
Title: {title}
Date: {year}-{month}-{day} {hour}:{minute:02d}
Modified: {year}-{month}-{day} {hour}:{minute:02d}
Tags: Julius Reade, 
Category: 
Slug: {slug}
Summary:
Status: draft


"""

def make_entry(title):
    today = datetime.today()
    slug = title.lower().strip().replace(' ', '-')
    f_create = "content/{}.md".format(slug)
    t = TEMPLATE.strip().format(title=title,
                                hashes='#' * len(title),
                                year=today.year,
                                month=today.month,
                                day=today.day,
                                hour=today.hour,
                                minute=today.minute,
                                slug=slug)
    with open(f_create, 'w') as w:
        w.write(t)
    print("File created -> " + f_create)

def reserve():
    """`build`, then `serve`"""
    build()
    serve()

def preview():
    """Build production version of site"""
    local('pelican -s publishconf.py')

@hosts(production)
def publish():
    """Publish to production via rsync"""
    local('pelican -s publishconf.py')
    project.rsync_project(
        remote_dir=dest_path,
        exclude=".DS_Store",
        local_dir=DEPLOY_PATH.rstrip('/') + '/',
        delete=True,
        extra_opts='-c',
    )

def gh():
    """Publish to GitHub Pages"""
    rebuild()
    local("ghp-import -b {github_pages_branch} {deploy_path}".format(**env))
    local("git push -f origin {github_pages_branch}".format(**env))

def m():
    rebuild()
    serve()


def lb(port=8080):

    clean()
    build()   # 1
    os.chdir('output')  # 3
    server = livereload.Server()  # 4
    server.watch('../content/',  # 5
        livereload.shell('pelican -s ../pelicanconf.py -o ../output'))  # 6
    server.watch('../themes/themeFolder/',  # 5
    livereload.shell('pelican -s ../pelicanconf.py -o ../output'))  # 6

    server.serve(liveport=35729, port=port)  # 11

def temp(port=8080):

    clean()
    build()   # 1
    os.chdir('output')  # 3
    server = livereload.Server()  # 4
    server.watch('../themes/themeFolder/',  # 5
        livereload.shell('pelican -s ../pelicanconf.py -o ../output'))  # 6
    server.serve(liveport=35729, port=port)  # 11
