// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu-open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// STEP1-BEGIN
function menuMaker(arr) {
  const menu = document.createElement('div').classList.add("menu");
  const unorderedList = document.createElement('ul');
  // STEP1-END

  menu.appendChild(unorderedList);

  // STEP2-BEGIN
  arr.forEach(item => {
    const orderedList = document.createElement('li').textContent = item;
    unorderedList.appendChild(orderedList);
  });
  // STEP2-END

  // STEP3-BEGIN
  const menuButton = document.querySelector('.menu-button');
  // STEP3-END

  // STEP4-BEGIN
  menuButton.addEventListener('click', (event) => {
    menu.classList.toggle("menu-open");
  });
  // STEP4-END

  return menu;
}

// appending all children to the 'master' div won't display anything until the 'master' div is appended to document, correct?
new header = document.body.querySelector('.header').appendChild(menuMaker(menuItems)); // one-liner to add menuItems array to 'header' DOM