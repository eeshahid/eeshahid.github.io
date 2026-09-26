---
layout: page
title: Physics-Informed Diffusion Modelling for Medical Imaging
description: Physics-guided, efficient diffusion models for high-fidelity medical image reconstruction.
img: assets/img/9.jpg
importance: 1
category: research
related_publications: true
---

An ongoing project at the SDAIA-KFUPM Joint Research Center for AI, developing physics-guided diffusion architectures that incorporate imaging operators (e.g., point spread function, attenuation, noise models) to improve reconstruction fidelity and robustness in medical imaging.

The work focuses on making these generative models practical for deployment:

- Physics-guided diffusion architectures that explicitly model the imaging forward operator.
- Computationally efficient diffusion via few-step sampling, lightweight backbones, knowledge distillation, and quantization for real-time and edge deployment.
- Integrating generative outputs with downstream tasks (segmentation, classification, diagnostics) for task-aware performance improvements.

This work builds on related efficient medical image segmentation research, including {% cite munir2026daunet %}.
