#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Julius Reade'
SITENAME = u'J U L I U S R E A D E'
SITEURL = 'http://juliusreade.me'

THEME = 'themes/themeFolder'
PATH = 'content'
STATIC_PATHS = ['extra/CNAME', 'static']
PLUGIN_PATHS = ['plugins']	
PLUGINS = ['gzip_cache', 'sitemap']
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}, }


TIMEZONE = 'Australia/Melbourne'


ARTICLE_URL = '{slug}'
ARTICLE_SAVE_AS = '{category}/{slug}.html'
# PAGE_URL = 'pages/{slug}/'


DEFAULT_LANG = u'en'

TEMPLATE_PAGES = {'../themes/themeFolder/about.html': 'about.html',
                  '../themes/themeFolder/portfolio.html': 'portfolio.html',
                  '../themes/themeFolder/timeline.html': 'timeline.html',
                  '../themes/themeFolder/test.html': 'test.html',
                  '../themes/themeFolder/resume.html': 'resume.html'}

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.5,
        'indexes': 0.5,
        'pages': 0.5
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}


# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
