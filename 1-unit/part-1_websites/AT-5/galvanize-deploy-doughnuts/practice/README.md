# Static Site Deployment

These instructions will lead you through how to deploy a full stack website with a client deployed on Firebase and a server on Heroku.

## 1. Client (Front-end) Instructions

1. Fork and clone this repo
1. ** Change into the `practice-client` folder from your command line **

### If this is your first time deploying to Firebase from the command line
1. Sign up for an account on [Firebase](https://firebase.google.com/).

1. In your terminal, install the Firebase CLI tools

  ```sh
  $ npm install -g firebase-tools
  ```

1. Authorize your computer to have access to your Firebase account

  ```sh
  $ firebase login
  ```

### Firebase Project
1. Initialize a new project

  ```sh
  $ firebase init
  ```

  - The terminal will prompt "What Firebase CLI features do you want to setup for this folder?" Both database and hosting are pre-selected. Unselect the database option by hitting the space bar, leave hosting option selected, and press enter.

  - Select `[create a new project]` and hit enter.
  - "What do you want to use as your project directory?"
    - (public) will be pre-populated.
    - Hit enter. This will create a public folder.
  - "Configure as a single page app (rewrite all urls to /index.html)"?
    - No

1. In the new public folder, delete the index.html
1. Move all previous files into the public folder
1. Firebase Initialization is complete! Now go to the [Firebase Console](https://console.firebase.google.com) and click "Create New Project".
1. Once the project has been created, type `firebase use --add` in the terminal and select the project name you just created.
  - "What do you want to use as an alias for this project?" Type an alias and hit enter.
1. Deploy:

  ```sh
  $ firebase deploy
  ```

1. Once the site has been deployed, the terminal will list the hosting URL. Copy and paste the URL and check out your first deployed static site!

### Made changes to your client?

Re-deploy:

** From the project directory, `practice-client` **

1. run `firebase deploy`

--------------

## 2. Server (Back-end) Instructions

1. ** Change into the folder above the `deploy-doughnuts` project from your command line **

1. Copy the server folder FROM the `deploy-doughnuts/practice` into the parent folder with a new name of practice-server
```
$ cp -r deploy-doughnuts/practice/server practice-server
```
1. Change into the new directory `practice-server`
### If this is your first time deploying to Heroku from the command line
1. Sign up for an account on [Heroku](https://www.heroku.com/).

1. In the command line, install the Heroku CLI tools
```
$ brew install heroku/brew/heroku
```

1. Authorize your computer to have access to your Heroku account

  ```sh
  $ heroku login
  ```
### Heroku uses Git to track files, so:
1. Initialize the repo
```sh
$ git init
```
1. Go to github.com and create a new repo
1. Add that repo as a git remote
```sh
git remote add origin [url]
```
1. git add, commit and push all files

### Heroku Project

1. Create a Heroku Project
```sh
$ heroku create
```
1. Confirm you have a heroku remote by running:
```sh
$ git remote -v
```
1. Deploy by pushing to Heroku
```sh
$ git push heroku master
```

### Made changes to your server?

Re-deploy:

1. git add, commit and push to Github
1. Push to Heroku
```sh
$ git push heroku master
```

--------------

## 3. Connect the Client & Server

Now both the front-end and back-end are deployed
1. In the original repo: `deploy-doughnuts`
  - ** change into the `practice-client` folder ** from your command line
  - Update the src/main.js file to do a fetch request to the deployed server
  - Re-deploy your firebase client
