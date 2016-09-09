// Table class
var SummariesTable = function (table) {
  this.table = table;
  this.angularSummary = "AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly. It automatically synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data binding. To help you structure your application better and make it easy to test, AngularJS teaches the browser how to do dependency injection and inversion of control. It also helps with server-side communication, taming async callbacks with promises and deferreds, and it makes client-side navigation and deeplinking with hashbang urls or HTML5 pushState a piece of cake. Best of all? It makes development fun!";
  this.emberSummary = "Ember.js is a Javascript framework that greatly reduces the time, effort and resources needed to build any web application. It is focused on making you, the developer, as productive as possible by doing all the common, repetitive, yet essential, tasks involved in most web development projects.Ember.js also provides access to the most advanced features of Javascript, HTML and the Browser giving you everything you need to create your next killer web app.";
  this.reactSummary = "React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug. Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.";
  this.vueSummary = "Vue.js is a library for building interactive web interfaces. It provides data-reactive components with a simple and flexible API. Core features include: 1. Dead simple, unobtrusive reactivity using plain JavaScript objects. 2. Component-oriented development style with tooling support. 3. Lean and extensible core. 4. Flexible transition effect system. 5. Flexible transition effect system. 6. Fast without the need for complex optimization.";
};

// Wow this is pathetic. Will for sure refactor. Unbelievable
SummariesTable.prototype.fillContent = function(framework) {
  if (framework == 'angular') {
    this.table.children[0].children[1].children[1].innerHTML = this.angularSummary;
    this.table.children[0].children[1].children[1].style.background = 'pink';
    this.table.children[0].children[1].children[0].style.background = 'pink';
    this.table.children[0].children[1].children[0].children[0].style.background = 'pink';
    this.table.children[0].children[2].children[0].style.background = 'lightblue';
    this.table.children[0].children[2].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[3].children[0].style.background = 'lightblue';
    this.table.children[0].children[3].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[4].children[0].style.background = 'lightblue';
    this.table.children[0].children[4].children[0].children[0].style.background = 'lightblue';
  };
  if (framework == 'ember') {
    this.table.children[0].children[1].children[1].innerHTML = this.emberSummary;
    this.table.children[0].children[1].children[1].style.background = 'lightgrey';
    this.table.children[0].children[2].children[0].style.background = 'lightgrey';
    this.table.children[0].children[2].children[0].children[0].style.background = 'lightgrey';
    this.table.children[0].children[1].children[0].style.background = 'lightblue';
    this.table.children[0].children[1].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[3].children[0].style.background = 'lightblue';
    this.table.children[0].children[3].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[4].children[0].style.background = 'lightblue';
    this.table.children[0].children[4].children[0].children[0].style.background = 'lightblue';
  };
  if (framework == 'react') {
    this.table.children[0].children[1].children[1].innerHTML = this.reactSummary;
    this.table.children[0].children[1].children[1].style.background = 'white';
    this.table.children[0].children[3].children[0].style.background = 'white';
    this.table.children[0].children[3].children[0].children[0].style.background = 'white';
    this.table.children[0].children[1].children[0].style.background = 'lightblue';
    this.table.children[0].children[1].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[2].children[0].style.background = 'lightblue';
    this.table.children[0].children[2].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[4].children[0].style.background = 'lightblue';
    this.table.children[0].children[4].children[0].children[0].style.background = 'lightblue';
  };
  if (framework == 'vue') {
    this.table.children[0].children[1].children[1].innerHTML = this.vueSummary;
    this.table.children[0].children[1].children[1].style.background = 'lightgreen';
    this.table.children[0].children[4].children[0].style.background = 'lightgreen';
    this.table.children[0].children[4].children[0].children[0].style.background = 'lightgreen';
    this.table.children[0].children[1].children[0].style.background = 'lightblue';
    this.table.children[0].children[1].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[2].children[0].style.background = 'lightblue';
    this.table.children[0].children[2].children[0].children[0].style.background = 'lightblue';
    this.table.children[0].children[3].children[0].style.background = 'lightblue';
    this.table.children[0].children[3].children[0].children[0].style.background = 'lightblue';
  };
};

