var ideas = [];

//Query selectors
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');

//Event listeners
saveButton.addEventListener('click', saveNewIdea);

function createNewIdea() {
  var newIdea = new Idea({title: titleInput.value, body: bodyInput.value});
  return newIdea;
};

function saveNewIdea() {
  ideas.push(createNewIdea());
};
