---
title: English Bot
summary: A Telegram-based English tutoring platform that first matches learners of the same level and falls back to a self-hosted LLM conversation partner.
kind: work
period: 2023 – 2024
date: 2024-03-01
role: Software Engineer · Protein Team
tags: [LLM, Ollama, C++, Redis, Kafka, Telegram]
highlights:
  - Self-hosted a 14B model on Ollama instead of paying per token for OpenAI, cutting inference cost to infrastructure cost.
  - Wrote the matching engine in C++ for throughput and connected it to the rest of the system through API gateways in a microservice layout.
  - Used Redis and Kafka for load balancing and queueing across the conversation and matching services.
featured: true
---
