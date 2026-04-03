Simplifying complex inheritance hierarchies - GitHub Docs

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

# Simplifying complex inheritance hierarchies

Copilot Chat can help you to refactor code to avoid classes with multiple layers of inheritance.

Copy as Markdown

## In this article

Deep inheritance hierarchies, or improper use of inheritance, can lead to code that is hard to maintain, making it difficult to follow relationships between classes, or to extend them without causing breakage.

Copilot Chat can suggest refactoring inheritance-based designs into more flexible composition-based designs (favoring composition over inheritance). It can also recommend applying patterns like Strategy or Decorator to make the system more extensible without adding complexity to the inheritance structure.

## [Example scenario](#example-scenario)

The following C# code has a deep inheritance hierarchy where each class builds on the previous one. The result is a long chain of inheritance that makes it difficult to know what properties each class has.

A multi-level inheritance hierarchy like this can be difficult to understand, modify, and extend.

```csharp
public class Employee
{
    public string Name { get; set; }
    public int EmployeeID { get; set; }
}

public class Manager : Employee
{
    public int NumberOfTeams { get; set; }
}

public class SeniorManager : Manager
{
    public string Region { get; set; }
}

public class Director : SeniorManager
{
    public int NumberOfDepartments { get; set; }
}

public class VicePresident : Director
{
    public string Division { get; set; }
}

public class President : VicePresident
{
    public string Company { get; set; }
}
```

## [Example prompt](#example-prompt)

In this situation you might decide to use a parent `Employee` class whose properties other classes should inherit, but to avoid any other inheritance by defining all other properties separately for each class.

Copilot prompt[](https://github.com/copilot?prompt=public%20class%20Employee%0A%7B%0A%20%20%20%20public%20string%20Name%20%7B%20get%3B%20set%3B%20%7D%0A%20%20%20%20public%20int%20EmployeeID%20%7B%20get%3B%20set%3B%20%7D%0A%7D%0A%0Apublic%20class%20Manager%20%3A%20Employee%0A%7B%0A%20%20%20%20public%20int%20NumberOfTeams%20%7B%20get%3B%20set%3B%20%7D%0A%7D%0A%0Apublic%20class%20SeniorManager%20%3A%20Manager%0A%7B%0A%20%20%20%20public%20string%20Region%20%7B%20get%3B%20set%3B%20%7D%0A%7D%0A%0Apublic%20class%20Director%20%3A%20SeniorManager%0A%7B%0A%20%20%20%20public%20int%20NumberOfDepartments%20%7B%20get%3B%20set%3B%20%7D%0A%7D%0A%0Apublic%20class%20VicePresident%20%3A%20Director%0A%7B%0A%20%20%20%20public%20string%20Division%20%7B%20get%3B%20set%3B%20%7D%0A%7D%0A%0Apublic%20class%20President%20%3A%20VicePresident%0A%7B%0A%20%20%20%20public%20string%20Company%20%7B%20get%3B%20set%3B%20%7D%0A%7D%0A%0ARefactor%20this%20code%20so%20that%20classes%20only%20inherit%20the%20properties%20of%20the%20Employee%20class.%20All%20of%20the%20other%20properties%20that%20each%20class%20currently%20inherits%20should%20instead%20be%20declared%20independently%20in%20each%20class%20definition.)

Refactor this code so that classes only inherit the properties of the Employee class. All of the other properties that each class currently inherits should instead be declared independently in each class definition.

public class Employee
{
    public string Name { get; set; }
    public int EmployeeID { get; set; }
}

public class Manager : Employee
{
    public int NumberOfTeams { get; set; }
}

public class SeniorManager : Manager
{
    public string Region { get; set; }
}

public class Director : SeniorManager
{
    public int NumberOfDepartments { get; set; }
}

public class VicePresident : Director
{
    public string Division { get; set; }
}

public class President : VicePresident
{
    public string Company { get; set; }
}

Refactor this code so that classes only inherit the properties of the Employee class. All of the other properties that each class currently inherits should instead be declared independently in each class definition.

```copilot
Refactor this code so that classes only inherit the properties of the Employee class. All of the other properties that each class currently inherits should instead be declared independently in each class definition.
```

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot suggests the following code:

```csharp
public class Employee
{
    public string Name { get; set; }
    public int EmployeeID { get; set; }
}

public class Manager : Employee
{
    public int NumberOfTeams { get; set; }
}

public class SeniorManager : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
}

public class Director : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
    public int NumberOfDepartments { get; set; }
}

public class VicePresident : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
    public int NumberOfDepartments { get; set; }
    public string Division { get; set; }
}

public class President : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
    public int NumberOfDepartments { get; set; }
    public string Division { get; set; }
    public string Company { get; set; }
}
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)