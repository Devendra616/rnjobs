# React Native Job Board

An application in React Native to search Job listings near your area. User will go to map and get his location where to search. It will trigger API search for jobs in that location. User can then apply for jobs, from the search list based on description.
Technologies used : 

 - Firebase (database and authentication)
 - Twilio (send OTP message)
 - Map
 - Navigation		

## Screens


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```