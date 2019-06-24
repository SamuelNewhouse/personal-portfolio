"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const works = [
    {
      title: "Fox Creek Cedar Oil",
      description: "A real-world business website for a family-owned operation.",
      overRideURL: "https://www.foxcreekcedaroil.com"
    },
    {
      title: "Wikipedia Quick Search",
      description: "Search wikipedia and see a summary of the top 10 results. Optionally search again by any of the returned titles.",
      gitHubName: "wikipedia-viewer"
    },
    {
      title: "Drum Machine",
      description: "A drum machine with recording, playback, and editing features.",
      gitHubName: "drum-machine"
    },
    {
      title: "Markdown Previewer",
      description: "A markdown previewer with the ability to minimize and maximize the editor and viewer at any resolution.",
      gitHubName: "markdown-previewer"
    },
    {
      title: "Random Wikiquote API",
      description: "A JavaScript API for getting a random quote from a random pages on en.wikiquote.org",
      gitHubName: "random-wikiquote",
      sourceOnly: true
    },
    {
      title: "Random Wikiquotes",
      description: "Uses the aforementioned Random Wikiquote API to display random quotes.",
      gitHubName: "quote-machine2",
    },
    {
      title: "Premium Primes",
      description: "A mock product landing page.",
      gitHubName: "product-page",
    },
    {
      title: "Epictetus",
      description: "A tribute page to Epictetus.",
      gitHubName: "epictetus",
    },
    {
      title: "Responsive Diagonally Distributed Elements",
      description: "A JavaScript solution for responsively aligning elements on a diagonal line.",
      gitHubName: "responsive-diagonally-distributed-elements",
      sourceOnly: true
    },
    {
      title: "RDDE Technical Documentation",
      description: "My explanation and documentation for Responsive Diagonally Distributed Elements.",
      gitHubName: "rdde-tech-doc",
    },
    {
      title: "Survey",
      description: "A mock survey page.",
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
    if (work.gitHubName)
      sourceElement = `<a href="${gitHubFullSourceUrl}" target="_blank">View GitHub Source</a>`;
    else
      sourceElement = `<span>(No GitHub Source)<span>`;

    let workUrl = null;
    if (work.sourceOnly)
      workUrl = gitHubFullSourceUrl;
    else
      workUrl = work.overRideURL || gitHubFullPageUrl;

    examplesDiv.insertAdjacentHTML('beforeend',
      `<article>
      <h3>${work.title}</h3>
      <a href="${workUrl}" target="_blank">
        ${work.description}
      </a>
      <a href="${workUrl}" target="_blank">
        <img src="img/${work.title.replace(/\s+/g, '_').toLowerCase()}.png">
      </a>
      ${sourceElement}
    </article>`);
  }
})