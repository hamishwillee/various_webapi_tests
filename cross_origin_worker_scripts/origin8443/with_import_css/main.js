// main.js

// 1. Import the CSS file using the 'with' attribute 
//    to indicate it should be loaded as a CSS module (a Constructable Stylesheet).
import exampleStyles from "./example_styles.css" with { type: "css" }; 

// 2. Log the imported object to show it's a CSSStyleSheet instance
console.log("Imported Stylesheet:", exampleStyles);

// 3. Apply the imported stylesheet to the document's adoptedStyleSheets array.
//    This is the modern way to apply Constructable Stylesheets.
try {
    document.adoptedStyleSheets = [exampleStyles];
    console.log("Stylesheet successfully adopted by the document.");
} catch (error) {
    console.error("Failed to adopt stylesheet. Ensure your browser supports 'Constructable Stylesheets' and 'Import Attributes' for CSS:", error);
}

// Optional: Change the text of the target element to confirm script ran
document.getElementById('target-element').textContent = "Styles applied via Module!";