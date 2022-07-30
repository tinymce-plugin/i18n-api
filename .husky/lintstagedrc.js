module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,.!(browserslist)*rc}": ["prettier --write--parser json"],
  "package.json": ["prettier --write"]
};
