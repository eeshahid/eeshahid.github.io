---
layout: page
title: Efficient Face Presentation Attack Detection
description: Spatio-temporal deep learning for robust, lightweight face anti-spoofing.
img: assets/img/3.jpg
importance: 2
category: research
related_publications: true
---

Face presentation attack detection (face anti-spoofing) systems need to be both accurate under real-world conditions and cheap enough to run on constrained hardware. This project develops spatio-temporal deep learning frameworks with squeeze-and-excitation and Bahdanau attention mechanisms for robust detection, and multi-modal architectures that augment RGB input with synthetic depth modalities, achieving state-of-the-art performance with near-zero error rates on benchmark datasets.

A key thread is knowledge distillation: transferring what a heavier, depth-aware teacher model learns into a lightweight student model, so the resulting system stays deployable in resource-constrained and real-time settings {% cite jabbar2025knowledge %}.
