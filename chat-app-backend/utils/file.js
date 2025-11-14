const fs = require("fs");
const path = require("path");

const readJSON = (fileName) => {
  const filePath = path.join(__dirname, "..", "mock", fileName);
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const writeJSON = (fileName, data) => {
  const filePath = path.join(__dirname, "..", "mock", fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readJSON, writeJSON };
