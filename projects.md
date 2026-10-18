---
layout: default
title: Projects
permalink: /projects/
---

<section class="projects-page" aria-labelledby="projects-heading">
  <h1 id="projects-heading" class="section-heading">Projects</h1>
  <ul class="post-list post-list-archive project-list">
    <li>
      <h2 class="post-list-title"><a href="https://github.com/SupremeSingh/SLICE">SLICE: Sparse Latent Inference for Correctness Estimation</a></h2>
      <p>A research toolkit for predicting whether a language model’s unfinished answer will be correct. It combines hidden states from multiple layers of a frozen model, compresses them into learned features, and fits a linear Ridge readout to estimate final-answer correctness from a question or partial answer. The toolkit includes workflows for collecting answers, extracting features, training probes, and evaluating predictions.</p>
    </li>
    <li>
      <h2 class="post-list-title"><a href="https://github.com/SupremeSingh/rl_ms_project">Math RL: Can PPO Use a Cheaper Critic?</a></h2>
      <p>A reinforcement learning research project exploring lightweight linear critics for training math-solving language models. It reuses the model’s hidden representations to compare ridge regression and least-squares temporal-difference critics against conventional PPO and GRPO, evaluating both accuracy and training compute.</p>
    </li>
    <li>
      <h2 class="post-list-title"><a href="https://github.com/SupremeSingh/Awesome-ZK">Awesome-ZK: Zero Knowledge On-Ramp</a></h2>
      <p>A practical introduction to zero-knowledge proofs for developers, combining conceptual and mathematical primers with hands-on Cairo examples and an ERC-20 implementation. It includes testing, JavaScript integrations, and a few case studies to connect the fundamentals to real applications.</p>
    </li>
  </ul>
</section>
