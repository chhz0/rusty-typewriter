> In this fork project, I have made some modifications to rusty-typewriter based on my personal needs, including adding github svg to the header, adding blog_count and include shortcode support, modifying some styles, and making some text in date.rtwt support markdownify and safeHTML. You can view these changes on my [chhz0.github.io](https://chhz0.github.io). Of course, I strongly recommend that you use the original [Rusty-Typewriter](https://github.com/math-queiroz/rusty-typewriter) theme directly, it is excellent, so I expanded it to meet my needs.

# Rusty Typewriter

[![Hugo Version](https://img.shields.io/badge/hugo-0.121.0+-blue.svg)](https://github.com/gohugoio/hugo/releases)
[![License](https://img.shields.io/github/license/math-queiroz/rusty-typewriter)](LICENSE)
[![Issues](https://img.shields.io/github/issues/math-queiroz/rusty-typewriter)](https://github.com/math-queiroz/rusty-typewriter/issues)
[![Stars](https://img.shields.io/github/stars/math-queiroz/rusty-typewriter)](https://github.com/math-queiroz/rusty-typewriter/stargazers)

A minimalist and elegant Hugo theme inspired by vintage typewriters, perfect for writers, bloggers, and content creators who appreciate a clean, distraction-free writing experience.

![preview](https://raw.githubusercontent.com/math-queiroz/rusty-typewriter/main/images/screenshot.png)

## Features

- 🎨 Clean, minimalist design with a vintage typewriter aesthetic
- 📱 Fully responsive layout
- 🔍 Built-in search functionality
- 📚 Table of contents support
- 🏷️ Custom taxonomies by default
- 📝 Rich markdown support with syntax highlighting
- 📋 Customizable sidebar
- 🔄 Related posts suggestions
- 📎 File attachments support

## Quick Start

1. Create a new Hugo site:
```bash
hugo new site my-blog
cd my-blog
```

2. Add the theme as a git submodule:
```bash
git init
git submodule add https://github.com/math-queiroz/rusty-typewriter.git themes/rusty-typewriter
```

3. Add the theme to your `hugo.toml`:
```toml
theme = 'rusty-typewriter'
```

4. Start the development server:
```bash
hugo server
```

## Configuration

The theme offers extensive configuration options through your site's `config.toml` file. Here are the main settings:

```toml
[params.rtwt]
  sidePane = true
  countPageItems = 7

[params.rtwt.home]
  showBio = true
  showAuthorImg = true
  sidePaneTags = true
  showFeatured = true
  showRecent = true
  hideRecentWhenFeatured = true
  countRecent = 5

[params.rtwt.side.home]
  sidePaneSticky = false
  taxonomies = ['tags']
  countTaxonomy = 5

[params.rtwt.side.single]
  sidePaneSticky = true
  showDetails = true
  showTableOfContents = true
  showAttachments = true
  showRelated = true
  countRelated = 5
```

### Front Matter Options

```toml
+++
title = "Your Post Title"
date = "2024-03-28"
tags = ["tag1", "tag2"]
topics = ["topic1"]
my_taxonomies = ["value"]
featured = true
+++
```

## Customization

### CSS Customization

You can customize the theme's appearance by creating a custom CSS file:

1. Create `assets/css/custom.css` in your site
2. Add your custom styles
3. The theme will automatically include your custom CSS
4. You may take a look at `_root.css` for existing theme values and variables

> If a css file starts with an undescore (_), it will be bundled with the theme default ones, which may affect caching behavior!

### Layout Customization

The theme's templates can be overridden by creating corresponding files in your site's `layouts` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This theme is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
