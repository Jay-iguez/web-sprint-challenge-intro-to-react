# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review.

You are not allowed to collaborate during the sprint challenge.

### Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not BloomTech's by mistake!)
- [ ] Install dependencies and use the "start" script to launch the app
- [ ] Implement the project on the main branch, committing changes regularly
- [ ] Push commits: `git push origin main`

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://github.com/bloominstituteoftechnology/web-sprint-challenge-intro-to-react/blob/main/Assets/sample-screenshot.png)

[Another example](https://github.com/bloominstituteoftechnology/web-sprint-challenge-intro-to-react/blob/main/Assets/sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people/` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw). It is not necessary to understand all that MSW is doing, it is only necessary to know that when you use axios to send a request to `https://swapi.dev/api/people/` you will get the necessary data back.
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any of the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films/` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [ ] Check Codegrade for automated feedback.

## Stretch Interview Questions

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the 
web.
React JS is a very large-open source library for web developers to utilze for large complex applications and small scale projects alike. It allows modularity with Components, what React essentially calls functions within JavaScript. You can customize these Components and use them in a stackable fashion that allows developers to build out websites in an efficient manner, and this results in easier to maintain codebases during needed changes from not just one but multiple developers at any given time. This means React essentially is an abstraction of the DOM - you are simply manipulating it when the app needs to.
1. Describe component state.
Component state is what said Component will use to track data between itself and it's children who it may pass it's state to. It is regarded as the "single source of truth". Invoking state means setting a tuple - a stateVariable and setStateVariable. It allows the Component to see what data changed within its state - and itself can change it using the setStateVariable in this case. Anytime state changes, it will cause a re-render of the Component - the beauty of it is you can create it such in a way with React where it will only re-render exactly what it needs to and nothing else.
1. Describe props.
Props in Components are that of data or input in which they recieve from their parent Components. You can use dot.notation or bracket.notation to recieve them in a child Component. They are the data in which the Component will act on and iterate over - and can even be used to pass state. Props is just an object with key/value pairs you assign to it depending on how you want to give/recieve a given props in a Component.
1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
Side effects in React are changes around  Component that are out of it's direct control, and to make use of these in order to properly render them to the Component we must use a useEffect hook. These will not render/be-invoked until the page is initialized. These are especially useful in regards to API calls and asynchronous code. You can render your component that will eventually rely on data outside of your program without it crashing or failing to load because said data hasn't reached the user's system yet.
