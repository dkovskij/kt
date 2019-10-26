export default class Todo {
  constructor(id, completed, created_at, text ) {
    this.id = id
    this.completed = completed
    this.created_at = {}
    this.created_at.seconds = created_at
    this.text = text
  }
}
