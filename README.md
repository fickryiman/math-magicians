# math-magicians
"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to:  Make simple calculations and Read a random math-related quote.

<!-- <a name="readme-top">The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service (https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3).</a> -->

<h1>Math Magicians</h1>

<!-- TABLE OF CONTENTS -->
# 📗 Table of Contents

- [math-magicians](#math-magicians)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Math Magicians](#-math-magicians)
    - [How to build the "Math Magicians" application?](#how-to-build-the-math-magicians-application)
    - [Projects list](#projects-list)
      - [Project 1: Setup.](#project-1-setup)
      - [Project 2: Components.](#project-2-components)
      - [Project 3: Events.](#project-3-events)
      - [Project 4: Fetch data from API.](#project-4-fetch-data-from-api)
      - [Project 5: Full website.](#project-5-full-website)
      - [Project 6: Tests (pair programming).](#project-6-tests-pair-programming)
      - [Deployment.](#deployment)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Tools i have used for this project ](#tools-i-have-used-for-this-project-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment-1)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->
# 📖 Math Magicians<a name="about-project"></a>
It is a Single Page App (SPA) that allows users to:  Make simple calculations and Read a random math-related quote.

<!-- > Describe your project in 1 or 2 sentences. -->
### How to build the "Math Magicians" application?
I will start by building the core functionality, which is a calculator. At the very beginning my website will contain only the simple UI presented below, but it will be able to perform all math operations.
<p align="center">
  <img src="./assets/calculator.png" alt="Calculator" width="300px" />
</p>

Once the calculator is ready I will use it as a part of a full website that includes 3 sub-pages:
<p align="center">
  <img src="./public/assets/math_magicians_home.png" alt="Core elements" width="450px"  />
  <img src="./public/assets/math_magicians_calculator.png" alt="Core elements" width="450px"  />
  <img src="./public/assets/math_magicians_quote.png" alt="Core elements" width="450px"  />
</p>

### Projects list
I will be building my "Math magicians" website for more than a whole week. Here is the list of projects that will guide me through the steps described above. I will find details about each of the project requirements in the upcoming program activities. In some of the projects (tests), I will be working collaboratively by using pair programming.

- Project 1: Setup.
- Project 2: Components.
- Project 3: Events.
- Project 4: Fetch data from API.
- Project 5: Full website.
- Project 6: Tests (pair programming).
- Deployment.

#### Project 1: Setup.
This is the first project of the Math Magicians application. I will set up the environment and tools needed to develop a React application. In the following projects, I will develop the actual application.

- Set-up linters on local environments.
- Used correct flow GitFlow.
- Documentation the project in a professional way on README file.
- First, make sure I have [Node.js](https://nodejs.org/en/) installed on my local machine
- The easiest way to create a React application is using [Create React App](https://create-react-app.dev/)
- The application should run in the browser without errors
#### Project 2: Components.
In this project, I should continue with the development of the Math Magicians app. I will develop a React component that will hold the core functionality: a calculator.

- Delete all the boilerplate from Create React App (text, images, styles).
- Create a new directory called components.
- Inside components, create a new Calculator.js file.
- In Calculator.js, create a React component that matches this design:
  <p align="center">
    <img src=".public/assets/calculator.png" alt="Calculator" width="300px" />
  </p>
- Implement the design only (JSX and CSS)- Develop just the UI of the calculator; the math logic to make it work will be added in the next project.
- Use functional components
- Create at least 1 child component
- Once the Calculator is ready, import it and use it in your top-level component: App.js
- Test it in the browser; it should render without problems.

#### Project 3: Events.
In this project, you will add the logic needed to make the Calculator component you developed in the previous project actually work.

- Create a new directory called logic inside your project
- Copy the files calculate.js and operate.js into my logic/ directory
- Install [big.js](https://www.npmjs.com/package/big.js) using NPM
- Analyze the files calculate.js and operate.js, be sure you understand what they do
- Import the files in your Calculator.js component
- Implement click event handlers using the math logic from calculate.js and operate.js in my React component
  - The goal is to make all calculator buttons work according to their functionality e.g. the - button should subtract a given value
- Test my app in the browser. The Calculator should be able to perform math operations.

#### Project 4: Fetch data from API.
In this project, I will fetch data from an external API to display "quotes" alongside your calculator.

- Use the following external API: [API Ninjas](https://api-ninjas.com/api/quotes)
- Create a new component for displaying a quote
- Fetch data inside of a new component
- Show a loading state
- Show an error state
- Import the new component into your main component (next to the Calculator)
  - It should be on the same page as the Calculator

#### Project 5: Full website.
In this project, I will create a full website for the Math magicians app, consisting of several pages and using the components already created.

- Create a website consisting of 3 pages: Home, Calculator, and Quote.
- The general layout should match these wireframes:
  <p align="center">
    <img src="./public/assets/math_magicians_home.png" alt="Core elements" width="450px"  />
    <img src="./public/assets/math_magicians_calculator.png" alt="Core elements" width="450px"  />
    <img src="./public/assets/math_magicians_quote.png" alt="Core elements" width="450px"  />
  </p>
- Add my own styles to improve the look and feel.
  - Use React basic styling (inline styles, importing CSS and pre-processed CSS files).
- For every page, I should create a <Route>.
- Make sure that navigation links for all 3 routes are displayed on each page.
- Use [React Router](https://reactrouter.com/) to make the routes work.

#### Project 6: Tests (pair programming).
In this project, you will write unit tests for the Math Magicians app, using the [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) libraries.

- Set up React Testing Library.
  - Follow the instructions in the official [documentation](https://testing-library.com/docs/react-testing-library/intro).
  - I don't need to setup Jest (it's included in Create React App).
  - Write unit tests for the files operate.js and calculate.js using Jest.
  - Create unit tests for all React components:
    - Use Jest snapshots to test the components.
    - Use React Testing Library to simulate user interaction.
  - Run my full tests suite using Jest. All tests should pass.
#### Deployment.
In this exercise, you will deploy the Math Magicians app to Render.

- Use [Render](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/deploy/lesson_deploy_render.md) to deploy the Math Magicians app.
- Add a link to the deployed application to the README file in your GitHub repo.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<!-- > Describe the tech stack and include only the relevant sections that apply to your project. -->
<details>
  <summary>Client Side / Front-End</summary>
  <ul>
    <li><a href="https://www.w3.org/html/">HTML</a></li>
    <li><a href="https://www.w3.org/Style/CSS/">CSS</a></li>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
    <li><a href="https://create-react-app.dev/">React</a></li>
    <li><a href="https://reactrouter.com/">React Router</a></li>
  </ul>
</details>

<details>
  <summary>Server Side / Back-End</summary>
  <ul>
    <li><a href="https://www.json.org/json-en.html">JSON</a></li>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://www.npmjs.com/package/big.js">big.js</a></li>
    <li><a href="https://api-ninjas.com/api/quotes">API Ninjas</a></li>
    <!-- <li><a href=""> - </a></li>
    <li><a href=""> - </a></li> -->
  </ul>
</details>

<details>
    <summary>Package, Library, Framework</summary>
      <ul>
        <li><a href="https://jestjs.io/">Jest</a></li>
      </ul>
  </details>

<!-- Features -->
### Tools i have used for this project <a name="tools"></a>
  <details>
    <summary>Code Convention, Code Analysis</summary>
      <ul>
        <li><a href="https://eslint.org/">ESLint</a></li>
        <li><a href="https://webhint.io/">Webhint</a></li>
        <li><a href="https://stylelint.io/">Stylelint</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en">Lighthouse</a></li>
        <li><a href="https://www.npmjs.com/package/npm-check">node_modules checker</a></li>
      </ul>
  </details>
  <details>
    <summary>Version Control, CI/CD, Hosting Service</summary>
      <ul>
        <li><a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">GitFlow</a></li>
        <li><a href="https://pages.github.com/">Github Pages</a></li>
        <li><a href="https://github.com/features/actions">Github Actions</a></li>
        <li><a href="https://git-scm.com/">Git</a></li>
      </ul>
  </details>
  <details>
    <summary>IDE, Desktop Apps, Other Tools</summary>
      <ul>
        <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
        <li><a href="https://desktop.github.com/">Github Desktop</a></li>
        <!-- <li><a href="https://www.figma.com/">Figma</a></li> -->
      </ul>
  </details>

### Key Features <a name="key-features"></a>

<!-- > Describe between 1-3 key features of the application. -->
- Make simple calculations.
- Read a random math-related quote.
- single page apps (SPA).


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->
## 🚀 Live Demo <a name=""></a>

<!-- > Add a link to your deployed project. -->
- Click the following url for [... Live Demo ...](https://fickryiman.github.io/math-magicians)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>

<!-- > Describe how a new developer could make use of your project. -->
To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- git version 2.38.x
- node.js version > 12.x
- IDE (visual studio code, etc)
- browser (chrome, firefox, edge, safari)

### Setup

Clone this repository to your desired folder:

```sh
  cd math-magicians
  git git@github.com:fickryiman/math-magicians.git
```


### Install

Install this project with:

```sh
  cd math-magicians
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run build (production environment)
  npm start (development environment)
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Run tests

To run tests, run the following command:
Run Github Actions Test
```sh
  npm test

  npx stylelint "**/*.{css,scss}"
  npx eslint "**/*.{js,jsx}"

  auto fix linter with --fix
  npx stylelint "**/*.{css,scss}" --fix
  npx eslint "**/*.{js,jsx}" --fix
```

### Deployment

You can deploy this project using:
GitHub Pages
Example:
```sh
https://fickryiman.github.io/math-magicians/
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->
## 👥 Authors <a name="authors"></a>

<!-- > Mention all of the collaborators of this project. -->

👤 **Fickry Bil Iman**

- GitHub: [@fickryiman](https://github.com/fickryiman)
- Facebook: [@fickry.bil.iman](https://www.facebook.com/fickry.bil.iman)
- LinkedIn: [fickry-bil-iman](https://www.linkedin.com/in/fickry-bil-iman)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->
## 🔭 Future Features <a name="future-features"></a>

<!-- > Describe 1 - 3 features you will add to the project. -->
- add login to user with social media auth or google auth
- create mobile version

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [https://github.com/fickryiman/math-magicians/issues](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->
## ⭐️ Show your support <a name="support"></a>

<!-- > Write a message to encourage readers to support your project -->

If you like this project please follow me on my GitHub: [@fickryiman](https://github.com/fickryiman) or connect on my LinkedIn: [@fickry-bil-iman](https://www.linkedin.com/in/fickry-bil-iman).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## 🙏 Acknowledgments <a name="acknowledgements"></a>

<!-- > Give credit to everyone who inspired your codebase. -->
First thing first, I would like to say Alhamdulillah, Thanks to my Families, Microverse and Micronaut's, Reviewer's, Thank you for all of the experiences, lesson and everythings.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

<!-- ## ❓ FAQ (OPTIONAL) <a name="faq"></a>

<!-- > Add at least 2 questions new developers would ask when they decide to use your project. -->

<!-- - **[Question_1]** -->

  <!-- - [Answer_1] -->

<!-- - **[Question_2]** -->

  <!-- - [Answer_2] -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->
## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<!-- Creative Commons License - Start -->
<!-- Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg -->
<!-- Creative Commons License - End -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>
