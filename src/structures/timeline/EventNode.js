class EventNode extends TimelineNode {}

// Initializing a class
class Hero {
  constructor(name, level) {
    this.name = name
    this.level = level
  }

  // Adding a method to the constructor
  greet() {
    return `${this.name} says hello.`
  }
}

// Creating a new class from the parent
class Mage extends Hero {
  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level)

    // Add a new property
    this.spell = spell
  }
}
