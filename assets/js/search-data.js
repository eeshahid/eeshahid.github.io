// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, conference papers, and a patent, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected funded research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open-source code and research repositories on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A summary of my education, experience, research projects, and skills. Download the full PDF version below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching interests, experience, and training activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-received-a-best-paper-award-at-the-13th-international-conference-on-machine-vision-spie-for-language-of-gleam-impressionism-artwork-automatic-caption-generation-for-people-with-visual-impairments",
          title: 'Received a Best Paper Award at the 13th International Conference on Machine Vision...',
          description: "",
          section: "News",},{id: "news-completed-my-ph-d-in-computer-engineering-at-sungkyunkwan-university-south-korea",
          title: 'Completed my Ph.D. in Computer Engineering at Sungkyunkwan University, South Korea.',
          description: "",
          section: "News",},{id: "news-joined-the-sdaia-kfupm-joint-research-center-for-artificial-intelligence-at-king-fahd-university-of-petroleum-and-minerals-as-a-post-doctoral-research-fellow",
          title: 'Joined the SDAIA-KFUPM Joint Research Center for Artificial Intelligence at King Fahd University...',
          description: "",
          section: "News",},{id: "news-new-paper-knowledge-distillation-with-predicted-depth-for-robust-and-lightweight-face-presentation-attack-detection-published-in-knowledge-based-systems",
          title: 'New paper “Knowledge Distillation with Predicted Depth for Robust and Lightweight Face Presentation...',
          description: "",
          section: "News",},{id: "news-our-review-paper-red-teaming-large-language-models-a-comprehensive-review-and-critical-analysis-was-published-in-information-processing-amp-amp-management",
          title: 'Our review paper “Red teaming large language models: A comprehensive review and critical...',
          description: "",
          section: "News",},{id: "news-our-paper-daunet-a-lightweight-unet-variant-with-deformable-convolutions-and-parameter-free-attention-for-medical-image-segmentation-was-accepted-for-publication-in-ieee-journal-of-biomedical-and-health-informatics",
          title: 'Our paper “DAUNet: A lightweight UNet variant with deformable convolutions and parameter-free attention...',
          description: "",
          section: "News",},{id: "projects-physics-informed-diffusion-modelling-for-medical-imaging",
          title: 'Physics-Informed Diffusion Modelling for Medical Imaging',
          description: "Physics-guided, efficient diffusion models for high-fidelity medical image reconstruction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_diffusion_medical_imaging/";
            },},{id: "projects-efficient-face-presentation-attack-detection",
          title: 'Efficient Face Presentation Attack Detection',
          description: "Spatio-temporal deep learning for robust, lightweight face anti-spoofing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_facepad/";
            },},{id: "projects-provoking-llms-by-llms-red-teaming-for-harmful-content-detection",
          title: 'Provoking LLMs by LLMs: Red Teaming for Harmful Content Detection',
          description: "A red team framework for proactively detecting harmful content generated by large language models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_red_teaming_llms/";
            },},{id: "projects-non-visual-information-transmission-for-the-blind-and-visually-impaired",
          title: 'Non-Visual Information Transmission for the Blind and Visually Impaired',
          description: "Tactile and multi-modal AI interfaces that make visual information (color, art, text) accessible.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_non_visual_interfaces/";
            },},{id: "projects-robust-indoor-location-estimation",
          title: 'Robust Indoor Location Estimation',
          description: "Sensor fusion and deep learning for precise, infrastructure-light indoor positioning and navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_indoor_positioning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%65%73%68%61%68%69%64@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Shahid_Jabbar.pdf", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/eeshahid", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/eeshahid", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2331-876X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Aq6eh9kAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://pure.kfupm.edu.sa/en/persons/muhammad-jabbar", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
