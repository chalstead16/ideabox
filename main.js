var ideas = [];

//Query selectors
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaSection = document.querySelector('.idea-card-section');

//Event listeners
saveButton.addEventListener('click', createIdeaCard);
saveButton.addEventListener('mouseover', saveButtonMouseover);
saveButton.addEventListener('mouseout', saveButtonMouseOut);
ideaSection.addEventListener('click', handleStarClick);
ideaSection.addEventListener('mouseover', deleteImgMouseOver);
ideaSection.addEventListener('mouseout', deleteImgMouseOut);
ideaSection.addEventListener('click', deleteIdea);

//Functions
function newIdeaInstance() {
  var newIdea = new Idea({title: titleInput.value, body: bodyInput.value, starColor: "./assets/star.svg"});
  return newIdea;
}

function saveNewIdea() {
  ideas.unshift(newIdeaInstance());
}

function clearInputs() {
  titleInput.value = ``;
  bodyInput.value = ``;
}

function newIdeaCard(ideasList) {
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
    clearInputs();
    // if (ideas[i].star) {
    //   ideaSection.innerHTML += `
    //   <article class="cards" id="${ideas[i].id}">
    //   <section class="card-top">
    //   <img class="red-star" id="star" src="./assets/star-active.svg" alt="starred-idea">
    //   <img class="red-delete hidden" src="./assets/delete-active.svg" alt="delete-option">
    //   <img class="white-delete" src="./assets/delete.svg" alt="delete-option">
    //   </section>
    //   <section class="card-body">
    //   <h3>${ideas[i].title}</h3>
    //   <p>${ideas[i].body}</p>
    //   </section>
    //   <section class="card-bottom">
    //   <img class="comment" src="./assets/comment.svg" alt="comment-option">
    //   <p>Comment</p>
    //   </section>
    //   </article>
    //   `
    // }

}

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


function enableHoverProperties(element) {
  element.classList.remove('hover-properties-inactive');
  element.classList.add('hover-properties-active');
}

function disableHoverProperties(element) {
  element.classList.add('hover-properties-inactive');
  element.classList.remove('hover-properties-active');
}

function createIdeaCard() {
  if (titleInput.value && bodyInput.value) {
    saveNewIdea();
    newIdeaCard(ideas);
    disableHoverProperties(saveButton);
  }
}

function updateStarState(event) {
  var id = event.target.parentNode.parentNode.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === parseInt(id) && event.target.id === 'star') {
      ideas[i].updateIdea(id);
    }
  }
}

function handleStarClick(event) {
  updateStarState(event);
  newIdeaCard(ideas);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}


function deleteIdeaFromDataModel() {
  var id = event.target.parentNode.parentNode.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === parseInt(id)) {
      ideas.splice(i, 1)
    }
  }
}

function deleteIdea() {
  var cards = document.querySelectorAll('.cards')
    for (var i = 0; i < cards.length; i++) {
      if (event.target.classList.contains('red-delete') && event.target.parentNode.parentNode.id === cards[i].id) {
        deleteIdeaFromDataModel();
        newIdeaCard(ideas);
    }
  }
}

function deleteImgMouseOver(event) {
  var cards = document.querySelectorAll('.cards')
  var redDelete = document.querySelectorAll('.red-delete')
  var whiteDelete = document.querySelectorAll('.white-delete')
  for (var i = 0; i < cards.length; i++) {
    if (event.target.classList.contains('white-delete') && event.target.parentNode.parentNode.id === cards[i].id) {
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
