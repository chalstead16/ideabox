var ideas = [];

//Query selectors
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var commentSection = document.querySelector('.comment-section');

//Event listeners
saveButton.addEventListener('click', createIdeaCard);
saveButton.addEventListener('mouseover', saveButtonHover);

function newIdeaInstance() {
  var newIdea = new Idea({title: titleInput.value, body: bodyInput.value});
  return newIdea;
};

function saveNewIdea() {
  ideas.unshift(newIdeaInstance());
};

function clearTitleInput() {
  titleInput.value = ``;
}

function clearBodyInput() {
  bodyInput.value = ``;
}

function newIdeaCard() {
  commentSection.innerHTML = ``;

  for (var i = 0; i < ideas.length; i++) {
    commentSection.innerHTML += `
    <article>
      <section class="card-top">
        <img class="star hidden" src="./assets/star-active.svg" alt="starred-idea">
        <img class="star-inactive" src="./assets/star.svg" alt="starred-idea">
        <img class="delete-inactive hidden" src="./assets/delete-active.svg" alt="delete-option">
        <img class="delete" src="./assets/delete.svg" alt="delete-option">
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
  };
  clearTitleInput();
  clearBodyInput();
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
