# hugothemeone

HugoThemeOne is my first Hugo theme as a module project.

To update the theme and add a new version (psuedo branch):

On my Mac:
Edit some layout file, etc: 

  vi layouts/blog/card.html 

Add it to the local repo:
  git add --all
  git commit -a -m "new blogs tag name"

Tag HEAD of the current checked out repo with a new version:
  git tag v0.8.1
  git tag --list
    v0.8
    v0.8.1

Push it to the remote repo:
  git push --tags hugothemeone

## Update the site theme to any given version:

On the production site use:

  cd to the site repo
  hugo mod get github.com/cloudseeder/hugothemeone@v0.8.1
    go: downloading github.com/cloudseeder/hugothemeone v0.8.1
    go: upgraded github.com/cloudseeder/hugothemeone v0.0.0-20220505134635-270fc498d6b0 => v0.8.1
  hugo mod graph
    AcmeCorpWebsite github.com/cloudseeder/hugothemeone@v0.8.1
