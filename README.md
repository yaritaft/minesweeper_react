# Table of Contents
### Author
Yari Ivan Taft

https://github.com/yaritaft/

### Decisions
#### Features

- Account registry
- Login
- Create new games
- Save and Resume games
- Time tracking
- Minesweeper game
- Operators flag, question and click
#### Technology

Typescript was selected because of its interoperability with backend and frontend and its safety regarding stacic type checks. As frontend libray React was used, because it is the most popular frontend library and it has a huge community and documentation.

#### Deployment

The deployment was done in Github Pages. It has a hack for supporting browser routing, and that is why it has some delay.

### How to deploy
Create a .env file by copy and pasting .envdevcopy file content. Use the testing variable.
```
npm run deploy
```
### Code formatter and Standards

- ESLint
- Typescript
- Prettier

### Lessons learnt
- Github pages does not support browser router. The solution is to apply the hack from this repo: https://github.com/yaritaft/spa-github-pages . Another good options is to use Netlify or Vercel.
- Adding homepage in package json modifies the reacts root path. And that addition is stored in an env var called PUBLIC_URL.
- To deploy in Github pages, first is necessary to build and then use gh pages library. It uploads the content in build folder. It is necessary also to install some dev dependencies. This URL was useful: https://platzi.com/tutoriales/1548-react/4065-guia-para-usar-github-pages-en-tus-proyectos-de-reactjs/
### Improvements
Things that can be improved.

- Improve styling

===============================================================================
### Exercise

API test

We ask that you complete the following challenge to evaluate your development skills. Please use the programming language and framework discussed during your interview to accomplish the following task.

PLEASE DO NOT FORK THE REPOSITORY. WE NEED A PUBLIC REPOSITORY FOR THE REVIEW. 

## The Game
Develop the classic game of [Minesweeper](https://en.wikipedia.org/wiki/Minesweeper_(video_game))

## Show your work

1.  Create a Public repository ( please dont make a pull request, clone the private repository and create a new plublic one on your profile)
2.  Commit each step of your process so we can follow your thought process.

## What to build
The following is a list of items (prioritized from most important to least important) we wish to see:
* Design and implement  a documented RESTful API for the game (think of a mobile app for your API)
* Implement an API client library for the API designed above. Ideally, in a different language, of your preference, to the one used for the API
* When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)
* Ability to 'flag' a cell with a question mark or red flag
* Detect when game is over
* Persistence
* Time tracking
* Ability to start a new game and preserve/resume the old ones
* Ability to select the game parameters: number of rows, columns, and mines
* Ability to support multiple users/accounts
 
## Deliverables we expect:
* URL where the game can be accessed and played (use any platform of your preference: heroku.com, aws.amazon.com, etc)
* Code in a public Github repo
* README file with the decisions taken and important notes

## Time Spent
You need to fully complete the challenge. We suggest not spending more than 3 days total.  Please make commits as often as possible so we can see the time you spent and please do not make one commit.  We will evaluate the code and time spent.
 
What we want to see is how well you handle yourself given the time you spend on the problem, how you think, and how you prioritize when time is sufficient to solve everything.

Please email your solution as soon as you have completed the challenge or the time is up
