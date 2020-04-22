export default {
  //(Please Do Not Remove The comma(,) after every variable)
  name: 'eliot nguyen',
  headerTagline: [
    //Line 1 For Header
    'hi, i am eliot',
    //Line 2 For second set of string
    'a software engineer'
  ],
  //Contact Email
  contactEmail: 'ibeeliot@gmail.com',
  // github
  github: 'www.github.com/ibeeliot',
  // linkined
  linkedIn: 'www.linkedin.com/in/ibeeliot',
  // this is for your personal information
  abouttext: `Engineering a more intuitive world has always been my calling card. Coming from a UI/UX background, I knew the importance of good design. This can be seen in my most recent work ReactType - an open source developer tool to quickly mock up React components.\n
  `,
  abouttextpersonal: `I'm a big fan of getting things done the right way the first time. Black is my favorite color. I love a good dad joke.`,
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false
  // if true, then show image. if not true, don't
  aboutImage: 'https://i.postimg.cc/85X7YpD4/blk-whte-profile.png',
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS -> ID needs to be kept here
      title: 'ReacType', //Project Title
      service: 'React prototyping tool for fast development', // Add Your Service Type Here
      //Project Image - taken screen shot from reacType
      imageSrc: 'https://i.postimg.cc/wjb00h1b/Application-Tree-new.png',
      //Project URL - added link to OSL
      url: 'https://github.com/open-source-labs/ReacType'
    },
    {
      id: 2,
      title: 'Fireside',
      service: 'Plan for a better camping experience',
      imageSrc: 'https://i.postimg.cc/76dgrTWZ/fireside-wallpaper.jpg',
      url: 'https://github.com/Fireside-App/Fireside'
    },
    {
      id: 3,
      title: 'Find',
      service: 'A phone app to play Jackbox.tv games during quarantine',
      imageSrc: 'https://i.postimg.cc/3RwtFs0M/jackboxtv.jpg',
      url: 'https://github.com/findgaming/find'
    },
    {
      id: 4,
      title: 'Travel Sticky',
      service: 'Leave travel notes for those following your footsteps',
      imageSrc: 'https://i.postimg.cc/RVj5T6JT/Travel-Sticky.jpg',
      url: 'https://github.com/ibeeliot/TravelSticky'
    }

    /*
                   Update the ID and keep the same format

                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ]
  // social: [
  //   // Add Or Remove The Link Accordingly
  //   { name: 'Github', url: 'https://github.com/ibeeliot' },
  //   {
  //     name: 'LinkedIn',
  //     url: 'https://www.linkedin.com/in/ibeeliot'
  //   }
  // ]
};
