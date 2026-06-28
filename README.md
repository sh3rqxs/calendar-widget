# 🗓️ Calendar Widget
A simple desktop calendar widget built with HTML, CSS, JavaScript, and Electron. This project is a replica of [Nashallery's Little Calendar](https://github.com/nasha-wanich/little-calendar), designed to sit on your desktop as a lightweight, always-visible calendar.

<div align="center">
    <img alt="Screenshot" src="Screenshot.png" width="294">
</div>

## Features
- Displays the current day and month
- Transparent, frameless window
- Stays visible on your desktop
- Draggable, move it anywhere on screen
- Lightweight and simple

## Design File
Figma design for this project: [Calendar Widget](https://www.figma.com/community/file/1652860315453695884/calendar-widget?q_id=bcf4689f-d47b-4542-953f-169b89ff1f96) 🗓️

## Project Structure
| Folder / File | Purpose |
|------|---------|
| `assets/fonts/` | Houses the `Pixelify Sans` and `Pixeboy` fonts used for the title and date |
| `.gitignore` | Excludes files like `node_modules` from version control |
| `index.html` | Contains the calendar's markup, including the title pill and date panel, and sets the draggable layout |
| `main.js` | Creates the frameless, transparent Electron window and loads `index.html` |
| `package-lock.json` | Locked dependency versions for consistent installs |
| `package.json` | Project metadata, scripts, and dependencies |
| `script.js` | Reads the current date and updates the day/month text on load |
| `style.css` | Defines the widget's look, including fonts and colors |

## Getting Started
Want to try it out? It only takes a couple of steps.

### Clone the repository
```bash
git clone https://github.com/sh3rqxs/calendar-widget.git
cd calendar-widget
```

### Install dependencies
Make sure you have [Node.js](https://nodejs.org/en) installed on your machine, then run:

```bash
npm install
```

### Run the app
```bash
npm start
```

The calendar will appear on your desktop, showing the current day and month. Click and drag it anywhere on your screen to reposition it.