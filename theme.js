function toggleTheme() {
  const body = document.body;
  if (body.style.background === 'white') {
    body.style.background = '#101010';
    body.style.color = '#00ff88';
  } else {
    body.style.background = 'white';
    body.style.color = '#101010';
  }
}
