Improving code readability and maintainability - GitHub Docs

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

# Improving code readability and maintainability

Copilot Chat can suggest ways to make your code easier to understand and maintain.

Copy as Markdown

## In this article

Code with poor readability is difficult for other developers to maintain and extend. Copilot Chat can help in a number of ways. For example, by:

-   [Suggesting improvements to variable names](#improving-variable-names)
-   [Avoiding sequential conditional checks](#avoiding-sequential-conditional-checks)
-   [Reducing nested logic](#reducing-nested-logic)
-   [Splitting large methods into smaller, more readable ones](#splitting-up-large-methods)

Documenting your code is another way to improve the maintainability of your code. For information about using Copilot Chat to help you add useful comments to your code, see the example prompts in [Documenting code](/en/copilot/copilot-chat-cookbook/documenting-code).

Note

The responses shown in this article are examples. Copilot Chat responses are non-deterministic, so you may get different responses from the ones shown here.

## [Improving variable names](#improving-variable-names)

Descriptive variable names and parameter names make it easier to understand their purpose.

### [Example scenario](#example-scenario)

This JavaScript code logs a message about a person's age to the console. The abstract parameter names make it difficult to understand the purpose of the code.

```javascript
function logPersonsAge(a, b, c) {
  if (c) {
    console.log(a + " is " + b + " years old.");
  } else {
    console.log(a + " does not want to reveal their age.");
  }
}
```

### [Example prompt](#example-prompt)

In the editor, select the function you want to change, then ask Copilot Chat:

Copilot prompt[](https://github.com/copilot?prompt=function%20logPersonsAge\(a%2C%20b%2C%20c\)%20%7B%0A%20%20if%20\(c\)%20%7B%0A%20%20%20%20console.log\(a%20%2B%20%22%20is%20%22%20%2B%20b%20%2B%20%22%20years%20old.%22\)%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log\(a%20%2B%20%22%20does%20not%20want%20to%20reveal%20their%20age.%22\)%3B%0A%20%20%7D%0A%7D%0A%0AImprove%20the%20variable%20names%20in%20this%20function)

Improve the variable names in this function

function logPersonsAge(a, b, c) {
  if (c) {
    console.log(a + " is " + b + " years old.");
  } else {
    console.log(a + " does not want to reveal their age.");
  }
}

Improve the variable names in this function

```copilot
Improve the variable names in this function
```

### [Example response](#example-response)

Copilot suggests descriptive variable names.

```javascript
function logPersonAge(name, age, revealAge) {
  if (revealAge) {
    console.log(name + " is " + age + " years old.");
  } else {
    console.log(name + " does not want to reveal their age.");
  }
}
```

## [Avoiding sequential conditional checks](#avoiding-sequential-conditional-checks)

`if...else` chains can be difficult to read, especially when they are long.

### [Example scenario](#example-scenario-1)

This Python code prints the sound that various animals make, if defined, or "Unknown animal" if the animal type is not recognized. However, the chain of `if...else` statements makes the code inefficient and cumbersome.

```python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Bird(Animal):
    def speak(self):
        return "Tweet!"

def animal_sound(animal_type):
    if animal_type == "dog":
        return Dog().speak()
    elif animal_type == "cat":
        return Cat().speak()
    elif animal_type == "bird":
        return Bird().speak()
    else:
        return "Unknown animal"

print(animal_sound("dog"))
print(animal_sound("cat"))
print(animal_sound("bird"))
print(animal_sound("fish"))
```

### [Example prompt](#example-prompt-1)

Copilot prompt[](https://github.com/copilot?prompt=class%20Animal%3A%0A%20%20%20%20def%20speak\(self\)%3A%0A%20%20%20%20%20%20%20%20pass%0A%0Aclass%20Dog\(Animal\)%3A%0A%20%20%20%20def%20speak\(self\)%3A%0A%20%20%20%20%20%20%20%20return%20%22Woof!%22%0A%0Aclass%20Cat\(Animal\)%3A%0A%20%20%20%20def%20speak\(self\)%3A%0A%20%20%20%20%20%20%20%20return%20%22Meow!%22%0A%0Aclass%20Bird\(Animal\)%3A%0A%20%20%20%20def%20speak\(self\)%3A%0A%20%20%20%20%20%20%20%20return%20%22Tweet!%22%0A%0Adef%20animal_sound\(animal_type\)%3A%0A%20%20%20%20if%20animal_type%20%3D%3D%20%22dog%22%3A%0A%20%20%20%20%20%20%20%20return%20Dog\(\).speak\(\)%0A%20%20%20%20elif%20animal_type%20%3D%3D%20%22cat%22%3A%0A%20%20%20%20%20%20%20%20return%20Cat\(\).speak\(\)%0A%20%20%20%20elif%20animal_type%20%3D%3D%20%22bird%22%3A%0A%20%20%20%20%20%20%20%20return%20Bird\(\).speak\(\)%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20%22Unknown%20animal%22%0A%0Aprint\(animal_sound\(%22dog%22\)\)%0Aprint\(animal_sound\(%22cat%22\)\)%0Aprint\(animal_sound\(%22bird%22\)\)%0Aprint\(animal_sound\(%22fish%22\)\)%0A%0ASimplify%20this%20code.%20Avoid%20using%20if%2Felse%20chains%20but%20retain%20all%20function%20return%20values.)

Simplify this code. Avoid using if/else chains but retain all function return values.

class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Bird(Animal):
    def speak(self):
        return "Tweet!"

def animal\_sound(animal\_type):
    if animal\_type == "dog":
        return Dog().speak()
    elif animal\_type == "cat":
        return Cat().speak()
    elif animal\_type == "bird":
        return Bird().speak()
    else:
        return "Unknown animal"

print(animal\_sound("dog"))
print(animal\_sound("cat"))
print(animal\_sound("bird"))
print(animal\_sound("fish"))

Simplify this code. Avoid using if/else chains but retain all function return values.

```copilot
Simplify this code. Avoid using if/else chains but retain all function return values.
```

### [Example response](#example-response-1)

Copilot suggests using a dictionary to map the animal types to their corresponding classes.

```python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Bird(Animal):
    def speak(self):
        return "Tweet!"

def animal_sound(animal_type):
    animals = {
        "dog": Dog,
        "cat": Cat,
        "bird": Bird
    }
    animal_class = animals.get(animal_type, Animal)
    return animal_class().speak() if animal_class != Animal else "Unknown animal"

print(animal_sound("dog"))
print(animal_sound("cat"))
print(animal_sound("bird"))
print(animal_sound("fish"))
```

## [Reducing nested logic](#reducing-nested-logic)

Deeply nested structures can make the code hard to follow, making it difficult to modify or extend the logic of the code in future.

### [Example scenario](#example-scenario-2)

This Ruby code prints information about a user account based on three parameters. The use of nested `if...else` statements makes the code unnecessarily complex.

```ruby
def determine_access(user_role, has_permission, is_active)
  if user_role == "admin"
    if has_permission
      if is_active
        "Active admin account with full access."
      else
        "Inactive admin account."
      end
    else
      "Admin account lacks necessary permissions."
    end
  else
    "Access denied."
  end
end

puts determine_access("admin", true, true)
puts determine_access("admin", true, false)
puts determine_access("admin", false, true)
puts determine_access("user", true, true)
```

### [Example prompt](#example-prompt-2)

Copilot prompt[](https://github.com/copilot?prompt=def%20determine_access\(user_role%2C%20has_permission%2C%20is_active\)%0A%20%20if%20user_role%20%3D%3D%20%22admin%22%0A%20%20%20%20if%20has_permission%0A%20%20%20%20%20%20if%20is_active%0A%20%20%20%20%20%20%20%20%22Active%20admin%20account%20with%20full%20access.%22%0A%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%22Inactive%20admin%20account.%22%0A%20%20%20%20%20%20end%0A%20%20%20%20else%0A%20%20%20%20%20%20%22Admin%20account%20lacks%20necessary%20permissions.%22%0A%20%20%20%20end%0A%20%20else%0A%20%20%20%20%22Access%20denied.%22%0A%20%20end%0Aend%0A%0Aputs%20determine_access\(%22admin%22%2C%20true%2C%20true\)%0Aputs%20determine_access\(%22admin%22%2C%20true%2C%20false\)%0Aputs%20determine_access\(%22admin%22%2C%20false%2C%20true\)%0Aputs%20determine_access\(%22user%22%2C%20true%2C%20true\)%0A%0ARewrite%20this%20code%20to%20avoid%20the%20nested%20if%2Felse%20statements)

Rewrite this code to avoid the nested if/else statements

def determine\_access(user\_role, has\_permission, is\_active)
  if user\_role == "admin"
    if has\_permission
      if is\_active
        "Active admin account with full access."
      else
        "Inactive admin account."
      end
    else
      "Admin account lacks necessary permissions."
    end
  else
    "Access denied."
  end
end

puts determine\_access("admin", true, true)
puts determine\_access("admin", true, false)
puts determine\_access("admin", false, true)
puts determine\_access("user", true, true)

Rewrite this code to avoid the nested if/else statements

```copilot
Rewrite this code to avoid the nested if/else statements
```

### [Example response](#example-response-2)

Copilot suggests using guard clauses to handle the conditions early and return the appropriate messages.

```ruby
def determine_access(user_role, has_permission, is_active)
  return "Access denied." unless user_role == "admin"
  return "Admin account lacks necessary permissions." unless has_permission
  return "Inactive admin account." unless is_active

  "Active admin account with full access."
end

puts determine_access("admin", true, true)
puts determine_access("admin", true, false)
puts determine_access("admin", false, true)
puts determine_access("user", true, true)
```

## [Splitting up large methods](#splitting-up-large-methods)

It can be difficult to grasp exactly what a method or function does if it is too long, making it difficult to maintain. Methods or functions that perform multiple tasks may not be reusable in other contexts. It may also be difficult to test each task in isolation.

### [Example scenario](#example-scenario-3)

This Java method processes a customer order and prints a message. It performs multiple tasks in a single method.

```java
public void processOrder(Order order) {
  if (order == null || order.getItems().isEmpty()) {
    throw new IllegalArgumentException("Order is invalid.");
  }

  double totalPrice = 0.0;
  for (Item item : order.getItems()) {
    totalPrice += item.getPrice() * item.getQuantity();
  }
  order.setTotalPrice(totalPrice);

  if (totalPrice > 0) {
    order.setStatus("Processed");
  } else {
    order.setStatus("Pending");
  }

  System.out.println("Order for customer " + order.getCustomerName() + " has been processed. Total price: " + totalPrice);
}
```

### [Example prompt](#example-prompt-3)

Copilot prompt[](https://github.com/copilot?prompt=public%20void%20processOrder\(Order%20order\)%20%7B%0A%20%20if%20\(order%20%3D%3D%20null%20%7C%7C%20order.getItems\(\).isEmpty\(\)\)%20%7B%0A%20%20%20%20throw%20new%20IllegalArgumentException\(%22Order%20is%20invalid.%22\)%3B%0A%20%20%7D%0A%0A%20%20double%20totalPrice%20%3D%200.0%3B%0A%20%20for%20\(Item%20item%20%3A%20order.getItems\(\)\)%20%7B%0A%20%20%20%20totalPrice%20%2B%3D%20item.getPrice\(\)%20*%20item.getQuantity\(\)%3B%0A%20%20%7D%0A%20%20order.setTotalPrice\(totalPrice\)%3B%0A%0A%20%20if%20\(totalPrice%20%3E%200\)%20%7B%0A%20%20%20%20order.setStatus\(%22Processed%22\)%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20order.setStatus\(%22Pending%22\)%3B%0A%20%20%7D%0A%0A%20%20System.out.println\(%22Order%20for%20customer%20%22%20%2B%20order.getCustomerName\(\)%20%2B%20%22%20has%20been%20processed.%20Total%20price%3A%20%22%20%2B%20totalPrice\)%3B%0A%7D%0A%0AHow%20could%20the%20processOrder%20method%20be%20refactored%20to%20be%20more%20useful%20and%20easier%20to%20maintain)

How could the processOrder method be refactored to be more useful and easier to maintain

public void processOrder(Order order) {
  if (order == null || order.getItems().isEmpty()) {
    throw new IllegalArgumentException("Order is invalid.");
  }

  double totalPrice = 0.0;
  for (Item item : order.getItems()) {
    totalPrice += item.getPrice() \* item.getQuantity();
  }
  order.setTotalPrice(totalPrice);

  if (totalPrice > 0) {
    order.setStatus("Processed");
  } else {
    order.setStatus("Pending");
  }

  System.out.println("Order for customer " + order.getCustomerName() + " has been processed. Total price: " + totalPrice);
}

How could the processOrder method be refactored to be more useful and easier to maintain

```copilot
How could the processOrder method be refactored to be more useful and easier to maintain
```

### [Example response](#example-response-3)

Copilot suggests breaking this method down into smaller, more focused methods.

```java
public void processOrder(Order order) {
    validateOrder(order);
    double totalPrice = calculateTotalPrice(order);
    updateOrderStatus(order, totalPrice);
    printOrderSummary(order, totalPrice);
}

private void validateOrder(Order order) {
    if (order == null || order.getItems().isEmpty()) {
        throw new IllegalArgumentException("Order is invalid.");
    }
}

private double calculateTotalPrice(Order order) {
    double totalPrice = 0.0;
    for (Item item : order.getItems()) {
        totalPrice += item.getPrice() * item.getQuantity();
    }
    order.setTotalPrice(totalPrice);
    return totalPrice;
}

private void updateOrderStatus(Order order, double totalPrice) {
    if (totalPrice > 0) {
        order.setStatus("Processed");
    } else {
        order.setStatus("Pending");
    }
}

private void printOrderSummary(Order order, double totalPrice) {
    System.out.println("Order for customer " + order.getCustomerName() + " has been processed. Total price: " + totalPrice);
}
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)