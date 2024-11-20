// Random data arrays
const subjects = ["The universe", "Your future", "A mystery person", "Your lucky star"];
const actions = ["is aligning perfectly for you", "holds surprises", "will guide you", "is shining brightly"];
const advice = ["stay strong!", "be open to opportunities.", "embrace the unknown.", "trust the process."];

// Function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate a random message
const generateMessage = () => {
  const subject = getRandomElement(subjects);
  const action = getRandomElement(actions);
  const closingAdvice = getRandomElement(advice);
  
  return `${subject} ${action} Remember to ${closingAdvice}`;
};

// Output the random message
console.log(generateMessage());
