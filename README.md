# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

In typescript enum is stands for enumerations. Enums dedfines a srt of named constants. Enums make our code more readable, intent to clearer and meaningful name for numeric or string values. 
Typescript enums are numeric and its value starts from 0 and increment automatically.

### Example of enums:

```
  enum Days {
    Satureday,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thusday,
    Friday
  }

  let holiday = Days.Friday;
  console.log(move)  // Output: Friday

  ```
Even we can assign values manually to enums:

### Numeric enums:
```
  enum PieGravity {
    pie = 3.14,
    gravity = 9.81,
  }
```

### String enums:
```
  enum Address {
    City = "Dhaka"
    Country = "Bangladesh"
  }
```




# Provide an example of using union and intersection types in TypeScript.

**Uninon:** In typescript a Union type (|) allows a variable to be a multiple types.

Example: 

  ```
    type Employee_id = string | number;

    function Employee_id(Employee_id: string | number) {
      console.log(`ID: ${Employee_id}`);
    }

    Employee_id(3252);
    Employee_id('WD-3252');

  ```
    


**Intersaction:** In typescript an Intersaction type (&) is a combination of mulitiple types into one type. To get output it must be satisfy all the types.

Example: 

  ```
    type Name = { name: string };
    type Age = { age: number };
    type LoveTypescript = { loveTypescript: boolean };

    type Person = Name & Age & LoveTypescript;

    const myself: Person = {
      name: "Asaduzzaman Sohun",
      age: 89,
      loveTypescript: true,
    }

    console.log(myself);

  ```
    

