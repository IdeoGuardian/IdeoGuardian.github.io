---
layout: home
title: Welcome to My Blog
---

# Welcome to IdeoGuardian's Portfolio

Hi! I'm IdeoGuardian, a Full Stack Web Developer. I specialize in creating robust web applications and innovative solutions.

## Skills & Technologies
- **Frontend:** React.js, Angular, HTML5, CSS3, JavaScript/TypeScript
- **Backend:** Node.js, Python, Java
- **Database:** MongoDB, PostgreSQL, MySQL
- **Cloud:** AWS, Azure
- **Other Tools:** Git, Docker, Jenkins

## Projects
Check out some of my notable projects on my [GitHub profile](https://github.com/IdeoGuardian).

## Contact
Feel free to reach out to me through:
- GitHub: [@IdeoGuardian](https://github.com/IdeoGuardian)
- Email: [your-email@domain.com]

## Latest Posts
```
{%- for post in site.posts limit:5 -%}
  <article>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%B %d, %Y" }}</time>
    {{ post.excerpt }}
  </article>
{%- endfor -%}
