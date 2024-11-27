# Contributing

We are happy to accept contributions from the community to improve this project.

## Editing using the GitHub Web Interface

1. Open the [GitHub project](https://github.com/trimble-oss/website-modus.trimble.com) in your browser.
2. Navigate to the section and page you'd like to edit. The folder structure matches the site navigation. If you would like to edit a page in the Components section for example, click on **content** > **components** and select the page you would like to edit.
3. To edit, first click the edit (pencil) icon in the top-right of the content preview pane.
4. Make your text changes. When you've finished, enter the title and description of your changes and select the 'Create a new branch' option and click the green 'propose changes' button
5. Click the green 'Create pull request' to make a pull request
6. The Documentation Team will review, merge and publish your request or contact you with any follow-up questions.

### Setup (for creating a build of the site locally)

These steps assume you have [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com/) and a code editor installed.

1. Install dependencies with `npm install`
2. Run `npm run serve` to run local server.
3. The site will be available at <http://localhost:4000/> and will auto update when you make any changes

### Images

- Images should go in the `static/img` directory
- Filenames Requirements: Lowercase (not Mixed Case)
- Filenames Requirements: Separate words with dash/hyphen (not underscores or spaces)
- File formats: Icons or logos ideally SVG (minified). Use <https://jakearchibald.github.io/svgomg/> for minifying a single image.
- File formats: Photos should never be in PNG24. A high quality JPEG is usually 1/4 of the size
- Always specify `alt=""` for improved accessibility
- Always specify `height` and `width` to images to improve page-rendering time (reduce repaints)
- Always add `loading="lazy"` to images below the fold for native lazy loading (not needed for images less than 4 KB)
- Add the class `img-fluid` to images which are wider than 320 pixels so that they scale down on small screens such as iPhone 5/SE
- PNG Bitmap images should be losslessly optimized with `npm run imagemin` or <https://squoosh.app/>
- Image file size should never exceed 200 KB
- Tip: Don't hotlink to images on external sites - images on other sites maybe removed, renamed or changed and it means an extra TLD/DNS round-trip

## Pull Request Checklist

- Before opening a PR run `npm run test` and wait for all tests to pass.
