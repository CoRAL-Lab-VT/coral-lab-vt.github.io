// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research-group",
          title: "Research Group",
          description: "The CoRALians",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-education-amp-outreach",
          title: "Education &amp; Outreach",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Funded projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-dr-samuel-daramola-graduates-from-virginia-tech",
        
          title: "Dr. Samuel Daramola graduates from Virginia Tech",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fall-2025/2025/12/20/photo-gallery.html";
          
        },
      },{id: "post-10th-water-prediction-innovators-summer-institute",
        
          title: "10th Water Prediction Innovators Summer Institute",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/summer-2025/2025/07/24/photo-gallery.html";
          
        },
      },{id: "post-chris-mansky-defended-his-master-thesis",
        
          title: "Chris Mansky defended his master thesis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spring-2024/2024/05/02/photo-gallery.html";
          
        },
      },{id: "post-8th-water-prediction-innovators-summer-institute",
        
          title: "8th Water Prediction Innovators Summer Institute",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/summer-2023/2023/07/26/distill.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-samuel-daramola-will-join-the-coral-lab-this-fall-2022-to-pursue-a-doctoral-degree",
          title: 'Samuel Daramola will join the CoRAL Lab this Fall 2022 to pursue a...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-is-co-leading-the-agu-session-nh007-compound-consecutive-and-cascading-events-challenges-for-risk-assessment-and-management-of-multihazards-chicago-il",
          title: 'Dr. Muñoz is co-leading the AGU session NH007: Compound, Consecutive, and Cascading Events:Challenges...',
          description: "",
          section: "News",},{id: "news-samuel-daramola-has-been-awarded-the-g-v-loganathan-memorial-fellowship",
          title: 'Samuel Daramola has been awarded the G. V. Loganathan Memorial Fellowship.',
          description: "",
          section: "News",},{id: "news-samuel-daramola-has-been-selected-to-participate-in-the-next-team-science-training-sponsored-by-virginia-sea-grant-and-the-national-science-foundation",
          title: 'Samuel Daramola has been selected to participate in the next Team Science training...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-is-a-co-editor-of-the-research-topic-spatiotemporal-modeling-assessment-of-water-related-multi-hazards-in-frontiers-in-water",
          title: 'Dr. Muñoz is a co-editor of the research topic “Spatiotemporal Modeling Assessment of...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-gives-a-talk-in-the-2023-georgia-water-resources-conference-university-of-georgia-ga",
          title: 'Dr. Muñoz gives a talk in the 2023 Georgia Water Resources Conference. University...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-is-awarded-with-the-2023-faculty-mentorship-grant",
          title: 'Dr. Muñoz is awarded with the 2023 Faculty Mentorship Grant.',
          description: "",
          section: "News",},{id: "news-samuel-daramola-has-been-selected-to-participate-in-the-national-water-center-innovators-program-summer-institute-sponsored-by-cuahsi-and-noaa",
          title: 'Samuel Daramola has been selected to participate in the National Water Center Innovators...',
          description: "",
          section: "News",},{id: "news-md-shadman-sakib-will-join-the-coral-lab-this-fall-2023-to-pursue-a-doctoral-degree",
          title: 'Md. Shadman Sakib will join the CoRAL Lab this Fall 2023 to pursue...',
          description: "",
          section: "News",},{id: "news-md-shadman-sakib-has-been-awarded-the-pratt-graduate-fellowship",
          title: 'Md. Shadman Sakib has been awarded the Pratt Graduate Fellowship.',
          description: "",
          section: "News",},{id: "news-chris-mansky-joins-the-coral-lab-this-fall-2023-to-pursue-a-master-degree-in-civil-engineering",
          title: 'Chris Mansky joins the CoRAL Lab this Fall 2023 to pursue a master...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-gives-a-talk-in-the-3rd-international-workshop-on-waves-storm-surges-and-coastal-hazards-university-of-notre-dame-indiana",
          title: 'Dr. Muñoz gives a talk in the 3rd International Workshop on Waves, Storm...',
          description: "",
          section: "News",},{id: "news-samuel-daramola-will-present-his-research-at-the-ocean-sciences-meeting-2024-which-will-take-place-in-new-orleans-louisiana",
          title: 'Samuel Daramola will present his research at the Ocean Sciences Meeting 2024, which...',
          description: "",
          section: "News",},{id: "news-our-work-on-inter-model-comparison-of-delft3d-fm-and-2d-hec-ras-for-total-water-level-prediction-in-coastal-to-inland-transition-zones-is-featured-as-the-top-cited-article-in-2022-2023",
          title: 'Our work on “Inter-Model Comparison of Delft3D-FM and 2D HEC-RAS for Total Water...',
          description: "",
          section: "News",},{id: "news-chris-mansky-has-successfully-defended-his-master-thesis-a-machine-learning-based-approach-to-predicting-waterborne-disease-outbreaks-caused-by-hurricanes",
          title: 'Chris Mansky has successfully defended his master thesis “A Machine Learning-based Approach to...',
          description: "",
          section: "News",},{id: "news-our-recent-article-on-quantifying-cascading-uncertainty-in-compound-flood-modeling-with-linked-process-based-and-machine-learning-models-has-been-published-in-the-hydrology-and-earth-system-sciences-hess-journal",
          title: 'Our recent article on “Quantifying Cascading Uncertainty in Compound Flood Modeling with Linked...',
          description: "",
          section: "News",},{id: "news-the-coral-lab-in-collaboration-with-colleagues-will-be-hosting-an-agu24-session-on-nh026-hybrid-modeling-and-digital-twin-systems-for-flood-hazard-prediction-and-risk-assessment-at-different-spatial-scales",
          title: 'The CoRAL lab, in collaboration with colleagues, will be hosting an AGU24 session...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-presented-the-work-quantifying-cascading-uncertainty-in-compound-flood-modeling-with-linked-process-based-and-machine-learning-models-in-the-2024-awra-ucowr-niwr-joint-water-resources-conference-in-st-louis",
          title: 'Dr. Muñoz presented the work “Quantifying Cascading Uncertainty in Compound Flood Modeling with...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-presented-the-work-advancing-compound-flood-modeling-with-hybrid-approaches-an-integrated-modeling-perspective-in-the-ccpo-icar-seminar-series-organized-by-old-dominion-university",
          title: 'Dr. Muñoz presented the work “Advancing Compound Flood Modeling with Hybrid Approaches: An...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-presented-the-work-predicting-the-evolution-of-extreme-water-levels-with-deep-and-transfer-learning-techniques-in-the-cmcc-foccus-international-workshop-lecce-italy",
          title: 'Dr. Muñoz presented the work “Predicting the Evolution of Extreme Water Levels with...',
          description: "",
          section: "News",},{id: "news-the-coral-lab-attended-the-american-geophysical-union-agu-conference-for-the-first-time-we-hold-a-session-in-digital-twins-and-presented-five-research-works-involving-natural-hazards-and-ocean-sciences",
          title: 'The CoRAL lab attended the American Geophysical Union (AGU) conference for the first...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-collaborated-to-the-editorial-of-spatiotemporal-modeling-and-assessment-of-water-related-multi-hazards-thanks-to-the-authors-who-submitted-their-research-to-the-special-collection",
          title: 'Dr. Muñoz collaborated to the editorial of “Spatiotemporal modeling and assessment of water-related...',
          description: "",
          section: "News",},{id: "news-our-work-on-predicting-extreme-water-levels-associated-with-cyclones-has-been-published-in-water-resources-research-congratulations-samuel-for-your-first-phd-article",
          title: 'Our work on predicting extreme water levels associated with cyclones has been published...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-participated-in-the-egu-2025-we-collaborate-with-researchers-from-belgium-and-ecuador-to-advance-operational-hydrology-in-data-scarce-mountainous-areas-using-machine-learning-see-the-abstracts-1-and-2",
          title: 'Dr. Muñoz participated in the EGU 2025. We collaborate with researchers from Belgium...',
          description: "",
          section: "News",},{id: "news-md-shadman-sakib-has-been-selected-to-participate-in-the-national-water-center-innovators-program-summer-institute-sponsored-by-cuahsi-and-ciroh",
          title: 'Md. Shadman Sakib has been selected to participate in the National Water Center...',
          description: "",
          section: "News",},{id: "news-our-research-on-predicting-extreme-water-levels-in-the-u-s-atlantic-coast-has-been-featured-by-fox-weather",
          title: 'Our research on predicting extreme water levels in the U.S. Atlantic Coast has...',
          description: "",
          section: "News",},{id: "news-our-research-on-predicting-extreme-water-levels-in-the-u-s-atlantic-coast-has-been-featured-by-cnn",
          title: 'Our research on predicting extreme water levels in the U.S. Atlantic Coast has...',
          description: "",
          section: "News",},{id: "news-nuestra-investigación-sobre-la-predicción-de-niveles-de-agua-extremos-en-la-costa-atlántica-de-los-estados-unidos-ha-sido-compartida-en-huella-zero",
          title: 'Nuestra investigación sobre la predicción de niveles de agua extremos en la costa...',
          description: "",
          section: "News",},{id: "news-our-collaborative-research-on-escalating-high-tide-flooding-along-the-atlantic-and-gulf-coast-of-the-united-states-due-to-sea-level-rise-has-been-accepted-for-publication-in-earth-s-future-congratulations-to-the-team",
          title: 'Our collaborative research on “Escalating High Tide Flooding Along the Atlantic and Gulf...',
          description: "",
          section: "News",},{id: "news-congratulations-to-md-shadman-sakib-for-his-first-ph-d-publication-in-advances-in-water-resources-in-this-collaborative-study-researchers-from-virginia-tech-and-the-university-of-central-florida-published-the-study-breaking-down-annual-and-tropical-cyclone-induced-nonlinear-interactions-in-total-water-levels-with-a-focus-on-the-chesapeake-bay-in-virginia-way-to-go-md-shadman",
          title: 'Congratulations to Md. Shadman Sakib for his first Ph.D. publication in Advances in...',
          description: "",
          section: "News",},{id: "news-congratulations-to-samuel-daramola-for-his-third-phd-publication-in-the-journal-expert-systems-with-applications-in-this-study-our-research-team-developed-a-transferable-deep-learning-framework-to-propagate-extreme-water-levels-from-sparse-tide-gauges-across-spatial-domains",
          title: 'Congratulations to Samuel Daramola for his third PhD publication in the journal Expert...',
          description: "",
          section: "News",},{id: "news-the-coral-lab-has-been-invited-to-present-in-the-ai-community-of-practice-aicop-meeting-organized-by-the-u-s-army-corps-of-engineers-our-own-samuel-daramola-will-present-a-live-demo-of-lstm-sam-to-predict-extreme-water-levels-using-transfer-learning-techniques-go-hokies",
          title: 'The CoRAL Lab has been invited to present in the AI Community of...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-attended-the-28th-biennal-conference-coastal-estuarine-research-federation-cerf-to-present-the-research-work-towards-a-global-transferability-of-models-for-cyclone-induced-compound-flooding",
          title: 'Dr. Muñoz attended the 28th Biennal Conference - Coastal Estuarine Research Federation (CERF)...',
          description: "",
          section: "News",},{id: "news-the-coral-lab-is-extremely-proud-to-introduce-dr-samuel-daramola-to-the-research-community-sam-will-be-joining-the-stevens-institute-of-technology-as-a-posdoctoral-researcher-all-the-best-wishes-to-dr-daramola-in-this-new-adventure",
          title: 'The CoRAL Lab is extremely proud to introduce Dr. Samuel Daramola to the...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-co-convened-the-agu-fall-2025-session-multihazard-flood-modeling-from-inland-to-coast-thanks-to-those-who-submitted-their-work-to-our-session",
          title: 'Dr. Muñoz co-convened the AGU Fall 2025 session: “Multihazard Flood Modeling: From Inland...',
          description: "",
          section: "News",},{id: "news-the-coral-lab-members-presented-their-work-in-the-agu-fall-2025-meeting-modeling-water-level-propagation-with-sparse-gauges-using-enhanced-deep-learning-and-spatiotemporal-transfer-learning-approaches-compound-effects-of-synthetic-low-frequency-tropical-cyclones-and-sea-level-rise-scenarios-on-nonlinear-tide-surge-interactions-and-a-comparative-analysis-of-operational-multi-method-flood-inundation-mapping-quantifying-fidelity-accuracy-tradeoffs",
          title: 'The CoRAL Lab members presented their work in the AGU Fall 2025 meeting:...',
          description: "",
          section: "News",},{id: "news-our-collaborative-research-on-evaluating-the-three-cornered-hat-method-for-hourly-satellite-precipitation-fusion-in-hydrological-forecasting-a-case-study-in-a-tropical-andean-basin-has-been-accepted-for-publication-in-the-journal-of-hydrology-regional-studies-congratulations-to-the-team",
          title: 'Our collaborative research on “Evaluating the three-cornered hat method for hourly satellite precipitation...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%76%69%64%6D%75%6E%6F%7A%70%61%75%74%61@%76%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/davidmunozpauta", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6032-1082", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/David-Munoz-31?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bS44baIAAAAJ&hl=en", "_blank");
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
