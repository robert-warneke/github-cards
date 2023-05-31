## GitHub Contribution Chart Cards

- [🖥️ Demo]()
- [📋 How to Use]()
- [⚙️ Customization]()

### 🖥️ Demo:

> 🔍 Example of the default 'GitHub Contribution Chart Card':
>
> ![Default GitHub Contribution Chart Card](https://my-github-cards.vercel.app/api/github-contribution-chart)
>
> ```md
> ![Default GitHub Contribution Chart Card](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke)
> ```

> 🔍 Example of the `'showFullYear'` parameter key with the value `'true'`:
>
> ![GitHub Contribution Chart Card with 'showFullYear'](https://my-github-cards.vercel.app/api/github-contribution-chart?showFullYear=true)
>
> ```md
> ![GitHub Contribution Chart Card with 'showFullYear'](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&showFullYear=true)
> ```

> 🔍 Example of the `year` parameter key with a specified year:
>
> ![GitHub Contribution Chart Card with 'year'](https://my-github-cards.vercel.app/api/github-contribution-chart?year=2020)
>
> ```md
> ![GitHub Contribution Chart Card with 'year'](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&year=2020)
> ```

> 🔍 Example of the `'showUsername'` parameter key with the value `'false'`:
>
> ![GitHub Contribution Chart Card with 'showUsername'](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&showUsername=false)
>
> ```md
> ![GitHub Contribution Chart Card with 'showUsername'](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&showUsername=false)
> ```

> 🔍 Example of the `'theme'` parameter key with the value `'dark'`:
>
> ![GitHub Contribution Chart Card with 'theme'](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&theme=dark)
>
> ```md
> ![GitHub Contribution Chart Card with 'theme'](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&theme=dark)
> ```

### 📋 How to Use:
Follow these steps to use the 'GitHub Contribution Chart Card' in your README file or any other place:

1. Embed the URL as an image:

```md
![GitHub Contribution Chart Card](https://my-github-cards.vercel.app/api/github-contribution-chart?user=USERNAME)
```

2. Replace `'USERNAME'` with **your GitHub username**.

> 🔍 Example:
> ```md
> ![GitHub Repo Card](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke)
> ```

### ⚙️ Customization:
You can customize the 'GitHub Contribution Chart Card' by providing query parameters in the URL.

Query parameters are added after the main URL using the '?' character, followed by a series of key=value pairs, separated by '&'.

> 🔍 Example:
> ```md
> https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&year=2023
> ```
>
> In this example:
> - `https://my-github-cards.vercel.app/api/github-contribution-chart` is the main URL.
> - `'user'` is a parameter key and `'robert-warneke'` is its value.
> - `'year'` is another parameter key and `'2023'` is its value.

##### Available query parameters:
| Query Parameters          | Description                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| `user`                    | The username of the GitHub account. Default is 'robert-warneke'.             |
| `year`                    | Data for the specified year. Defaults to the current year.                   |
| `showFullYear`            | Displays the current year data beyond the current day... or doesn't! Default is `'false'` |
| `showUsername`            | Displays the GitHub username in the top center of the card... or doesn't! Default is `'true'` |
| `showGitHubIcon`          | Displays the GitHub Icon... or doesn't! Default is `'true'`                  |
| `theme`                   | The color [theme](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md) of the card. Default is 'light'. |
| `bgColor`                 | Background color of the card.                                                |
| `borderColor`             | Border color of the card.                                                    |
| `textColor`               | Color of all the card text. *Applies to GitHub icon.*                          |
| `yearLabelColor`          | Color of the year and total contribution text labels. *Overrides 'textColor'.* |
| `userLabelColor`          | Color of the 'username' text. *Overrides 'textColor'.*                         |
| `dayLabelColor`           | Color of the day labels. *Overrides 'textColor'.*                              |
| `monthLabelColor`         | Color of the month labels. *Overrides 'textColor'.*                            |
| `keyLabelColor`           | Color of the 'color box key' labels. *Overrides 'textColor'.*                  |
| `githubIconColor`         | Color of the GitHub icon. *Overrides 'textColor'.*                             |

---

&#9432; Please note that GitHub Cards is a community project and is not affiliated with or endorsed by GitHub Inc.