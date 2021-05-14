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




const childify = (array, newArray = []) => {

  //make sure we actually have items to loop over
  if(array.length > 0) {
    const item = array.shift();

    //if it doesnt have a parent just set the item in the top level
    if(item.parent === null ) {
      newArray[item.id] = item;

    } else if(item.parent) {

      //if it is a parent we'll set it as a child of it's parent
      //.children array already exists
      if(newArray[item.parent].children) {
        newArray[item.parent].children[item.id] =item;
      } else {

        //.children array doesn't exist
        newArray[item.parent].children = [];
        newArray[item.parent].children[item.id] = item;
      }
    }
  } else {
    //if there are no more items in the array to loop over we can return the final array we've created.

    //using IDs as index creates empty indices
    newArray = newArray.filter((i)=>{
      if(i.children) {
        //using IDs as index creates empty indices
        i.children = i.children.filter((i)=>{return i !== null});
      }
      return i !== null
    });

    //return our array
    return newArray;
  }

  //keep looping if we have more items in array
  return childify(array, newArray);
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
console.log();
