'use strict'

const chai = require('chai')
const assert = chai.assert
const fs = require('fs')
const path = require('path')

describe('cli-commands', () => {
  let instructions = ''
  it('has a file called my-instructions', () => {
    const filePath = path.join('src','my-instructions')
    instructions = fs.readFileSync(filePath, 'utf-8')
      .trim().split('\n').map(cmd => cmd.replace(/[0-9]+/,'').trim())

    assert.isOk(instructions)
  })
  it('goes up two directories in one command', () => {
    const cmd = instructions[0]
    const re = /cd.*\.\.\/\.\./g

    assert.isOk(cmd.match(re))
  })
  it('creates a new folder called git-and-github', () => {
    const cmd = instructions[1]
    const re = /mkdir.*git-and-github/g

    assert.isOk(cmd.match(re))
  })
  it('goes into that new directory', () => {
    const cmd = instructions[2]
    const re = /cd.*git\-and\-github/g

    assert.isOk(cmd.match(re))
  })
  it('initializes a new repository', () => {
    const cmd = instructions[3]
    const re = /git init/g

    assert.isOk(cmd.match(re))
  })
  it('creates three new files', () => {
    const cmd = instructions[4]
    const re = /touch.*readme\.md.*ignore_me\.txt.*\.gitignore/g

    assert.isOk(cmd.match(re))
  })
  it('runs the given command', () => {
    const cmd = instructions[5]
    const re = /echo ignore_me\.txt > \.gitignore/g

    assert.isOk(cmd.match(re))
  })
  it('checks the status', () => {
    const cmd = instructions[6]
    const re = /git status/g

    assert.isOk(cmd.match(re))
  })
  it('stages only the .gitignore file', () => {
    const cmd = instructions[7]
    const re = /git add.*\.gitignore/g

    assert.isOk(cmd.match(re))
  })
  it('commits the .gitignore file with a message', () => {
    const cmd = instructions[8]
    const re = /git commit \-m/g

    assert.isOk(cmd.match(re))
  })
  it('stages all other files', () => {
    const cmd = instructions[9]
    const re = /git add (-A|\.)/g

    assert.isOk(cmd.match(re))
  })
  it('commits the other files with a message', () => {
    const cmd = instructions[10]
    const re = /git commit \-m/g

    assert.isOk(cmd.match(re))
  })
  it('creates a new remote', () => {
    const cmd = instructions[11]
    const re = /git remote add origin/g

    assert.isOk(cmd.match(re))
  })
  it('pushes to the master branch', () => {
    const cmd = instructions[12]
    const re = /git push \-u origin master/g

    assert.isOk(cmd.match(re))
  })
  it('go back to this folder', () => {
    const cmd = instructions[13]
    const re = /cd.*\.\.\/git\-and\-github\-basics\-assessment\/src/g

    assert.isOk(cmd.match(re))
  })
})
