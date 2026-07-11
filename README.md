  # Interactive Task Manager

An interactive task management application built with JavaScript, HTML, and Bootstrap. The project demonstrates how a larger frontend application can be developed by composing many small, focused functions with clear responsibilities rather than relying on one large script.

The application allows users to create, edit, complete, delete, search, and filter tasks while keeping the interface responsive through DOM manipulation and event-driven programming.

## Project Objectives

* Build a complete frontend application using JavaScript.
* Practice manipulating the DOM dynamically.
* Organize application logic into reusable helper functions.
* Implement event-driven user interactions.
* Apply accessibility best practices using semantic HTML and ARIA.
* Learn how professional frontend applications separate initialization, business logic, and event handling.

## Learning Outcomes

This project provides practical experience with:

* DOM selection and traversal
* Dynamic element creation
* Event listeners and event delegation
* Form handling and input validation
* Checkbox interactions
* Inline editing using `contentEditable`
* Keyboard event handling
* Live searching
* Dynamic filtering
* Application initialization with `DOMContentLoaded`
* Helper function abstraction and modular design
* Accessible interface development

## Features

* Add new tasks
* Prevent empty task submissions
* Mark tasks as complete
* Delete tasks
* Edit tasks inline using double-click
* Finish editing with **Enter** or by moving focus away
* Live search while typing
* Filter tasks by:

  * All
  * Active
  * Completed
* Automatically update task statistics
* Fully keyboard-operable interface

## Technologies

* HTML5
* JavaScript (ES6+)
* Bootstrap 5 (CDN)

## Project Structure


InteractiveTaskManager/
├── index.html
├── script.js
├── README.md
└── .gitignore


The JavaScript is organized into four logical categories:

* **Helper Functions** – Create UI elements and update application state.
* **Event Handlers** – Respond to user interactions.
* **Setup Functions** – Register event listeners.
* **Initialization** – Bootstraps the application once the DOM has loaded.

## Running the Project

github page: [Interactive Task Manager]

## Accessibility

Accessibility is treated as part of the application's design rather than an afterthought.

The project includes:

* Semantic HTML elements (`main`, `section`, `form`, `button`, `ul`)
* Properly associated form labels
* Native checkbox controls
* Keyboard-accessible interactions
* `aria-live="polite"` regions for automatically announcing statistics updates
* Focus management after adding tasks
* Keyboard support for inline task editing

These features improve usability for keyboard users and people using assistive technologies, including screen readers.

## Educational Focus

Rather than emphasizing framework usage, this project focuses on core frontend development concepts and clean application architecture. Each feature builds upon previously implemented helper functions, encouraging incremental development, testing, debugging, and code reuse—an approach commonly used in professional JavaScript applications.
