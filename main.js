var ideas = [];

//Query selectors
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var commentSection = document.querySelector('.comment-section');

//Event listeners
saveButton.addEventListener('click', saveNewIdea);
saveButton.addEventListener('click', newIdeaCard);

function createNewIdea() {
  var newIdea = new Idea({title: titleInput.value, body: bodyInput.value});
  return newIdea;
};

function saveNewIdea() {
  ideas.unshift(createNewIdea());
};

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
};
