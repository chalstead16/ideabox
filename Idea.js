class Idea {
  constructor(idea) {
    this.id = Date.now();
    this.title = idea.title;
    this.body = idea.body;
    this.star = false;
    this.starColor = idea.starColor
  }
  updateIdea(cardId) {
    for (var i = 0; i < ideas.length; i++) {
      if (ideas[i].id === parseInt(cardId) && ideas[i].star) {
        ideas[i].star = false;
        ideas[i].starColor = "./assets/star.svg"
      } else if (ideas[i].id === parseInt(cardId) && !ideas[i].star) {
        ideas[i].starColor = "./assets/star-active.svg"
        ideas[i].star = true;
      }
    }
  }
}
