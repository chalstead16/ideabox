var ideas = [];

// ######### Query selectors #########
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaSection = document.querySelector('.idea-card-section');

// ######### Event listeners #########
saveButton.addEventListener('click', handleSaveClick);
ideaSection.addEventListener('click', handleStarClick);
ideaSection.addEventListener('click', handleDeleteClick);
saveButton.addEventListener('mouseover', saveButtonMouseover);
saveButton.addEventListener('mouseout', saveButtonMouseOut);
ideaSection.addEventListener('mouseover', deleteImgMouseOver);
ideaSection.addEventListener('mouseout', deleteImgMouseOut);

// ######### Event Handlers #########
function handleSaveClick() {
  if (titleInput.value && bodyInput.value) {
    saveNewIdea();
    updateDOM(ideas);
    disableHoverProperties(saveButton);
    clearInputs();
  }
}

function handleStarClick(event) {
  updateStarState(event);
  updateDOM(ideas);
}

function handleDeleteClick() {
  var cards = document.querySelectorAll('.cards')
    for (var i = 0; i < cards.length; i++) {
      if (event.target.classList.contains('red-delete') &&
      event.target.parentNode.parentNode.id === cards[i].id) {
        deleteIdeaFromDataModel();
        updateDOM(ideas);
    }
  }
}

// ######### Dynamic Functions #########
function saveNewIdea() {
  ideas.unshift(newIdeaInstance());
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function enableHoverProperties(element) {
  element.classList.remove('hover-properties-inactive');
  element.classList.add('hover-properties-active');
}

function disableHoverProperties(element) {
  element.classList.add('hover-properties-inactive');
  element.classList.remove('hover-properties-active');
}

function clearInputs() {
  titleInput.value = ``;
  bodyInput.value = ``;
}

// ######### Update DOM #########
function updateDOM(ideasList) {
  ideaSection.innerHTML = ``;
  for (var i = 0; i < ideasList.length; i++) {
      ideaSection.innerHTML += `
      <article class="cards" id="${ideasList[i].id}">
        <section class="card-top">
          <img class="white-star" id="star" src="${ideasList[i].starColor}" alt="starred-idea">
          <img class="red-delete hidden" src="./assets/delete-active.svg" alt="delete-option">
          <img class="white-delete" src="./assets/delete.svg" alt="delete-option">
        </section>
        <section class="card-body">
          <h3>${ideasList[i].title}</h3>
          <p>${ideasList[i].body}</p>
        </section>
        <section class="card-bottom">
          <img class="comment" src="./assets/comment.svg" alt="comment-option">
          <p>Comment</p>
        </section>
      </article>
      `
  }
}

// ######### Update Data Model #########
function newIdeaInstance() {
  var newIdea = new Idea({
    title: titleInput.value,
    body: bodyInput.value,
    starColor: "./assets/star.svg"
  });
  return newIdea;
}

function updateStarState(event) {
  var id = event.target.parentNode.parentNode.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === parseInt(id) && event.target.id === 'star') {
      ideas[i].updateIdea(id);
    }
  }
}

function deleteIdeaFromDataModel() {
  var id = event.target.parentNode.parentNode.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === parseInt(id)) {
      ideas.splice(i, 1)
    }
  }
}

// ######### Mouseover Functions #########
function saveButtonMouseover() {
  disableHoverProperties(saveButton);
  if (titleInput.value && bodyInput.value) {
    enableHoverProperties(saveButton);
  }
}

function saveButtonMouseOut() {
  if (!titleInput.value && !bodyInput.value) {
    enableHoverProperties(saveButton);
  }
  if(titleInput.value && bodyInput.value)
    disableHoverProperties();
}

function deleteImgMouseOver(event) {
  var cards = document.querySelectorAll('.cards')
  var redDelete = document.querySelectorAll('.red-delete')
  var whiteDelete = document.querySelectorAll('.white-delete')
  for (var i = 0; i < cards.length; i++) {
    if (event.target.classList.contains('white-delete') &&
    event.target.parentNode.parentNode.id === cards[i].id) {
      show(redDelete[i]);
      hide(whiteDelete[i]);
    }
  }
}

function deleteImgMouseOut(event) {
  var cards = document.querySelectorAll('.cards')
  var redDelete = document.querySelectorAll('.red-delete')
  var whiteDelete = document.querySelectorAll('.white-delete')
  for (var i = 0; i < cards.length; i++) {
    if (event.target.classList.contains('red-delete')) {
      show(whiteDelete[i]);
      hide(redDelete[i]);
    }
  }
}
