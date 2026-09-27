---
title: Kelid (کلید)
summary: A custom iPhone keyboard with a clipboard manager, live resizing and Persian word prediction that learns from you, running entirely on the device with no network access.
kind: personal
period: 2026
date: 2026-09-27
role: Personal project · in development
tags: [Swift, SwiftUI, iOS, SQLite, Python, DuckDB]
highlights:
  - Clipboard history with pinning, search, snippets and text expansion, sensitive-content filtering and a Face ID lock.
  - Live drag-to-resize, one-handed mode and separate size profiles for portrait and landscape.
  - Its own memory-mapped language model (a trie plus n-gram tables, Stupid Backoff scoring and a typo model that knows Persian homophones), blended with a personal model that learns on the device.
  - A Python and DuckDB pipeline that builds the Persian and English n-gram data from Wikipedia and word-frequency lists.
links:
  - label: Source code
    url: https://github.com/erfanesfahanian1378/kelid
featured: true
---
