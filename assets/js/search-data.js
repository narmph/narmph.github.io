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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-publications-and-presentations",
              title: "publications and presentations",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "post-my-first-blog-post",
        
          title: "my first blog post",
        
        description: "Hi!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first_post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-website-is-now-live-have-a-look-around",
          title: 'My website is now live! Have a look around 🪐',
          description: "",
          section: "News",},{id: "projects-handcycle-wrist-guard",
          title: 'handcycle wrist guard',
          description: "increasing accessability to hand cycleing for those with grip weakness or wrist pain",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a_wrist_guard_hand_cycle/";
            },},{id: "projects-the-sous-gardener",
          title: 'the sous gardener',
          description: "keep your green babies alive and thriving with almost no effort at all",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ab_sous_gardener/";
            },},{id: "projects-the-beer-pour-machine",
          title: 'the beer pour machine',
          description: "want the perfect head on your beer but have bad hand eye coordination?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beer_pour_machine/";
            },},{id: "projects-heat-sink-design",
          title: 'heat sink design',
          description: "design and modeling of components for dark matter detection experiment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crystalize_heatsink/";
            },},{id: "projects-scintillating-ptfe-material",
          title: 'scintillating PTFE material',
          description: "design and fabrication of novel scintillating PTFE material",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crystalize_ptfe/";
            },},{id: "projects-dead-reckoning-on-the-össur-power-knee",
          title: 'dead reckoning on the Össur Power Knee',
          description: "using pedestrian dead reckoning for task and terrain estimation on the Össur Power Knee",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dead_reckoning_power_knee/";
            },},{id: "projects-joint-impedance-estimation",
          title: 'joint impedance estimation',
          description: "using machine learning to estimate joint mechanical impedance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ml_impedance_estimation/";
            },},{id: "projects-powered-ankle-prosthesis-on-slopes",
          title: 'powered ankle prosthesis on slopes',
          description: "effects of powered ankle prostheses on lower limb kinetics and metabolics literature review",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sloped_prosth_walking_lit_review/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/narmph.info", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%61%72%6D%70%68@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/narmph", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nana-porter-honicky-86bb7a73", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5155-7966", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3hTNmpgAAAAJ", "_blank");
        },
      },{
        id: 'social-letterboxd',
        title: 'Letterboxd',
        section: 'Socials',
        handler: () => {
          window.open("https://letterboxd.com/narmph/", "_blank");
        },
      },{
        id: 'social-goodreads',
        title: 'Goodreads',
        section: 'Socials',
        handler: () => {
          window.open("https://www.goodreads.com/user/show/108893112-nana-porter-honicky", "_blank");
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
