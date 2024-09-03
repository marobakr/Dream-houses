const fs = require("fs");
const path = require("path");

// Paths to the source (English) and target (Arabic) JSON files
const enFilePath = path.join(__dirname, "src", "assets", "i18n", "en.json");
const arFilePath = path.join(__dirname, "src", "assets", "i18n", "ar.json");

// Read the English JSON file
fs.readFile(enFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading English JSON file:", err);
    return;
  }

  // Parse the English JSON content
  const enTranslations = JSON.parse(data);

  // Create an Arabic JSON file with the same structure
  const arTranslations = {};

  // Copy the structure from the English JSON to the Arabic JSON
  for (const key in enTranslations) {
    if (Object.hasOwnProperty.call(enTranslations, key)) {
      if (typeof enTranslations[key] === "object") {
        arTranslations[key] = {}; // Initialize as an empty object if the English value is an object
        for (const subKey in enTranslations[key]) {
          if (Object.hasOwnProperty.call(enTranslations[key], subKey)) {
            arTranslations[key][subKey] = ""; // Leave empty for manual translation
          }
        }
      } else {
        arTranslations[key] = ""; // Leave empty for manual translation
      }
    }
  }

  // Write the Arabic JSON file
  fs.writeFile(arFilePath, JSON.stringify(arTranslations, null, 2), (err) => {
    if (err) {
      console.error("Error writing Arabic JSON file:", err);
      return;
    }
    console.log(
      "Successfully generated ar.json with the same structure as en.json."
    );
  });
});
