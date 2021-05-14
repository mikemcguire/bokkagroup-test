const flatArray = [
  {
    id: 1,
    title: 'Homepage',
    link: 'http://domain.com/',
    parent: null,
  },
  {
    id: 2,
    title: 'About Us',
    link: 'http://domain.com/about-us',
    parent: null,
  },
  {
    id: 3,
    title: 'Contact Us',
    link: 'http://domain.com/contact-us',
    parent: null,
  },
  {
    id: 4,
    title: 'Our Homes',
    link: 'http://domain.com/our-homes',
    parent: null,
  },
  {
    id: 5,
    title: 'Floorplans',
    link: 'http://domain.com/contact-us',
    parent: 4,
  },
  {
    id: 6,
    title: 'Quick Move-in',
    link: 'http://domain.com/quick-move-in',
    parent: 4,
  },
  {
    id: 7,
    title: 'Model Homes',
    link: 'http://domain.com/model-homes',
    parent: 4,
  },
  {
    id: 8,
    title: 'Our Team',
    link: 'http://domain.com/our-team',
    parent: 2,
  },
  {
    id: 9,
    title: 'Our Process',
    link: 'http://domain.com/our-process',
    parent: 2,
  },
];




const childify = (array) => {
}


/***
 * Final array (what childify turns flatArray into)
 */
const finalArray = [
  {
    id: 1,
    title: "Homepage",
    link: "http://domain.com/",
    parent: null
  },
  {
    id: 2,
    title: "About Us",
    link: "http://domain.com/about-us",
    parent: null,
    children: [
      {
        id: 8,
        title: "Our Team",
        link: "http://domain.com/our-team",
        parent: 2
      },
      {
        id: 9,
        title: "Our Process",
        link: "http://domain.com/our-process",
        parent: 2
      }
    ]
  },
  {
    id: 3,
    title: "Contact Us",
    link: "http://domain.com/contact-us",
    parent: null
  },
  {
    id: 4,
    title: "Our Homes",
    link: "http://domain.com/our-homes",
    parent: null,
    children: [
      {
        id: 5,
        title: "Floorplans",
        link: "http://domain.com/contact-us",
        parent: 4
      },
      {
        id: 6,
        title: "Quick Move-in",
        link: "http://domain.com/quick-move-in",
        parent: 4
      },
      {
        id: 7,
        title: "Model Homes",
        link: "http://domain.com/model-homes",
        parent: 4
      }
    ]
  }
];

const element = document.getElementById("display");
//our test to see if we've accomplished
if(JSON.stringify(childify(flatArray)) == JSON.stringify(finalArray)) {
  element.innerHTML="Both arrays are the same! Great job!";
  element.style.backgroundColor = "#00ff00";
} else {
  element.innerHTML="Something isn't right here, check your code and try again.";
  element.style.backgroundColor = "#ff0000";
}
