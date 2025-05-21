// Event propogation

// event passing to parent event


//Event Propogation

//Bubbling inner event working outside is known as bubbling
// if you dont want bubbling then dont tive true and add a method stoppropagation
// capturing is parent first and then child

document
  .querySelector('h3')
  .addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Heading 3 Clicked');
  });

document
  .getElementById('innerDiv')
  .addEventListener('click', () =>
    console.log('Inner Div Clicked'),//true
  );

document
  .getElementsByTagName('div')[0]
  .addEventListener('click', () =>
    console.log('Outer div Clicked'),//true
  );
document.body.addEventListener('click', () =>
  console.log('Body Clicked'),//true
);

