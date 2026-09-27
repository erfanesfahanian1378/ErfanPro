---
title: English Bot
summary:
  en: A Telegram-based English tutoring platform that first matches learners of the same level and falls back to a self-hosted LLM conversation partner.
  it: Una piattaforma di tutoraggio di inglese su Telegram che abbina prima studenti dello stesso livello e, in mancanza, li fa conversare con un LLM ospitato in autonomia.
  fa: پلتفرم آموزش زبان انگلیسی روی تلگرام که ابتدا زبان‌آموزان هم‌سطح را با هم جفت می‌کند و در غیر این صورت یک مدل زبانی خودمیزبان هم‌صحبتشان می‌شود.
kind: work
period: 2023 – 2024
date: 2024-03-01
role:
  en: Software Engineer · Protein Team
  it: Software Engineer · Protein Team
  fa: مهندس نرم‌افزار · Protein Team
tags: [LLM, Ollama, C++, Redis, Kafka, Telegram]
highlights:
- en: Self-hosted a 14B model on Ollama instead of paying per token for OpenAI, cutting inference cost to infrastructure cost.
  it: Ho ospitato in autonomia un modello da 14B su Ollama invece di pagare OpenAI a token, riducendo il costo di inferenza al solo costo dell'infrastruttura.
  fa: میزبانی یک مدل ۱۴ میلیارد پارامتری روی Ollama به‌جای پرداخت به‌ازای هر توکن به OpenAI، که هزینهٔ استنتاج را به هزینهٔ زیرساخت محدود کرد.
- en: Wrote the matching engine in C++ for throughput and connected it to the rest of the system through API gateways in a microservice layout.
  it: Ho scritto il motore di matching in C++ per massimizzare il throughput e l'ho collegato al resto del sistema tramite API gateway in un'architettura a microservizi.
  fa: نوشتن موتور تطبیق با C++ برای توان عملیاتی بالا و اتصال آن به بقیهٔ سیستم از طریق API gatewayها در معماری میکروسرویس.
- en: Used Redis and Kafka for load balancing and queueing across the conversation and matching services.
  it: Ho usato Redis e Kafka per il bilanciamento del carico e le code tra i servizi di conversazione e matching.
  fa: استفاده از Redis و Kafka برای توزیع بار و صف‌بندی بین سرویس‌های گفتگو و تطبیق.
featured: false
---
