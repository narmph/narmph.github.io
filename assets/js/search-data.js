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
            },{id: "dropdown-shelf",
              title: "shelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/shelf/";
              },
            },{id: "post-my-first-blog-post",
        
          title: "my first blog post",
        
        description: "Hi!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first_post/";
          
        },
      },{id: "books-a-wizard-of-earthsea",
          title: 'A Wizard of Earthsea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/A-Wizard-of-Earthsea-(Earthsea-Cycle,-%231)/";
            },},{id: "books-abaddon-s-gate",
          title: 'Abaddon’s Gate',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Abaddon%E2%80%99s-Gate-(The-Expanse,-%233)/";
            },},{id: "books-artemis",
          title: 'Artemis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Artemis/";
            },},{id: "books-axiom-39-s-end",
          title: 'Axiom&amp;#39;s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Axiom's-End-(Noumena,-%231)/";
            },},{id: "books-babel",
          title: 'Babel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Babel/";
            },},{id: "books-berserk-volume-1",
          title: 'Berserk Volume 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Berserk-Volume-1/";
            },},{id: "books-binti",
          title: 'Binti',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Binti-(Binti,-%231)/";
            },},{id: "books-caliban-s-war",
          title: 'Caliban’s War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Caliban%E2%80%99s-War-(The-Expanse,-%232)/";
            },},{id: "books-catching-fire",
          title: 'Catching Fire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Catching-Fire-(The-Hunger-Games,-%232)/";
            },},{id: "books-cibola-burn",
          title: 'Cibola Burn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Cibola-Burn-(The-Expanse,-%234)/";
            },},{id: "books-city-of-thieves",
          title: 'City of Thieves',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/City-of-Thieves/";
            },},{id: "books-do-androids-dream-of-electric-sheep",
          title: 'Do Androids Dream of Electric Sheep?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Do-Androids-Dream-of-Electric-Sheep/";
            },},{id: "books-dune",
          title: 'Dune',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Dune-(Dune,-%231)/";
            },},{id: "books-ender-39-s-shadow",
          title: 'Ender&amp;#39;s Shadow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Ender's-Shadow-(The-Shadow-Series,-%231)/";
            },},{id: "books-ender-s-game",
          title: 'Ender’s Game',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Ender%E2%80%99s-Game-(Ender's-Saga,-%231)/";
            },},{id: "books-fables-vol-1",
          title: 'Fables, Vol. 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Fables,-Vol.-1-Legends-in-Exile/";
            },},{id: "books-fables-vol-2",
          title: 'Fables, Vol. 2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Fables,-Vol.-2-Animal-Farm/";
            },},{id: "books-fables-vol-3",
          title: 'Fables, Vol. 3',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Fables,-Vol.-3-Storybook-Love/";
            },},{id: "books-first-meetings-in-ender-39-s-universe",
          title: 'First Meetings in Ender&amp;#39;s Universe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/First-Meetings-in-Ender's-Universe-(Ender's-Saga,-%230.5)/";
            },},{id: "books-foundation",
          title: 'Foundation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Foundation-(Foundation,-%231)/";
            },},{id: "books-foundation-and-empire",
          title: 'Foundation and Empire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Foundation-and-Empire-(Foundation,-%232)/";
            },},{id: "books-home",
          title: 'Home',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Home-(Binti,-%232)/";
            },},{id: "books-jojo-39-s-bizarre-adventure-part-1-phantom-blood-vol-1",
          title: 'JoJo&amp;#39;s Bizarre Adventure, Part 1 — Phantom Blood, Vol. 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/JoJo's-Bizarre-Adventure,-Part-1-%E2%80%94-Phantom-Blood,-Vol.-1/";
            },},{id: "books-king-of-ithaca",
          title: 'King of Ithaca',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/King-of-Ithaca-(Adventures-of-Odysseus,-%231)/";
            },},{id: "books-leviathan-wakes",
          title: 'Leviathan Wakes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Leviathan-Wakes-(The-Expanse,-%231)/";
            },},{id: "books-life-of-pi",
          title: 'Life of Pi',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Life-of-Pi/";
            },},{id: "books-little-fires-everywhere",
          title: 'Little Fires Everywhere',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Little-Fires-Everywhere/";
            },},{id: "books-low-vol-1",
          title: 'Low, Vol. 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Low,-Vol.-1-The-Delirium-of-Hope/";
            },},{id: "books-mickey-7",
          title: 'Mickey 7',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Mickey-7-(Mickey7,-%231)/";
            },},{id: "books-nemesis-games",
          title: 'Nemesis Games',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Nemesis-Games-(The-Expanse,-%235)/";
            },},{id: "books-project-hail-mary",
          title: 'Project Hail Mary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Project-Hail-Mary/";
            },},{id: "books-redshirts",
          title: 'Redshirts',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Redshirts/";
            },},{id: "books-rosewater",
          title: 'Rosewater',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Rosewater-(The-Wormwood-Trilogy,-%231)/";
            },},{id: "books-saga-volume-1",
          title: 'Saga, Volume 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-1/";
            },},{id: "books-saga-volume-10",
          title: 'Saga, Volume 10',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-10/";
            },},{id: "books-saga-volume-2",
          title: 'Saga, Volume 2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-2/";
            },},{id: "books-saga-volume-3",
          title: 'Saga, Volume 3',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-3/";
            },},{id: "books-saga-volume-4",
          title: 'Saga, Volume 4',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-4/";
            },},{id: "books-saga-volume-5",
          title: 'Saga, Volume 5',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-5/";
            },},{id: "books-saga-volume-6",
          title: 'Saga, Volume 6',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-6/";
            },},{id: "books-saga-volume-7",
          title: 'Saga, Volume 7',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-7/";
            },},{id: "books-saga-volume-8",
          title: 'Saga, Volume 8',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-8/";
            },},{id: "books-saga-volume-9",
          title: 'Saga, Volume 9',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Saga,-Volume-9/";
            },},{id: "books-science-fictions",
          title: 'Science Fictions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Science-Fictions/";
            },},{id: "books-shadow-of-the-hegemon",
          title: 'Shadow of the Hegemon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Shadow-of-the-Hegemon-(The-Shadow-Series,-%232)/";
            },},{id: "books-spin",
          title: 'Spin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Spin-(Spin,-%231)/";
            },},{id: "books-stamped-racism-antiracism-and-you",
          title: 'Stamped- Racism, Antiracism, and You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Stamped-Racism,-Antiracism,-and-You/";
            },},{id: "books-stardust",
          title: 'Stardust',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Stardust/";
            },},{id: "books-starter-villain",
          title: 'Starter Villain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Starter-Villain/";
            },},{id: "books-stockholm-diaries-caroline",
          title: 'Stockholm Diaries, Caroline',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Stockholm-Diaries,-Caroline,-(The-Foreign-Fling-Duet-%231)/";
            },},{id: "books-tales-from-the-loop",
          title: 'Tales From the Loop',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Tales-From-the-Loop/";
            },},{id: "books-the-amber-spyglass",
          title: 'The Amber Spyglass',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Amber-Spyglass-(His-Dark-Materials,-%233)/";
            },},{id: "books-the-battle-of-the-labyrinth",
          title: 'The Battle of the Labyrinth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Battle-of-the-Labyrinth-(Percy-Jackson-and-the-Olympians,-%234)/";
            },},{id: "books-the-charm-offensive",
          title: 'The Charm Offensive',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Charm-Offensive-(The-Charm-Offensive,-%231)/";
            },},{id: "books-the-chronoliths",
          title: 'The Chronoliths',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Chronoliths/";
            },},{id: "books-the-fault-in-our-stars",
          title: 'The Fault in Our Stars',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Fault-in-Our-Stars/";
            },},{id: "books-the-giver",
          title: 'The Giver',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Giver-(The-Giver,-%231)/";
            },},{id: "books-the-golden-compass",
          title: 'The Golden Compass',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Golden-Compass-(His-Dark-Materials,-%231)/";
            },},{id: "books-the-great-gatsby",
          title: 'The Great Gatsby',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Great-Gatsby/";
            },},{id: "books-the-hobbit-or-there-and-back-again",
          title: 'The Hobbit, or There and Back Again',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Hobbit,-or-There-and-Back-Again/";
            },},{id: "books-the-hunger-games",
          title: 'The Hunger Games',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Hunger-Games-(The-Hunger-Games,-%231)/";
            },},{id: "books-the-inheritance-games",
          title: 'The Inheritance Games',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Inheritance-Games-(The-Inheritance-Games,-%231)/";
            },},{id: "books-the-kaiju-preservation-society",
          title: 'The Kaiju Preservation Society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Kaiju-Preservation-Society/";
            },},{id: "books-the-kiss-quotient",
          title: 'The Kiss Quotient',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Kiss-Quotient-(The-Kiss-Quotient,-%231)/";
            },},{id: "books-the-last-olympian",
          title: 'The Last Olympian',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Last-Olympian-(Percy-Jackson-and-the-Olympians,-%235)/";
            },},{id: "books-the-lightning-thief",
          title: 'The Lightning Thief',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Lightning-Thief-(Percy-Jackson-and-the-Olympians,-%231)/";
            },},{id: "books-the-lion-the-witch-and-the-wardrobe",
          title: 'The Lion, the Witch and the Wardrobe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Lion,-the-Witch-and-the-Wardrobe-(Chronicles-of-Narnia,-%231)/";
            },},{id: "books-the-man-in-the-high-castle",
          title: 'The Man in the High Castle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Man-in-the-High-Castle/";
            },},{id: "books-the-many-deaths-of-laila-starr",
          title: 'The Many Deaths of Laila Starr',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Many-Deaths-of-Laila-Starr/";
            },},{id: "books-the-martian",
          title: 'The Martian',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Martian/";
            },},{id: "books-the-midnight-library",
          title: 'The Midnight Library',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Midnight-Library/";
            },},{id: "books-the-new-jim-crow",
          title: 'The New Jim Crow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-New-Jim-Crow-Mass-Incarceration-in-the-Age-of-Colorblindness/";
            },},{id: "books-the-nice-house-on-the-lake-vol-1",
          title: 'The Nice House on the Lake, Vol. 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Nice-House-on-the-Lake,-Vol.-1/";
            },},{id: "books-the-nice-house-on-the-lake-vol-2",
          title: 'The Nice House on the Lake, Vol. 2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Nice-House-on-the-Lake,-Vol.-2/";
            },},{id: "books-the-perks-of-being-a-wallflower",
          title: 'The Perks of Being a Wallflower',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Perks-of-Being-a-Wallflower/";
            },},{id: "books-the-rosie-project",
          title: 'The Rosie Project',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Rosie-Project-(Don-Tillman,-%231)/";
            },},{id: "books-the-sea-of-monsters",
          title: 'The Sea of Monsters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Sea-of-Monsters-(Percy-Jackson-and-the-Olympians,-%232)/";
            },},{id: "books-the-subtle-knife",
          title: 'The Subtle Knife',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Subtle-Knife-(His-Dark-Materials,-%232)/";
            },},{id: "books-the-titan-s-curse",
          title: 'The Titan’s Curse',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Titan%E2%80%99s-Curse-(Percy-Jackson-and-the-Olympians,-%233)/";
            },},{id: "books-the-walking-dead-vol-1",
          title: 'The Walking Dead, Vol. 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Walking-Dead,-Vol.-1-Days-Gone-Bye/";
            },},{id: "books-the-wicked-the-divine-book-one",
          title: 'The Wicked + The Divine - Book One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Wicked-+-The-Divine-Book-One/";
            },},{id: "books-the-wicked-the-divine-book-three",
          title: 'The Wicked + The Divine - Book Three',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Wicked-+-The-Divine-Book-Three/";
            },},{id: "books-the-wicked-the-divine-book-two",
          title: 'The Wicked + The Divine - Book Two',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The-Wicked-+-The-Divine-Book-Two/";
            },},{id: "books-their-eyes-were-watching-god",
          title: 'Their Eyes Were Watching God',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Their-Eyes-Were-Watching-God/";
            },},{id: "books-watchmen",
          title: 'Watchmen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Watchmen/";
            },},{id: "books-yellowface",
          title: 'Yellowface',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Yellowface/";
            },},{id: "books-flowers-for-algernon",
          title: 'Flowers for Algernon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/flowers_for_algernon/";
            },},{id: "books-the-dispossessed",
          title: 'The Dispossessed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_dispossessed/";
            },},{id: "movies-sinners",
          title: 'Sinners',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/sinners/";
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
