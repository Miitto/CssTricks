---
layout: ../../../../layouts/Markdown.astro
title: styles.scss
---

```scss
// Set the size of the page to fill the entire screen, default font to Roboto (with sans-serif as a backup), and set the background color to a dark grey with white text
html,
body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    height: 100%;
    width: 100%;
    background-color: #333;
    color: #fff;
}

// Default styling for all elements, no margin or padding
// box-sizing set to border-box. This makes it easier to work with padding and borders, as they are included in the width and height of the element.
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// Default styling for interactive elements
input,
button,
textarea {
    // 0.5em vertical padding, 1em horizontal padding
    padding: 0.5em 1em;
    border: 1px solid #5555;
    border-radius: 5px;
    background: #222;
    color: white;

    // Styles for input while typing
    &:focus {
        outline: none;
        border-color: #007bff;
    }

    // Styles for Hover
    &:hover {
        filter: brightness(1.2);
    }

    // Styles for when clicked
    &:active {
        filter: brightness(0.8);
    }
}

// Set vertical margin for horizontal rules
hr {
    margin-block: 1em;
}

// Styling for the notification
.notif {
    // Set the position to fixed, so the notification stays in the same place on the screen, 20px from the bottom and 20px from the left
    position: fixed;
    bottom: 20px;
    left: 20px;

    // Set width to fit the text, with 50% of the font size as padding
    width: fit-content;
    padding: 0.5em;

    // Set background color to be black, with low opacity
    background: #0005;

    // Style the border, 1px thick border of semi transparent grey with 5px radius corners
    border-radius: 5px;
    border: 1px solid #5555;

    // Disable pointer events, so the notification cannot be clicked - allows for elements behind it to be clicked
    pointer-events: none;

    // Delay the fade out animation by 5 seconds, then fade out over 1 second.
    // Forwards means that properties set by the animation will persist after it finishes
    animation: fadeOut 1s 5s forwards;

    // If the element also has the success class, make the background green
    &.success {
        background: #0c93;
    }

    // If the element also has the error class, make the background red
    &.error {
        background: #c003;
    }
}

// Keyframes for the fade out animation, from opacity 1 to 0
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

// Styling for the new button
.new {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    background-color: #0c9;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    font-size: 30px;
    border: none;
    padding: 0;

    /* Gives the button a 3D effect */
    box-shadow: -1px -1px 1px #000 inset, 1px 1px 1px #fff inset;
    /* Inverts the 3D effect when the button is clicked, to make it appear pushed */
    &:active {
        box-shadow: 1px 1px 1px #000 inset, -1px -1px 1px #fff inset;
    }
}
```
