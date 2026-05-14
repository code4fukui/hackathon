# hackathon

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This repository contains the open data, presentation videos, and source code from the FUKUI Open Data Hackathon held on July 16, 2022.

## Live Demos

- **[Presentation Videos](https://code4fukui.github.io/hackathon/movie.html)**: Watch the final presentation videos from each team. The page dynamically loads project data to display each video alongside links to the team's slides and GitHub repository. Presentations include concepts like a "Camp Pass" mobile app and a tourism project involving railway tunnels.
- **[CSV Data Viewer](https://code4fukui.github.io/hackathon/)**: An interactive table view of the hackathon's raw project data, powered by the `csv-viewer.js` web component.

## Open Data

The data for the event is available in CSV format, containing links to each team's resources.

- **[2022-07-16 FUKUI Tourism Ideathon & Hackathon Data](https://code4fukui.github.io/hackathon/20220716.csv)**: Contains team names, project titles, and URLs for slides, GitHub repositories, and presentation videos.

## Technical Overview

This repository uses simple web technologies and utility scripts to organize and present the hackathon results.

- **`index.html`**: A viewer that renders the raw CSV data into an HTML table.
- **`movie.html`**: A page that parses `20220716.csv` to dynamically generate a gallery of project videos, titles, and resource links.
- **`20220716/makethumbnail.sh`**: A utility script using FFmpeg to extract the first frame of each presentation video (`.mov`) to serve as a thumbnail (`.jpg`).
- **`makemd.js`**: A simple script to read the CSV and output a Markdown-formatted list of projects and their GitHub links to the console.

## License

MIT License