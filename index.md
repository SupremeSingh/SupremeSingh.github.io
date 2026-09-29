---
layout: default
title: Home
---

<section class="intro" aria-labelledby="intro-heading">
  <img class="profile-photo" src="{{ site.profile_image | relative_url }}" alt="{{ site.author | escape }}" width="235" height="235">
  <div>
    <h1 id="intro-heading" class="about-heading">About Me</h1>
    <p>I'm a master's student in Computer Science at Duke, and I'm particularly interested in computer systems, natural language processing, and reinforcement learning.</p>
    <p>In addition, I am researching the society-centered impacts of AI.</p>
    <p>I am seeking PhD positions starting <b>fall 2027.</b></p>
  </div>
</section>

## Education

<div class="education-entry">
  <div class="education-row">
    <h3 class="education-school">Duke University</h3>
    <span class="education-date">May 2027</span>
  </div>
  <div class="education-row">
    <p><strong class="education-degree">M.S. Computer Science</strong></p>
    <span class="education-gpa">3.8 GPA</span>
  </div>
  <p class="education-details"><strong>Coursework:</strong> Reinforcement Learning (CS 590), Natural Language Processing (CS 572) Operating Systems (CS 510), Distributed Systems (CS 512), Systems for Machine Learning (CS 590) </p>
  <p class="education-details">
  <strong>Research/Projects:</strong> Computing Education Research <a href="https://nlplab.cs.duke.edu/">(DukeNLP Lab)</a>, Reinforcement Learning Research</p> 
</div>

<div class="education-entry">
  <div class="education-row">
    <h3 class="education-school">Duke University</h3>
    <span class="education-date">May 2022</span>
  </div>
  <div class="education-row">
    <p><strong class="education-degree">B.S. Computer Science</strong>, Innovation and Entrepreneurship Certificate</p>
    <span class="education-gpa">3.6 GPA</span>
  </div>
  <p class="education-details">Undergraduate Teaching Assistant · Research Assistant · Dean’s List</p>
</div>

## Blog

{% include post-list.html %}
