---
layout: layout.njk
title: Blog - Kêkua Travel
description: Descubra histórias, dicas e guias sobre São Tomé e Príncipe no nosso blog.
---

<div class="blog-container">
    <h1 class="blog-title">Blog Kêkua Travel</h1>
    <p class="blog-subtitle">Histórias, dicas e guias sobre São Tomé e Príncipe</p>

    <div class="post-list">
        {% for post in collections.post %}
            <a href="{{ post.url }}" class="post-card">
                <div class="post-card-content">
                    <h2 class="post-card-title">{{ post.data.title }}</h2>
                    <p class="post-card-excerpt">{{ post.data.description }}</p>
                    <span class="post-card-date">{{ post.date | postDate }}</span>
                </div>
            </a>
        {% endfor %}
    </div>
</div>

<style>
.blog-container {
    max-width: 900px;
    margin: 4rem auto;
    padding: 0 5%;
}
.blog-title {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
}
.blog-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 4rem;
}
.post-list {
    display: grid;
    gap: 2rem;
}
.post-card {
    display: block;
    background: #fff;
    border-radius: 12px;
    box-shadow: var(--shadow);
    text-decoration: none;
    color: var(--text-color);
    transition: transform 0.3s, box-shadow 0.3s;
}
.post-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.12);
}
.post-card-content {
    padding: 2rem;
}
.post-card-title {
    margin-bottom: 1rem;
}
.post-card-excerpt {
    margin-bottom: 1.5rem;
}
.post-card-date {
    font-weight: bold;
    color: var(--secondary-color);
}
</style>
