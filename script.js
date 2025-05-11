//storing data
function saveThemePreference(theme) {
  localStorage.setItem('theme', theme);
  console.log(`Theme set to ${theme}`);
}

//retreiving data
function loadThemePreference() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.body.className = theme; // Apply theme
    console.log(`Loaded ${theme} theme`);
  } else {
    console.log('No theme preference found');
  }
}

//toggle theme
document.getElementById('theme-toggle').addEventListener('click', () => {
  const currentTheme = document.body.className;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.className = newTheme;
  saveThemePreference(newTheme); // Save new theme preference
});
