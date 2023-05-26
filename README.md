<h1 align="center">GitHub Cards</h1>

- [GitHub Repo Cards](https://github.com/robert-warneke/github-cards#github-repo-cards)

---

## GitHub Repo Cards

### 🖥️ Demo:
> Default GitHub Repo Card:
>
> [![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card)](https://github.com/robert-warneke/github-cards)

### 📋 How to Use . . .

You can customize the 'GitHub Repo Card' by providing query parameters in the URL:
| URL Query Parameters            | Description                                             |
| ------------------------- | -------------------------------------------                               |
| `user`                    | The username of the GitHub account. Default is 'robert-warneke'.          |
| `repo`                    | The repository name. Default is 'github-cards'.                           |
| `showUsername`            | Display the username in the card title. Default is 'false'.               | 
| `showLicense`             | Display the repository license on the card. Default is 'true'.            | 
| `theme`                   | The color [theme](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md) of the card. Default is 'light'. |
| `bgColor`                 | Background color of the card.                | 
| `borderColor`             | Border color of the card.                    | 
| `titleColor`              | Color of the card title text.                | 
| `descriptionColor`        | Color of the card description text.         | 
| `langDotColor`            | Color of the language dot.       | 

1. To use the 'GitHub Repo Card', you just need to embed the URL as an image in your README file or any other place:

###### `markdown`
```md
![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=USERNAME&repo=REPOSITORY)
```

2. Replace `'USERNAME'` with *your GitHub username* and `'REPOSITORY'` with the *name of your repository*.

    > For example, if *your GitHub username* is `'robert-warneke'` and *your repository name* is `'github-cards'`, your URL would look like this:

###### `markdown`
```md
![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)
```

---