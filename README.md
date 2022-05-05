# hugothemeone

HugoThemeOne is my first Hugo theme as a module project.

To update the theme from my Mac adding a new version:

You're not going to want to add a new version for each commit. Tags are meant to track a point in time and are essentially immutable. But for times when you do want to create a new version, use:

Edit the file you want to change in the theme (layout, assets, etc.): 

`vi layouts/blog/card.html`

Add it to the local repo:

```
  git add --all
  git commit -a -m "new blogs tag name"
```

Tag HEAD of the current checked out repo with a new version:

```
  git tag v0.8.1
  git tag --list
    v0.8
    v0.8.1
```

Push it to the remote repo:

  `git push --tags hugothemeone`

## Update the site theme to any given version:

On the production site use

  cd to the site repo

```  
  hugo mod get github.com/cloudseeder/hugothemeone@v0.8.1
    go: downloading github.com/cloudseeder/hugothemeone v0.8.1
    go: upgraded github.com/cloudseeder/hugothemeone v0.0.0-20220505134635-270fc498d6b0 => v0.8.1

  hugo mod graph
    AcmeCorpWebsite github.com/cloudseeder/hugothemeone@v0.8.1
```
