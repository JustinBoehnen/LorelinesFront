const uuidv4 = require('uuid/v4')

export default class TimelineNode {
  _id = uuidv4()
  _content = ''
  _pos = { x: 0, y: 0 }

  get id() {
    return this._id
  }

  set id(value) {
    this._id = value
  }

  get content() {
    return this._content
  }

  set content(value) {
    this._content = value
  }

  get pos() {
    return this._pos
  }

  set pos(value) {
    this._pos = value
  }
}

/*
class EventNode extends TimelineNode {
  constructor(id, content, pos, before, after) {
    super(id, content, pos)

    this.spell = spell
  }
}

class BranchNode extends TimelineNode {
  constructor(id, content, pos) {
    super(id, content, pos)

    // Add a new property
    this.spell = spell
  }
}
*/
