# GitHub User Finder Application

A simple web application to search for GitHub users and display their profiles, repositories, and followers using the GitHub API.

## Features

- Search GitHub users by username.
- Display profile details like name, avatar, location, and more.
- Show a list of public repositories with the latest push date.
- Display user followers and links to their GitHub profiles.

## Technologies Used

- HTML
- TailwindCSS
- JavaScript
- GitHub API

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/github-user-finder.git
   ```
2. Navigate to the project directory:
   cd github-user-finder

3. Run the app locally by opening index.html in your browser.

## Usage

Enter a GitHub username in the search bar.
View profile information, repositories, and followers of the searched user.

## API Reference

GET /users/:username - Retrieves profile information.
GET /users/:username/repos - Retrieves a list of repositories.
GET /users/:username/followers - Retrieves a list of followers.
