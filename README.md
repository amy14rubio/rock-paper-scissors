# Project Overview

This project is a command-line Rock–Paper–Scissors game built with Node.js. The application allows users to play multiple rounds against the computer, view game statistics, and exit the program through an interactive menu. It uses class-based design to separate game logic from user interaction and manages gameplay flow using callbacks.

## Key Features & Usage Example

After running the application, the user is presented with a menu of options. They can:

1. Play a round of Rock–Paper–Scissors
2. View gameplay statistics, including wins, losses, ties, and win rate
3. Exit the application

When playing a round, the user selects Rock, Paper, Scissors, or a random choice. The game then displays an animated countdown using ASCII art, reveals the computer’s choice, and determines the winner. After the round finishes, the user is returned to the main menu.

This application demonstrates an interactive CLI game experience with animated output and persistent game statistics.

## Setup

Follow these steps to get started:

```console
// Clone the repo
git clone [repo_url]
cd [repo_name]

// Install dependencies
npm install

// Run the application
node app.js
```

## Key Technologies & Packages

- Node.js
- readline
