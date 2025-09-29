// Load shared head content
fetch('../partials/head.html')
  .then(response => response.text())
  .then(data => {
    // Insert shared head elements before </head>
    document.head.insertAdjacentHTML('beforeend', data);

    // Set the page-specific title
    document.title = "My Site | " + pageTitle;
  })
  .catch(error => console.error('Error loading head:', error));
