Refactoring to implement a design pattern - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Refactoring to implement a design pattern

Copilot Chat can suggest design patterns that you can use to improve your code.

Copy as Markdown

## In this article

Code that doesn’t follow established design patterns (like Singleton, Factory, or Observer) can lead to issues like tight coupling, lack of flexibility, or duplicated code.

Copilot Chat can help you use appropriate design patterns to make your code more flexible and maintainable. For example, it can recommend converting repetitive instantiations into a Factory pattern, or using the Observer pattern to decouple tightly connected classes.

Note

The responses described in this article are examples. Copilot Chat responses are non-deterministic, so you may get different responses from the ones shown here.

## [Example scenario](#example-scenario)

This JavaScript code creates three `Person` objects, each with `name` and `age` properties. It then uses the name of a person to retrieve and print their age.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var people = {};

function addPerson(name, age) {
  people[name] = new Person(name, age);
}

function getAge(name) {
  if (people[name]) {
    console.log(name + " is " + people[name].age + " years old.");
  } else {
    console.log("Person not found.");
  }
}

addPerson("Ana", 30);
addPerson("Mario", 25);
addPerson("Louise", 40);

getAge("Mario");
```

## [Example prompt 1](#example-prompt-1)

Copilot prompt[](https://github.com/copilot?prompt=class%20Person%20%7B%0A%20%20constructor\(name%2C%20age\)%20%7B%0A%20%20%20%20this.name%20%3D%20name%3B%0A%20%20%20%20this.age%20%3D%20age%3B%0A%20%20%7D%0A%7D%0A%0Avar%20people%20%3D%20%7B%7D%3B%0A%0Afunction%20addPerson\(name%2C%20age\)%20%7B%0A%20%20people%5Bname%5D%20%3D%20new%20Person\(name%2C%20age\)%3B%0A%7D%0A%0Afunction%20getAge\(name\)%20%7B%0A%20%20if%20\(people%5Bname%5D\)%20%7B%0A%20%20%20%20console.log\(name%20%2B%20%22%20is%20%22%20%2B%20people%5Bname%5D.age%20%2B%20%22%20years%20old.%22\)%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log\(%22Person%20not%20found.%22\)%3B%0A%20%20%7D%0A%7D%0A%0AaddPerson\(%22Ana%22%2C%2030\)%3B%0AaddPerson\(%22Mario%22%2C%2025\)%3B%0AaddPerson\(%22Louise%22%2C%2040\)%3B%0A%0AgetAge\(%22Mario%22\)%3B%0A%0AWhat%20design%20patterns%20could%20improve%20this%20code%3F%20Don't%20show%20me%20code%20examples.)

What design patterns could improve this code? Don't show me code examples.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var people = {};

function addPerson(name, age) {
  people\[name\] = new Person(name, age);
}

function getAge(name) {
  if (people\[name\]) {
    console.log(name + " is " + people\[name\].age + " years old.");
  } else {
    console.log("Person not found.");
  }
}

addPerson("Ana", 30);
addPerson("Mario", 25);
addPerson("Louise", 40);

getAge("Mario");

What design patterns could improve this code? Don't show me code examples.

```copilot
What design patterns could improve this code? Don't show me code examples.
```

## [Example response 1](#example-response-1)

Copilot suggests the following patterns:

-   **Singleton pattern:** to ensure that there is only one instance of the `people` object.
-   **Factory pattern:** to create a factory for creating `Person` objects.
-   **Module pattern:** to encapsulate the `people` object and related functions within a module to avoid polluting the global namespace.

## [Example prompt 2](#example-prompt-2)

You can now ask Copilot to implement the pattern that you feel is most appropriate.

Copilot prompt[](https://github.com/copilot?prompt=class%20Person%20%7B%0A%20%20constructor\(name%2C%20age\)%20%7B%0A%20%20%20%20this.name%20%3D%20name%3B%0A%20%20%20%20this.age%20%3D%20age%3B%0A%20%20%7D%0A%7D%0A%0Avar%20people%20%3D%20%7B%7D%3B%0A%0Afunction%20addPerson\(name%2C%20age\)%20%7B%0A%20%20people%5Bname%5D%20%3D%20new%20Person\(name%2C%20age\)%3B%0A%7D%0A%0Afunction%20getAge\(name\)%20%7B%0A%20%20if%20\(people%5Bname%5D\)%20%7B%0A%20%20%20%20console.log\(name%20%2B%20%22%20is%20%22%20%2B%20people%5Bname%5D.age%20%2B%20%22%20years%20old.%22\)%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log\(%22Person%20not%20found.%22\)%3B%0A%20%20%7D%0A%7D%0A%0AaddPerson\(%22Ana%22%2C%2030\)%3B%0AaddPerson\(%22Mario%22%2C%2025\)%3B%0AaddPerson\(%22Louise%22%2C%2040\)%3B%0A%0AgetAge\(%22Mario%22\)%3B%0A%0ARefactor%20this%20code%20using%20the%20module%20pattern)

Refactor this code using the module pattern

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var people = {};

function addPerson(name, age) {
  people\[name\] = new Person(name, age);
}

function getAge(name) {
  if (people\[name\]) {
    console.log(name + " is " + people\[name\].age + " years old.");
  } else {
    console.log("Person not found.");
  }
}

addPerson("Ana", 30);
addPerson("Mario", 25);
addPerson("Louise", 40);

getAge("Mario");

Refactor this code using the module pattern

```copilot
Refactor this code using the module pattern
```

## [Example response 2](#example-response-2)

```javascript
const PersonModule = (function() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const people = {};

  function addPerson(name, age) {
    people[name] = new Person(name, age);
  }

  function getAge(name) {
    if (people[name]) {
      console.log(name + " is " + people[name].age + " years old.");
    } else {
      console.log("Person not found.");
    }
  }

  return {
    addPerson,
    getAge
  };
})();

PersonModule.addPerson("Ana", 30);
PersonModule.addPerson("Mario", 25);
PersonModule.addPerson("Louise", 40);

PersonModule.getAge("Mario");
```

The module pattern improves code organization, enhances data privacy, and reduces the risk of naming conflicts, making the code more maintainable and scalable.

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)