# GitHub Cards
Generate a variety of dynamic and aesthetically appealing GitHub stat cards, perfect for integrating into GitHub READMEs and beyond. 📊📈

---

## GitHub Repo Cards
Enhance your GitHub profile and repositories with customizable 'GitHub Repo Cards'. Display information about your repositories in a neat, visual card format that can be tailored to your liking.

### 🖥️ Demo:
> 🔍 Example of the default 'GitHub Repo Card':
>
> [![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)
> ```

> 🔍 Example of the 'GitHub Repo Card' `'showUsername'` parameter key with the value `'true'`:
>
> [![GitHub Repo Card with showUsername](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showUsername=true)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![GitHub Repo Card with showUsername](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showUsername=true)
> ```

> 🔍 Example of the 'GitHub Repo Card' `'theme'` parameter key with the value `'dark'`:
>
> [![GitHub Repo Card with dark theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![GitHub Repo Card with dark theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)
> ```
> &#9432; Click here for a [complete list of available themes](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md).

> 🔍 Example of the 'GitHub Repo Card' `'theme'` parameter key with the value `'straightBlack'`:
>
> [![GitHub Repo Card with straightBlack theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=straightBlack)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![GitHub Repo Card with straightBlack theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=straightBlack)
> ```
> &#9432; Click here for a [complete list of available themes](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md).


> 🔍 Example of the 'GitHub Repo Card' `'showLicense'` parameter key with the value `'false'`:
>
> [![GitHub Repo Card with showLicense](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showLicense=false)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![GitHub Repo Card with showLicense](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showLicense=false)
> ```

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
You can customize the 'GitHub Repo Card' by providing query parameters in the URL.

Query parameters are added after the main URL using the '?' character, followed by a series of key=value pairs, separated by '&'.

> 🔍 Example:
> ```md
> https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards
> ```
>
> In this example:
> - `https://my-github-cards.vercel.app/api/github-repo-card` is the main URL.
> - `'user'` is a parameter key and `'robert-warneke'` is its value.
> - `'repo'` is another parameter key and `'github-cards'` is its value.

Available query parameters:
| Query Parameters          | Description                                                               |
| ------------------------- | -------------------------------------------                               |
| `user`                    | The username of the GitHub account. Default is 'robert-warneke'.          |
| `repo`                    | The repository name. Default is 'github-cards'.                           |
| `showUsername`            | Display the username in the card title. Default is 'false'.               | 
| `showLicense`             | Display the repository license on the card. Default is 'true'.            | 
| `theme`                   | The color [theme](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md) of the card. Default is 'light'. |
| `bgColor`                 | Background color of the card.                                             | 
| `borderColor`             | Border color of the card.                                                 |
| `textColor`               | Color of all the card text.                                               | 
| `titleTextColor`          | Color of the card title text. Overrides 'textColor'.                      | 
| `descriptionTextColor`    | Color of the card description text. Overrides 'textColor'.                | 
| `dataTextColor`           | Color of the card data text.                                              | 
| `langDotColor`            | Color of the language dot.                                                | 
| `iconColor`               | Color of all the icons.                                                   |
| `repoIconColor`           | Color of the repo icon. Overrides 'iconColor'.                            |
| `licenseIconColor`        | Color of the license icon. Overrides 'iconColor'.                         |
| `starIconColor`           | Color of the star icon. Overrides 'iconColor'.                            |
| `watchIconColor`          | Color of the watching icon. Overrides 'iconColor'.                        |
| `forkIconColor`           | Color of the forks icon. Overrides 'iconColor'.                           |

---