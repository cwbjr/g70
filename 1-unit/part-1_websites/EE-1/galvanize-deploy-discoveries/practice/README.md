# Static Site Deployment

These instructions will lead you through how to deploy a static website on firebase

## Instructions

1. Fork and clone this repo
1. Change into the `practice directory` from your command line
1. Sign up for an account on [Firebase](https://firebase.google.com/).
1. In your terminal, install the Firebase CLI tools

  ```sh
  $ npm install -g firebase-tools
  ```

1. Authorize your computer to have access to your Firebase account

  ```sh
  $ firebase login
  ```
1. Initialize a new project

  ```sh
  $ firebase init
  ```

  - The terminal will prompt "What Firebase CLI features do you want to setup for this folder?" Both database and hosting are pre-selected. Unselect the database option by hitting the space bar, leave hosting option selected, and press enter.

  - Select `[create a new project]` and hit enter.
  - "What do you want to use as your project directory?" (public) will be pre-populated. Hit `.` This will use your current location for your project directory, so it is important that you are in the directory you want to deploy.
  - "Configure as a single page app (rewrite all urls to /index.html)"? No
  - "File ./index.html already exists. Overwrite?" No

1. Firebase Initialization is complete! Now go to the [Firebase Console](https://console.firebase.google.com) and click "Create New Project".
1. Once the project has been created, type `firebase use --add` in the terminal and select the project name you just created. "What do you want to use as an alias for this project?" Type an alias and hit enter.
1. Deploy:

  ```
  $ firebase deploy
  ```

1. Once the site has been deployed, the terminal will list the hosting URL. Copy and paste the URL and check out your first deployed static site!

### Now make some changes!

Let's play around with re-deploying.

1. Add an h1 to the HTML, run `firebase deploy`, and see the changes.
1. Then make a change to the CSS and `firebase deploy` again! As you make any changes, keep using ```firebase deploy``` to keep your deployed site up to date.
