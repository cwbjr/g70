## Instructions

For each step below, you should only have to write a single command on the command line. Start the commands below inside of this folder; that is, if you type `pwd` inside this folder you should see the following at the end of output:

```bash
[...]/git-and-github-basics-assessment/src
```

## Important Notes

The tests that get run at the end of the sequence of commands requires:

* That your `history` lists your historical commands in chronological order; that is, your latest command is on the bottom.

* That you only type in one command per line in the exact order they're presented.

The best way to accomplish the first point is to use `bash` or `zsh`. Alternatively, once you have a `my-instructions` file, feel free to edit the file directly to get the tests to pass.

### Steps

0. _In a single command_, go back up two directories. You should be outside of the assessment folder.

0. Create a new directory called `git-and-github`.

0. Go into that directory.

0. Initialize a new repository.

0. _In a single command_, create the following files in the following order: `readme.md`, `ignore_me.txt`, and `.gitignore`.

0. Run the following command: `echo ignore_me.txt > .gitignore`

0. Check the status of your git repository.

0. Stage _only_ the `.gitignore` file.

0. Commit this file with a sensible commit message.

0. Stage _all_ of the remaining files.

0. Commit the remaining files with a sensible commit message.

0. Go to github.com and create a new repository. Copy the command to set a new remote named origin and paste it into your terminal.

0. Push to the master branch of origin on your new github repository.

0. _In a single command_, navigate back to the `src/` folder inside of this assessment.

0. Run the following command: `history | tail -n 14 > my-instructions`
*Note:* If you are using `fish`, use the following command instead `history -n 12 | tail -r > my-instructions`

0. Navigate up a directory.

0. Run the tests with the following command: `npm test > ./src/test-output`
