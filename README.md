# Sticky fluid sidebar navigation

**It is intended to solve these common issues:**

 1. Sticky sidebar which is enabled once user scrolls some px down the page;
 2. Given dynamic content and fluid layout size, sticky nav should be able to preserve its position when screen is resized;
 3. Given the fluid layout sticky nav should always preserve its width.

*This solution is counting on invisible anchor element in order to correctly obtain sidebar's top position. Needed when page is reloaded with some scroll.*

## Usage
Run `npm install` to install packages

Run `npm start` to compile the files in `dist/` folder and start webpack server

## Resources
Codepen: http://codepen.io/moubi/pen/ALpmwy
