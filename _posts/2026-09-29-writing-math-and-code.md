---
title: "Sample placeholder for article with math and code"
layout: post
math: true
---

This sample post demonstrates mathematical notation and code formatting.

## Inline math

A value estimate is written as $$V(s)$$ in a sentence.

## Display math

Put double dollar signs on their own lines, with blank lines around the block:

$$
V(s) \leftarrow V(s) + \alpha\left[r + \gamma V(s') - V(s)\right].
$$

## Python code

```python
def td_update(value, reward, next_value, alpha=0.1, gamma=0.99):
    target = reward + gamma * next_value
    return value + alpha * (target - value)
```

## A link

[GitHub](https://github.com/SupremeSingh)
