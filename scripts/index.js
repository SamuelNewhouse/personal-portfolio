"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const works = [
    {
      title: "Fox Creek Cedar Oil",
      description: "A real-world business website for a family-owned operation. For this site in particular, I extensively researched and applied proper SEO techniques.",
      overRideURL: "https://www.foxcreekcedaroil.com"
    },
    {
      title: "Drum Machine",
      description: "A drum machine with recording, playback, and editing features. This is my most complicated project, involving a heavy use of react, redux, and redux thunks.",
      gitHubName: "drum-machine"
    },
    {
      title: "Wikipedia Quick Search",
      description: "Search wikipedia and see a summary of the top 10 results. Optionally search again by any of the returned titles. Very fast and fun for quickly seeing how some topics are related on Wikipedia.",
      gitHubName: "wikipedia-viewer"
    },
    {
      title: "Markdown Previewer",
      description: "A markdown previewer with the ability to minimize and maximize the editor and viewer at any resolution. This was an especially interesting challenge in terms of making it fully responsive.",
      gitHubName: "markdown-previewer"
    },
    {
      title: "Random Wikiquote API",
      description: "A JavaScript API for getting a random quote from a random page on en.wikiquote.org. This is suprisingly difficult to do because the wikiquote API doesn't support querying for random quotes.",
      gitHubName: "random-wikiquote",
      sourceOnly: true
    },
    {
      title: "Random Wikiquotes",
      description: "Uses the aforementioned Random Wikiquote API to display random quotes. Generated quotes can be tweeted or Google searched with the press of a button.",
      gitHubName: "quote-machine2",
    },
    {
      title: "Responsive Diagonally Distributed Elements",
      description: 'A JavaScript solution for responsively aligning elements on a diagonal line. This is a more general solution than manually coding ratios in flexboxes or fractions in grid.',
      gitHubName: "responsive-diagonally-distributed-elements",
      sourceOnly: true
    },
    {
      title: "RDDE Technical Documentation",
      description: 'My explanation and documentation for Responsive Diagonally Distributed Elements. Find the "Introduction" and "Compare Blocking Cases" sections to see examples of RDDE in action.',
      gitHubName: "rdde-tech-doc",
    },
    {
      title: "Epictetus",
      description: "A tribute page to Epictetus. Researching the content for this page was the most time consuming part, but it was worth it.",
      gitHubName: "epictetus",
    },
    {
      title: "Premium Primes",
      description: "A straighforward mock product landing page. It's simple, but I did learn how to make embeded YouTube videos fully responsive.",
      gitHubName: "product-page",
    },
    {
      title: "Survey",
      description: "A basic mock survey page. It was a useful exercise for learning about Bootstrap form features.",
      gitHubName: "survey",
    },
  ];

  const examplesDiv = document.getElementById("examples");
  const gitHubBasePageUrl = "https://samuelnewhouse.github.io/";
  const gitHubBaseSourceUrl = "https://github.com/SamuelNewhouse/";

  for (let work of works) {
    let gitHubFullPageUrl = gitHubBasePageUrl + work.gitHubName;
    let gitHubFullSourceUrl = gitHubBaseSourceUrl + work.gitHubName;

    let sourceElement = null;
    if (work.sourceOnly)
      sourceElement = `<span class="github-element">(Click above for source)<span>`;
    else if (work.gitHubName)
      sourceElement = `<a class="github-element code-info" href="${gitHubFullSourceUrl}" target="_blank">View GitHub Source</a>`;
    else
      sourceElement = `<span class="github-element">(No GitHub Source)<span>`;

    let workUrl = null;
    if (work.sourceOnly)
      workUrl = gitHubFullSourceUrl;
    else
      workUrl = work.overRideURL || gitHubFullPageUrl;

    examplesDiv.insertAdjacentHTML('beforeend',
      `<article class="dark">
      <a class="flex-a" href="${workUrl}" target="_blank">
        <h3>${work.title}</h3>
        <span class="description">${work.description}</span>
        <img src="img/${work.title.replace(/\s+/g, '_').toLowerCase()}.png" alt="${work.description}">
      </a>
      ${sourceElement}
    </article>`);
  }
})