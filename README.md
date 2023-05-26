# GitHub Cards
Generate a variety of dynamic and aesthetically appealing GitHub stat cards, perfect for integrating into GitHub READMEs and beyond. 📊📈

---

## GitHub Repo Cards
Enhance your GitHub profile and repositories with customizable GitHub Repo Cards. Display information about your repositories in a neat, visual card format that can be tailored to your liking.

### 🖥️ Demo:
> 🔍 Below is an example of the default 'GitHub Repo Card':
>
> [![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)](https://github.com/robert-warneke/github-cards)

### 📋 How to Use:
Follow these steps to use the 'GitHub Repo Card' in your README file or any other place:

1. Embed the URL as an image:

```md
![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=USERNAME&repo=REPOSITORY)
```

2. Replace `'USERNAME'` with **your GitHub username** and `'REPOSITORY'` with the **name of your repository**.

> 🔍 Example:
> ```md
> ![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)
> ```

### ⚙️ Customization:
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

---