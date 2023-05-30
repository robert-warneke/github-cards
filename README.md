# GitHub Cards
Generate a variety of dynamic and aesthetically appealing GitHub stat cards, perfect for integrating into GitHub READMEs and beyond. 📊📈

- [GitHub Cards](https://github.com/robert-warneke/github-cards#github-cards)
    - [GitHub Repo Cards](https://github.com/robert-warneke/github-cards#github-repo-cards)
        - [🖥️ Demo](https://github.com/robert-warneke/github-cards#%EF%B8%8F-demo)
        - [📋 How to Use](https://github.com/robert-warneke/github-cards#-how-to-use)
        - [⚙️ Customization](https://github.com/robert-warneke/github-cards#%EF%B8%8F-customization)
    - [GitHub Contribution Chart Cards](https://github.com/robert-warneke/github-cards#github-contribution-chart-cards)
        - [🖥️ Demo](https://github.com/robert-warneke/github-cards#%EF%B8%8F-demo-1)
        - [📋 How to Use](https://github.com/robert-warneke/github-cards/#-how-to-use-1)
        - [⚙️ Customization](https://github.com/robert-warneke/github-cards#%EF%B8%8F-customization-1)
- [🤝 Support](https://github.com/robert-warneke/github-cards/#-support)
- [📬 Get in Touch](https://github.com/robert-warneke/github-cards/#-get-in-touch)

---

## GitHub Repo Cards
Enhance your GitHub profile and repository READMEs with customizable 'GitHub Repo Cards'. Display information about your repositories in a neat, visual card format that can be tailored to your liking.

- [🖥️ Demo](https://github.com/robert-warneke/github-cards#%EF%B8%8F-demo)
- [📋 How to Use](https://github.com/robert-warneke/github-cards#-how-to-use)
- [⚙️ Customization](https://github.com/robert-warneke/github-cards#%EF%B8%8F-customization)

### 🖥️ Demo:
> 🔍 Example of the default 'GitHub Repo Card':
>
> [![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![Default GitHub Repo Card](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards)
> ```

> 🔍 Example of the `'showUsername'` parameter key with the value `'true'`:
>
> [![GitHub Repo Card with showUsername](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showUsername=true)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![GitHub Repo Card with showUsername](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&showUsername=true)
> ```

> 🔍 Example of the `'theme'` parameter key with the value `'dark'`:
>
> [![GitHub Repo Card with dark theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![GitHub Repo Card with dark theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=dark)
> ```
> &#9432; Click here for a [complete list of available themes](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md).

> 🔍 Example of the `'theme'` parameter key with the value `'straightBlack'`:
>
> [![GitHub Repo Card with straightBlack theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=straightBlack)](https://github.com/robert-warneke/github-cards)
>
> ```md
> ![GitHub Repo Card with straightBlack theme](https://my-github-cards.vercel.app/api/github-repo-card?user=robert-warneke&repo=github-cards&theme=straightBlack)
> ```
> &#9432; Click here for a [complete list of available themes](https://github.com/robert-warneke/github-cards/blob/master/docs/THEMES.md).


> 🔍 Example of the `'showLicense'` parameter key with the value `'false'`:
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

## GitHub Contribution Chart Cards

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
> ![GitHub Contribution Chart Card with 'showUsername'](https://my-github-cards.vercel.app/api/github-contribution-chart?showUsername=false)
>
> ```md
> ![GitHub Contribution Chart Card with 'showUsername'](https://my-github-cards.vercel.app/api/github-contribution-chart?user=robert-warneke&showUsername=false)
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
| Query Parameters          | Description                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| `user`                    | The username of the GitHub account. Default is 'robert-warneke'.            |
| `year`                    | Data for the specified year. Defaults to the current year.                  |
| `showFullYear`            | Displays the current year data beyond the current day... or doesn't! Default is `'false'` |
| `showUsername`            | Displays the GitHub username in the top center of the card... or doesn't! Default is `'true'` |
| `showGitHubIcon`          | Displays the GitHub Icon... or doesn't! Default is `'true'`                 |

---

# 🤝 Support
Thank you for your interest in supporting the GitHub Cards project! Your support plays a vital role in maintaining and improving the project. There are various ways you can contribute:
1. ⭐ **Star the Repository**: By starring the GitHub Cards repository on GitHub, you can show your appreciation and help the project reach a wider audience.
2. 🗨️ **Spread the Word**: Help spread the word about GitHub Cards. Whether it's through social media, developer communities, or sharing with your peers, your advocacy can make a significant impact.
3. 💖 **Sponsor the Project**: Consider financially supporting GitHub Cards through GitHub Sponsoring. Your contribution will directly support ongoing development. Click the Sponsor button at the top of the repo, or [click here](https://github.com/sponsors/robert-warneke). Any amount is greatly appreciated.

---

# 📬 Get in Touch

If you have questions or ideas concerning GitHub Cards, you're welcome to reach out. Here are a few ways you can connect:

1. ⚠️ **GitHub Issues**: If you encounter a problem with the GitHub Cards, have a look at existing [issues](https://github.com/robert-warneke/github-cards/issues) or open a new one. This is the best place to discuss technical issues or suggest new features.
2. 📧 **Email**: If you'd prefer to discuss something in private, you can send me an email. Please use this sparingly, as it's more efficient for us to have most discussions in the open on GitHub issues. hello@robertwarneke.com