
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */


const toggleSwitch = document.getElementById('dark-mode-toggle');

  // Add event listener for toggle switch changes
  toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
      // Apply dark mode
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); // Save the preference in localStorage
    } else {
      // Apply light mode
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); // Save the preference in localStorage
    }
  });

  // Check Local Storage for Theme on Page Load
  document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = localStorage.getItem('theme'); // Get saved theme
    if (currentTheme) {
      // Apply the saved theme
      document.documentElement.setAttribute('data-theme', currentTheme);
      // If dark mode was saved, set the checkbox to checked
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }
  });


function closeLabel() {
  document.getElementById("constructionLabel").style.display = "none";
}
  