# Hi there

You’ve found the source for my portfolio. Most of my client work lives in private repos, so this one is public on purpose: it’s a small, honest example of how I like to build.

**What’s in here**

- Templates in Liquid, rendered by [11ty](https://www.11ty.dev/)
- Content as Markdown, one file per project, with front matter as the data layer. Normally, I put this outside the 11ty build pipeline (`src`), but to move quickly, I'm using 11ty as designed.
- Images resized and reformatted on request by Netlify’s Image CDN, behind a few short rewrites in `netlify.toml`
- Single video served from Cloudinary through the same kind of proxy
- No JavaScript framework; a few lines of script for the before-and-after sliders

**What’s not in here**
- Open graph tags
- Sitemap
- Pretty much any attempt to assist indexing

**Things I tried to be careful about while moving quickly**

- Semantic HTML and keyboard-friendly interactions
- Fast pages: modern image formats, lazy loading, video instead of animated GIFs
- Content that’s easy to edit without touching templates

If you’re curious about any of it, I’d be glad to talk it through.

— Steve
