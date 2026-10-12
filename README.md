# Task Management Dashboard - Assignment 4

A Dynamic Task Dashboard built with vanilla JavaScript. Tasks are loaded asynchronously from a simulated server, rendered to the DOM, and can be toggled or deleted using DOM events and immutable updates.

## File Organization

```text
assignment4/
├── index.html       # The main DOM structure and entry point
├── styles.css       # Minimal styling for the dashboard UI
├── taskManager.js   # Contains the Task and TaskManager classes (handles immutability)
├── api.js           # Simulates the asynchronous server fetch request
├── main.js          # Handles DOM manipulation, event listeners, and async orchestration
└── README.md        # Project documentation
```

## Challenges Faced

* **Integration & Time Constraints:** Combining HTML, CSS, and JavaScript together effectively in such a short timeframe was my initial and biggest challenge.
* **Immutability:** Instead of mutating arrays directly, using the spread operator (`...`), `.map()`, and `.filter()` to work on copies required a different logical approach.
* **Strict DOM API Rules:** Since `innerHTML` was not allowed, clearing the list with a `removeChild` loop and appending elements one by one with `appendChild` felt restrictive at first.
* **Scope Management:** Setting up the event listeners for dynamically created buttons without causing reference errors to the `TaskManager` instance (`board`) required careful structuring.
* **Specific JSON Requirement:** Converting the fetched raw data using `JSON.stringify` and then immediately parsing it with `JSON.parse` before creating instances was an unusual step to integrate into the async flow.
* **Git Management:** Maintaining the required meaningful commits while fixing a commit message locally with `--amend` and pushing it with `--force` was a practical technical challenge.