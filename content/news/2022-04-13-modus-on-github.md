---
title: Modus is now on GitHub
date: 2022-04-13
description: "Our projects code repositories join the world's biggest development platform."
image: "/img/blog/headers/2022-04-13-modus-on-github.png"
images:
  - /img/blog/headers/2022-04-13-modus-on-github.png
headerBgColor: "#000"
tags: ["github", "open-source"]
author: Christian Oliff
blog: true
layout: blog-post
---

**We're excited to announce that most of the Modus projects have been migrated from Bitbucket to GitHub.**

Check [GitHub](https://github.com/orgs/trimble-oss/repositories?q=modus&type=all&language=&sort=) for our available projects.

There are many benefits to having our projects code hosted on GitHub, for example:

- **[GitHub Issues](https://github.com/features/issues)** All open issues (bug reports/feature requests etc) have been migrated from our Jira boards to their respective projects.
- **[GitHub Actions](https://github.com/features/actions)** allows us to automate all parts of our development workflow including testing all of our code and deploying changes. We're also using GitHub Actions to automate assigning issues and Pull Requests to users and will setup automation for our internal project boards.
- GitHub's integration with **[Netlify Deploy Previews](https://www.netlify.com/products/deploy-previews/)** automatically creates unique URLs so we can review and test site changes before pushing to production.
- **[GitHub Advanced Security](https://docs.github.com/en/enterprise-server@3.2/get-started/learning-about-github/about-github-advanced-security)** which provides us with code scanning (finds any potential security vulnerabilities and coding errors in your code), secret scanning (Detect secrets, for example keys and tokens, that have been checked into the repository - as well as automated dependency alerts to fix security issues.
- **Improved Discoverability** - now our projects are on the world's biggest development platform, with many of them open-source making it easier for users to contribute.
- And the [GitHub Mobile app](https://github.com/mobile) is useful for checking on issues when you're away from your computer!

In the future we plan to setup [Slack integration](https://slack.github.com/) to get automated notifications of build statuses and pull request reviews right from Slack too!

## Modus Projects

<style>
main li {
  margin-bottom: 9px;
}
.card {
  background-color: #f1f1f6;
  min-height: 156px;
}
.card-title h3 {
  font-size: 1.05rem;
}
</style>

<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">

{{< card-start title="Modus" github="modus">}}
<span class="text-muted">The home of the Modus design system developer projects</span>
{{</ card-start >}}

{{< card-start title="Modus Bootstrap Site" github="website-modus-bootstrap.trimble.com">}}
<span class="text-muted">Documentation and code samples for using Modus Bootstrap</span>
{{</ card-start >}}

{{< card-start title="Modus React Bootstrap" github="modus-react-bootstrap">}}
<span class="text-muted">Modus components extended from React-Bootstrap component library</span>
{{</ card-start >}}

{{< card-start title="Modus React Bootstrap Site" github="website-modus-react-bootstrap.trimble.com">}}
<span class="text-muted">The Modus React Bootstrap Site for documentation and example code</span>
{{</ card-start >}}

{{< card-start title="Modus Web Components" github="modus-web-components">}}
<span class="text-muted">Reusable, encapsulated UI elements that are framework agnostic</span>
{{</ card-start >}}

{{< card-start title="Modus Style Guide site" github="website-modus.trimble.com">}}
<span class="text-muted">This site - Your first stop for Modus guidelines, news and resources</span>
{{</ card-start >}}

<!--
{{< card-start title="Modus Icons">}}
<span class="text-muted">The Modus Icon library (with SVG, PNG, icon fonts) - coming soon!</span>
{{</ card-start >}}
-->
</div>

Note: The code for the current version of Modus Bootstrap (based on Bootstrap v4.x) is on [Bitbucket](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap/browse), but we'll be working on a major new version based on Bootstrap 5 which will be on GitHub. More news on that later!

## Contributing

Have a suggestion? Want to report a bug? Would you like to fix an issue that you've discovered? We welcome your contributions!

Feel free to open an issue on any of the the Modus projects. A GitHub account is required, you can [signup for free](https://github.com/).

## Wrap-up

If you have any questions you can post them on our new [Modus Discussions channel](https://github.com/trimble-oss/modus/discussions).

Finally - we'd like to give a special thank to [Jeff Doolittle](https://github.com/jeffdoolittle) for his help on setting this up.
