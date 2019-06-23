"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const works = [
    {
      title: "Fox Creek Cedar Oil",
      description: "A real-world business website for a family-owned operation.",
      gitHubName: null
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
    },
    {
      title: "RDDE Technical Documentation",
      description: "My explanation and documentation for Responsive Diagonally Distributed Elements.",
      gitHubName: "rdde-tech-doc",
    },
  ];

  const gitHubPageUrl = "https://samuelnewhouse.github.io/";
  const gitHubSourceUrl = "https://github.com/SamuelNewhouse/";
  const examplesDiv = document.getElementById("examples");

  for (let work of works) {
    examplesDiv.insertAdjacentHTML('beforeend',
    `<article>
      <h3>${work.title}</h3>
      <a href="${gitHubPageUrl + work.gitHubName}" target="_blank">
        ${work.description}
      </a>
      <a href="${gitHubPageUrl + work.gitHubName}" target="_blank">
        <img src="img/${work.title.replace(/\s+/g, '_').toLowerCase()}.png">
      </a>
      <a href="${gitHubSourceUrl + work.gitHubName}" target="_blank">
        View GitHub Source
      </a>
    </article>`);
  }
})