const data = {
  home: {
    _id: 0,
    heading: "SPACE",
    subheading: "SO, YOU WANT TO TRAVEL TO",
    desc: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
  },
  destination: {
    _id: 1,
    title: "Pick your destination",
    content: [
      {
        id: 1,
        name: "MOON",
        desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel_time: "3 days",
        imgUrl: "image-moon.webp",
      },
      {
        id: 2,
        name: "MARS",
        desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. km",
        travel_time: "9 months",
        imgUrl: "image-mars.webp",
      },
      {
        id: 3,
        name: "EUROPA",
        desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        travel_time: "3 years",
        imgUrl: "image-europa.webp",
      },
      {
        id: 4,
        name: "TITAN",
        desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        travel_time: "7 years",
        imgUrl: "image-titan.webp",
      },
    ],
  },
  crew: {
    _id: 2,
    title: "Meet your crew",
    content: [
      {
        id: 1,
        occupation: "Commander",
        name: "Douglas Hurley",
        desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        imgUrl: "image-douglas-hurley.webp",
      },
      {
        id: 2,
        occupation: "Mission Specialist ",
        name: "MARK SHUTTLEWORTH",
        desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        imgUrl: "image-mark-shuttleworth.webp",
      },
      {
        id: 3,
        occupation: "PILOT",
        name: "Victor Glover",
        desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        imgUrl: "image-victor-glover.webp",
      },
      {
        id: 4,
        occupation: "Flight Engineer",
        name: "Anousheh Ansari",
        desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        imgUrl: "image-anousheh-ansari.webp",
      },
    ],
  },
};

export default data;
