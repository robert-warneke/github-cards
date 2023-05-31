## GitHub Repo Cards
Enhance your GitHub profile and repository READMEs with customizable 'GitHub Repo Cards'. Display information about your repositories in a neat, visual card format that can be tailored to your liking.

- [🖥️ Demo]()
- [📋 How to Use]()
- [⚙️ Customization]()

### 🖥️ Demo:
> 🔍 Example of the default 'GitHub Repo Card':
>
> ![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)
>
> ```md
> ![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)
> ```

> 🔍 Example of the `'showUsername'` parameter key with the value `'true'`:
>
> ![GitHub Repo Card with showUsername](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showUsername=true)
>
> ```md
> ![GitHub Repo Card with showUsername](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showUsername=true)
> ```

> 🔍 Example of the `'theme'` parameter key with the value `'dark'`:
>
> ![GitHub Repo Card with dark theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)
>
> ```md
> ![GitHub Repo Card with dark theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)
> ```
> &#9432; Click here for a [complete list of available themes](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md).

> 🔍 Example of the `'theme'` parameter key with the value `'straightBlack'`:
>
> ![GitHub Repo Card with straightBlack theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=straightBlack)
>
> ```md
> ![GitHub Repo Card with straightBlack theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=straightBlack)
> ```
> &#9432; Click here for a [complete list of available themes](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md).


> 🔍 Example of the `'showLicense'` parameter key with the value `'false'`:
>
> ![GitHub Repo Card with showLicense](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showLicense=false)
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

##### Available query parameters:
| Query Parameters          | Description                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| `user`                    | The username of the GitHub account. Default is 'robert-warneke'.            |
| `repo`                    | The repository name. Default is 'github-cards'.                             |
| `showUsername`            | Display the username in the card title. Default is 'false'.                 | 
| `showLicense`             | Display the repository license on the card. Default is 'true'.              | 
| `theme`                   | The color [theme](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md) of the card. Default is 'light'. |
| `bgColor`                 | Background color of the card.                                               | 
| `borderColor`             | Border color of the card.                                                   |
| `textColor`               | Color of all the card text.                                                 | 
| `titleTextColor`          | Color of the card title text. Overrides 'textColor'.                        | 
| `descriptionTextColor`    | Color of the card description text. Overrides 'textColor'.                  | 
| `dataTextColor`           | Color of the card data (language, license, stars, watching, and forks) text. Overrides 'textColor'. | 
| `langTextColor`           | Color of the card language text. Overrides 'textColor' and 'dataTextColor'. | 
| `licenseTextColor`        | Color of the card license text. Overrides 'textColor' and 'dataTextColor'.  | 
| `starTextColor`           | Color of the card star text. Overrides 'textColor' and 'dataTextColor'.     | 
| `watchTextColor`          | Color of the card watching text. Overrides 'textColor' and 'dataTextColor'. | 
| `forkTextColor`           | Color of the card fork text. Overrides 'textColor' and 'dataTextColor'.     |
| `langDotColor`            | Color of the language dot.                                                  | 
| `iconColor`               | Color of all the icons.                                                     |
| `repoIconColor`           | Color of the repo icon. Overrides 'iconColor'.                              |
| `licenseIconColor`        | Color of the license icon. Overrides 'iconColor'.                           |
| `starIconColor`           | Color of the star icon. Overrides 'iconColor'.                              |
| `watchIconColor`          | Color of the watching icon. Overrides 'iconColor'.                          |
| `forkIconColor`           | Color of the forks icon. Overrides 'iconColor'.                             |

---

&#9432; Please note that GitHub Cards is a community project and is not affiliated with or endorsed by GitHub Inc.