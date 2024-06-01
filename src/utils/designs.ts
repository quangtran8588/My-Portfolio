//  'cards' being used to custome theme for CardInfo
const infoCards = [
  {
    card: {
      background: "radial-gradient(circle, #3b0379, #0d36a6)",
      boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
      border: "1px solid #3b5998",
    },
    image: {
      background: "radial-gradient(circle, #e0e7ff, #809fff, #001f4d)",
      boxShadow: `
        -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
      border: "1px solid #666",
      borderRadius: "10px",
    },
    tag: {
      background: "linear-gradient(to right, #6a11cb, #2575fc)",
      border: "1px solid #3b0379",
      boxShadow: `
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
    },
  },
  {
    card: {
      background: "linear-gradient(to top, #000000, #FFFF00)",
      boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
      border: "1px solid #000000",
    },
    image: {
      background: "radial-gradient(circle, #FFFF00, #FFA500)",
      boxShadow: `
        -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
      border: "1px solid #000000",
      borderRadius: "10px",
    },
    tag: {
      background: "linear-gradient(to top, #000000, #808080)",
      border: "1px solid #808080",
      boxShadow: `
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
    },
  },
  {
    card: {
      background: "linear-gradient(to bottom, #ffcccc, #660000)",
      boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
      border: "1px solid #660000",
    },
    image: {
      background: "linear-gradient(to bottom right, #ffffff, #ffcccc)",
      boxShadow: `
        -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
      border: "1px solid #660000",
      borderRadius: "10px",
    },
    tag: {
      background: "linear-gradient(to right top, #FF512F, #660000)",
      border: "1px solid #FF512F",
      boxShadow: `
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
    },
  },
  {
    card: {
      background: "linear-gradient(to bottom, #ffcccc, #660000)",
      boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
      border: "1px solid #660000",
    },
    image: {
      background: "linear-gradient(to bottom right, #ffffff, #ffcccc)",
      boxShadow: `
        -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
      border: "1px solid #660000",
      borderRadius: "10px",
    },
    tag: {
      background: "linear-gradient(to right top, #FF512F, #660000)",
      border: "1px solid #FF512F",
      boxShadow: `
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
        inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
        inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
    },
  },
];

//  'iconButtons' being used to custom Icon Buttons' background
//  The IconButton background's color is adjusted based on CardInfo theme color scheme
const iconButtons = [
  {
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "white",
    border: "1px solid #3b0379",
    boxShadow: `
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
      inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
  },
  {
    background: "radial-gradient(circle, #FFFF00, #FFA500)",
    color: "black",
    border: "1px solid #808080",
    boxShadow: `
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
      inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
  },
  {
    background: "linear-gradient(to right top, #FF512F, #660000)",
    color: "white",
    border: "1px solid #FF512F",
    boxShadow: `
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
      inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
  },
  {
    background: "linear-gradient(to right top, #FF512F, #660000)",
    color: "white",
    border: "1px solid #FF512F",
    boxShadow: `
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      0.1em 0.2em 0.2em rgba(255, 211, 211, 0.3),
      inset -0.1em -0.2em 0.2em rgba(255, 211, 211, 0.5),
      inset 1px 1px 0px rgba(255, 211, 211, 0.5)`,
  },
];

const textCards = [
  {
    background: "linear-gradient(to bottom, #3b0379, #0d36a6)",
    boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
    border: "1px solid #3b5998",
    color: "white",
  },
  {
    background: "linear-gradient(to bottom, #FFFF00, #FFA500)",
    boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
    border: "1px solid #000000",
    color: "black",
  },
  {
    background: "linear-gradient(to bottom, #ffcccc, #660000)",
    boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
    border: "1px solid #660000",
  },
  {
    background: "linear-gradient(to bottom, #ffcccc, #660000)",
    boxShadow: `
        0px 3px 4px 3px rgba(255, 211, 211, 0.5),
        0px -3px 4px 3px rgba(255, 211, 211, 0.5),
        inset -2px -2px 0px rgba(255, 211, 211, 0.7),
        inset 2px 2px 0px rgba(255, 211, 211, 0.7)`,
    border: "1px solid #660000",
  },
];

export { infoCards, iconButtons, textCards };
