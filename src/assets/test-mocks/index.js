const mockImages = [
  "/static/media/fall-guys__16x9.8866dadbb9071f384f6d.webp",
  "/static/media/fall-guys__1x1.8c95fe0d8b13880c0ff1.webp",
  "/static/media/final-fantasy-xvi__16x9.f1a0216ac3b925d6c8cb.jpeg",
  "/static/media/final-fantasy-xvi__1x1.8886c867f3c5af0affb7.webp",
  "/static/media/gran-turismo-7__16x9.8b9f0df25c22c64a8c06.webp",
  "/static/media/gran-turismo-7__1x1.cb0caa07c25dd2829669.webp",
  "/static/media/hogwarts-legacy__16x9.c54f9610220d36888c34.webp",
  "/static/media/hogwarts-legacy__1x1.b138da4857ed463b6c4e.webp",
  "/static/media/hotline-miami__16x9.0edb32be495900cf845f.webp",
  "/static/media/hotline-miami__1x1.5813fc3054b9bf9ca1b5.webp",
  "/static/media/megaman-11__16x9.f212d0f05d02f647552e.webp",
  "/static/media/megaman-11__1x1.9fe92c89eb3ae10c3bfe.webp",
  "/static/media/metal-gear-solid__16x9.24a3cdebde57e420f820.webp",
  "/static/media/metal-gear-solid__1x1.1fdbe8960a033161646a.jpeg",
  "/static/media/resident-evil-4__16x9.664a0b3a92ab06ae5018.webp",
  "/static/media/resident-evil-4__1x1.8c5ebe47917cacb917f5.webp",
  "/static/media/spiderman-2__16x9.8f42fcdee638d6a15854.webp",
  "/static/media/spiderman-2__1x1.f1745cf6a580d31995f5.webp"
];

const mockWeekImages = [
  "fall-guys__16x9",
  "fall-guys__1x1",
  "final-fantasy-xvi__16x9",
  "final-fantasy-xvi__1x1",
  "gran-turismo-7__16x9",
  "gran-turismo-7__1x1",
  "hogwarts-legacy__16x9",
  "hogwarts-legacy__1x1",
  "hotline-miami__16x9",
  "hotline-miami__1x1",
  "megaman-11__16x9",
  "megaman-11__1x1",
  "metal-gear-solid__16x9",
  "metal-gear-solid__1x1",
  "resident-evil-4__16x9",
  "resident-evil-4__1x1",
  "spiderman-2__16x9",
  "spiderman-2__1x1"
];

const mockGames = [
  {
    "id": "939705715c6b3898dd3da5",
    "dom": 1,
    "launchDate": "2023-14-29T21:32:46.879Z",
    "title": "Metal Gear Solidv: The Phantom Pain",
    "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
    "imageFilenameThumb": "metal-gear-solid__1x1",
    "imageFilenameFull": "metal-gear-solid__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
    "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
  },
  {
    "id": "18213007415c6b3aceb83604",
    "dom": 2,
    "launchDate": "2024-09-13T09:01:30.152Z",
    "title": "Gran Turismo 7",
    "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
    "imageFilenameThumb": "gran-turismo-7__1x1",
    "imageFilenameFull": "gran-turismo-7__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
    "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
  },
  {
    "id": "1785476915c6b3a21620b48",
    "dom": 3,
    "launchDate": "2023-01-31T19:45:11.811Z",
    "title": "Megaman 11",
    "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
    "imageFilenameThumb": "megaman-11__1x1",
    "imageFilenameFull": "megaman-11__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
    "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
  },
  {
    "id": "2143690395c6b39ea9621c0",
    "dom": 4,
    "launchDate": "2023-07-18T04:21:17.875Z",
    "title": "Hotline Miami",
    "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
    "imageFilenameThumb": "hotline-miami__1x1",
    "imageFilenameFull": "hotline-miami__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
    "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now"
  },
  {
    "id": "2025599465c6b3a81c11541",
    "dom": 5,
    "launchDate": "2023-06-11T15:21:14.503Z",
    "title": "Resident Evil 4",
    "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
    "imageFilenameThumb": "resident-evil-4__1x1",
    "imageFilenameFull": "resident-evil-4__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
    "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
  },
  {
    "id": "4692393625c6b390c959715",
    "dom": 6,
    "launchDate": "2023-03-19T00:29:27.528Z",
    "title": "Spiderman 2",
    "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
    "imageFilenameThumb": "spiderman-2__1x1",
    "imageFilenameFull": "spiderman-2__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
    "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
  },
  {
    "id": "6418261375c6b39f9246ff9",
    "dom": 7,
    "launchDate": "2023-03-05T02:50:49.950Z",
    "title": "Final Fantasy XVI",
    "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
    "imageFilenameThumb": "final-fantasy-xvi__1x1",
    "imageFilenameFull": "final-fantasy-xvi__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
    "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now"
  },
  {
    "id": "6615829505c6b38b4e30e47",
    "dom": 8,
    "launchDate": "2023-06-19T10:14:52.687Z",
    "title": "Hogwarts Legacy",
    "summary": "Experience Hogwarts in the late 1800s and decide the fate of the wizarding world.",
    "imageFilenameThumb": "hogwarts-legacy__1x1",
    "imageFilenameFull": "hogwarts-legacy__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/",
    "purchaseLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/#buy-now"
  },
  {
    "id": "7060050195c6b3a514f7358",
    "dom": 9,
    "launchDate": "2023-06-20T14:36:38.034Z",
    "title": "Fall Guys",
    "summary": "Stumble towards greatness.<br>Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
    "imageFilenameThumb": "fall-guys__1x1",
    "imageFilenameFull": "fall-guys__16x9",
    "learnMoreLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
    "purchaseLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now"
  }
];

const mockWeeks = [
  [
    {
      "dom": 1
    },
    {
      "id": "7060050195c6b3a514f7358",
      "launchDate": "2023-06-20T14:36:38.034Z",
      "title": "Fall Guys",
      "summary": "Stumble towards greatness.<br>Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
      "imageFilenameThumb": "fall-guys__1x1",
      "imageFilenameFull": "fall-guys__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
      "purchaseLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now",
      "dom": 2
    },
    {
      "dom": 3
    },
    {
      "dom": 4
    },
    {
      "dom": 5
    },
    {
      "dom": 6
    },
    {
      "id": "1785476915c6b3a21620b48",
      "launchDate": "2023-01-31T19:45:11.811Z",
      "title": "Megaman 11",
      "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
      "imageFilenameThumb": "megaman-11__1x1",
      "imageFilenameFull": "megaman-11__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
      "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now",
      "dom": 7
    }
  ],
  [
    {
      "dom": 8
    },
    {
      "dom": 9
    },
    {
      "dom": 10
    },
    {
      "dom": 11
    },
    {
      "dom": 12
    },
    {
      "dom": 13
    },
    {
      "id": "6615829505c6b38b4e30e47",
      "launchDate": "2023-06-19T10:14:52.687Z",
      "title": "Hogwarts Legacy",
      "summary": "Experience Hogwarts in the late 1800s and decide the fate of the wizarding world.",
      "imageFilenameThumb": "hogwarts-legacy__1x1",
      "imageFilenameFull": "hogwarts-legacy__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/",
      "purchaseLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/#buy-now",
      "dom": 14
    }
  ],
  [
    {
      "dom": 15
    },
    {
      "dom": 16
    },
    {
      "id": "2025599465c6b3a81c11541",
      "launchDate": "2023-06-11T15:21:14.503Z",
      "title": "Resident Evil 4",
      "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
      "imageFilenameThumb": "resident-evil-4__1x1",
      "imageFilenameFull": "resident-evil-4__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
      "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now",
      "dom": 17
    },
    {
      "dom": 18
    },
    {
      "dom": 19
    },
    {
      "dom": 20
    },
    {
      "dom": 21
    }
  ],
  [
    {
      "dom": 22
    },
    {
      "id": "1785476915c6b3a21620b48",
      "launchDate": "2023-01-31T19:45:11.811Z",
      "title": "Megaman 11",
      "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
      "imageFilenameThumb": "megaman-11__1x1",
      "imageFilenameFull": "megaman-11__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
      "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now",
      "dom": 23
    },
    {
      "id": "4692393625c6b390c959715",
      "launchDate": "2023-03-19T00:29:27.528Z",
      "title": "Spiderman 2",
      "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
      "imageFilenameThumb": "spiderman-2__1x1",
      "imageFilenameFull": "spiderman-2__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
      "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now",
      "dom": 24
    },
    {
      "id": "939705715c6b3898dd3da5",
      "launchDate": "2023-14-29T21:32:46.879Z",
      "title": "Metal Gear Solidv: The Phantom Pain",
      "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
      "imageFilenameThumb": "metal-gear-solid__1x1",
      "imageFilenameFull": "metal-gear-solid__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
      "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now",
      "dom": 25
    },
    {
      "id": "1785476915c6b3a21620b48",
      "launchDate": "2023-01-31T19:45:11.811Z",
      "title": "Megaman 11",
      "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
      "imageFilenameThumb": "megaman-11__1x1",
      "imageFilenameFull": "megaman-11__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
      "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now",
      "dom": 26
    },
    {
      "dom": 27
    },
    {
      "dom": 28
    }
  ],
  [
    {
      "id": "6418261375c6b39f9246ff9",
      "launchDate": "2023-03-05T02:50:49.950Z",
      "title": "Final Fantasy XVI",
      "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
      "imageFilenameThumb": "final-fantasy-xvi__1x1",
      "imageFilenameFull": "final-fantasy-xvi__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
      "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now",
      "dom": 29
    },
    {
      "id": "2025599465c6b3a81c11541",
      "launchDate": "2023-06-11T15:21:14.503Z",
      "title": "Resident Evil 4",
      "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
      "imageFilenameThumb": "resident-evil-4__1x1",
      "imageFilenameFull": "resident-evil-4__16x9",
      "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
      "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now",
      "dom": 30
    },
    {
      "dom": 31
    }
  ]
];


export { mockGames, mockImages, mockWeekImages, mockWeeks };
