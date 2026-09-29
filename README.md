# Manmit's Website

Manmit Singh’s personal academic website, built with Jekyll and featuring a biography, education, technical posts, and selected projects.

## Setup

Use Ruby 3.3 (the version used for local builds) and Bundler 4.0.21, as recorded in `Gemfile.lock`.

```sh
git clone https://github.com/SupremeSingh/SupremeSingh.github.io.git
cd SupremeSingh.github.io
gem install bundler -v 4.0.21
bundle config set --local path vendor/bundle
bundle install
```

## Preview locally

```sh
bundle exec jekyll serve --livereload
```

Open [localhost:4000](http://localhost:4000). Content and style changes rebuild automatically; restart the server after editing `_config.yml`. Stop the server with Ctrl+C.

To include unpublished posts from `_drafts/` in the preview:

```sh
bundle exec jekyll serve --livereload --drafts
```

## Build

```sh
bundle exec jekyll build
```

The generated website is written to `_site/`. Generated output, installed dependencies, local Bundler configuration, and logs are ignored by Git; commit the source files and `Gemfile.lock`.

## Editing the site

- `index.md`: biography and education.
- `posts.md`, `projects.md`, and `contact.md`: main pages.
- `_posts/YYYY-MM-DD-title.md`: published posts with YAML front matter containing a `title`; the post layout and math support are enabled by default.
- `_layouts/` and `_includes/`: shared page templates.
- `assets/main.scss`: styling; `assets/images/`: profile photo and favicon.
- `_config.yml`: site settings and navigation.
