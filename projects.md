---
layout: default
title: Projects
permalink: /projects/
---

<section class="projects-page" aria-labelledby="projects-heading">
  <h1 id="projects-heading" class="section-heading">Projects</h1>
  <ul class="post-list post-list-archive project-list">
      <li>
      <h2 class="post-list-title"><a href="https://github.com/SupremeSingh/rl_ms_project">SCALE: Sparse Cumulative Architecture for Linear Evaluation</a></h2>
      <p>A RL pipeline that combines SLICE’s frozen, compressed language-model representations with a small linear critic to train math-solving models using PPO. On NuminaMath-1.5, it improves the base model better than PPO or GRPO, with 17% less GPU training time than PPO and 10% less than GRPO.</p>
    </li>
    <li>
      <h2 class="post-list-title"><a href="https://github.com/SupremeSingh/SLICE">SLICE: Sparse Latent Inference for Correctness Estimation</a></h2>
      <p>A research toolkit for predicting whether a language model’s unfinished answer will be correct. It combines hidden states from multiple layers of a frozen model, compresses them into learned features, and fits a linear Ridge readout to estimate final-answer correctness from a question or partial answer.</p>
    </li>
    <li>
      <h2 class="post-list-title"><a href="https://github.com/SupremeSingh/Awesome-ZK">Awesome-ZK: Zero Knowledge On-Ramp</a></h2>
      <p>A practical introduction to zero-knowledge proofs for developers, combining conceptual and mathematical primers with hands-on Cairo examples and an ERC-20 implementation. It includes testing, JavaScript integrations, and a few case studies to connect the fundamentals to real applications.</p>
    </li>
  </ul>
</section>
