class Idea {
  constructor(idea) {
    this.id = Date.now();
    this.title = idea.title;
    this.body = idea.body;
    this.star = false;
  }
updateIdea() {
  if (!this.star) {
    this.star = true;
  } else {
    this.star = false;
    }
  }
}
