var ideas = [];

//Query selectors
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaSection = document.querySelector('.idea-card-section');

//Event listeners
saveButton.addEventListener('click', createIdeaCard);
saveButton.addEventListener('mouseover', saveButtonHover);
ideaSection.addEventListener('click', handleStarClick);
ideaSection.addEventListener('mouseover', deleteImgMouseOver);
ideaSection.addEventListener('mouseout', deleteImgMouseOut);
ideaSection.addEventListener('click', deleteIdea);

//Functions
function newIdeaInstance() {
  var newIdea = new Idea({title: titleInput.value, body: bodyInput.value});
  return newIdea;
};

function saveNewIdea() {
  ideas.unshift(newIdeaInstance());
};

function clearInputs() {
  titleInput.value = ``;
  bodyInput.value = ``;
}

function newIdeaCard() {
  ideaSection.innerHTML = ``;
  for (var i = 0; i < ideas.length; i++) {
    if (!ideas[i].star) {
      ideaSection.innerHTML += `
      <article class="cards" id="${ideas[i].id}">
      <section class="card-top">
      <img class="white-star" src="./assets/star.svg" alt="starred-idea">
      <img class="red-delete hidden" src="./assets/delete-active.svg" alt="delete-option">
      <img class="white-delete" src="./assets/delete.svg" alt="delete-option">
      </section>
      <section class="card-body">
      <h3>${ideas[i].title}</h3>
      <p>${ideas[i].body}</p>
      </section>
      <section class="card-bottom">
      <img class="comment" src="./assets/comment.svg" alt="comment-option">
      <p>Comment</p>
      </section>
      </article>
      `
    }
    if (ideas[i].star) {
      ideaSection.innerHTML += `
      <article class="cards" id="${ideas[i].id}">
      <section class="card-top">
      <img class="red-star" src="./assets/star-active.svg" alt="starred-idea">
      <img class="red-delete hidden" src="./assets/delete-active.svg" alt="delete-option">
      <img class="white-delete" src="./assets/delete.svg" alt="delete-option">
      </section>
      <section class="card-body">
      <h3>${ideas[i].title}</h3>
      <p>${ideas[i].body}</p>
      </section>
      <section class="card-bottom">
      <img class="comment" src="./assets/comment.svg" alt="comment-option">
      <p>Comment</p>
      </section>
      </article>
      `
    }
  };
  clearInputs();
};

function saveButtonHover() {
  if (titleInput.value && bodyInput.value) {
    enableHoverProperties(saveButton);
  }
}

function enableHoverProperties(element) {
  element.classList.add('hover-properties');
}

function disableHoverProperties(element) {
  element.classList.remove('hover-properties');
}

function createIdeaCard() {
  if (titleInput.value && bodyInput.value) {
    saveNewIdea();
    newIdeaCard();
    disableHoverProperties(saveButton);
  }
}

function updateStarState() {
  var id = event.target.parentNode.parentNode.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === parseInt(id)) {
      ideas[i].updateIdea();
    }
  }
}

function handleStarClick(event) {
  updateStarState();
  newIdeaCard();
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
  var redDelete = document.querySelectorAll('.red-delete')
  var whiteDelete = document.querySelectorAll('.white-delete')
    for (var i = 0; i < cards.length; i++) {
      if (event.target.classList.contains('red-delete') && event.target.parentNode.parentNode.id === cards[i].id) {
        deleteIdeaFromDataModel();
        newIdeaCard();
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
