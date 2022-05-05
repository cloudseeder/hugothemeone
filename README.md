# hugothemeone

HugoThemeOne is my first Hugo theme as a module project.

To update the theme from my Mac adding a new version:

You don't want to add a new version for each commit. Keep pushing new
changes to "master" and create a new tag when it's time to release the
next version. 

Tags are meant to track a point in time and are essentially immutable.
But for times when you do want to create a new version, use:

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

That pushes the lastest commits and tags to the remote repo.

## Update the site theme to any given version:

On the production site use

  cd to the site repo

```  
  hugo mod get github.com/cloudseeder/hugothemeone@v0.8.1
    go: downloading github.com/cloudseeder/hugothemeone v0.8.1
    go: upgraded github.com/cloudseeder/hugothemeone v0.0.0-20220505134635-270fc498d6b0 => v0.8.1

  hugo mod graph
    AcmeCorpWebsite github.com/cloudseeder/hugothemeone@v0.8.1

  hugo remote-ls --tags huguthemeone
    3d5f2d4096a7cbea0c2e2ff997b75f5a679b4093	refs/tags/v0.8
    030f579baf970507d5eef6840b51356b1f68e730	refs/tags/v0.8^{}
    062e12ee282067217f0bf8d7f3b39716539394e5	refs/tags/v0.8.1
    d1467b29db972a9e1f3fff226e7ae4c5276a2ff9	refs/tags/v0.8.2
    1353780a6eb05a3879061b35f07b535549ff479f	refs/tags/v0.8.3
    44cb57c903f47719407aa0574b587a3bc32f58aa	refs/tags/v0.8.3^{}
    
  hugo mod get github.com/cloudseeder/hugothemeone@v0.8.3
  ...
```
