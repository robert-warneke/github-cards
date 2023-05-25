# GitHub Cards

## GitHub Repo Cards

### Demo:
Default GitHub Repo Card:

![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)

### Usage:

1. To use the 'GitHub Repo Card', you just need to embed the URL as an image in your README file or any other place:

###### `markdown`
```md
![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=USERNAME&repo=REPOSITORY)
```

2. Replace `USERNAME` with *your GitHub username* and `REPOSITORY` with the *name of your repository*.

    > For example, if *your GitHub username* is `robert-warneke` and *your repository name* is `github-cards`, your URL would look like this:

###### `markdown`
```md
![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)
```

#### (Optional)

3. Further customize the 'GitHub Repo Card' by defining a theme with the URL parameter `&theme=THEMENAME`:

###### `markdown`
```md
![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=USERNAME&repo=REPOSITORY&theme=THEMENAME)
```

4. Replace `THEMENAME` with the *name of your selected theme*. [Click here for a list of available themes!](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md)

    > For example, if *your GitHub username* is `robert-warneke`, *your repository name* is `github-cards`, and *your selected theme* is `dark`, your URL would look like this:

###### `markdown`
```md
![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)
```

GitHub Repo Card with `dark` theme applied:

![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)

#### Additional URL Parameters for GitHub Repo Cards:
- `&showUsername=true`: By default, the username is not shown in the card title. This parameter will display the card title as 'username/repository'.

---