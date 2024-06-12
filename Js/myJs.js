const anchors = document.querySelectorAll('.anchor');

// Check if there's an active anchor in localStorage
const activeAnchorId = localStorage.getItem('activeAnchorId');
if (activeAnchorId) {
  const activeAnchor = document.querySelector(`[data-id="${activeAnchorId}"]`);
  if (activeAnchor) {
    activeAnchor.classList.add('active');
  }
}

anchors.forEach(anchor => {
  anchor.addEventListener('click', function() {
    const id = this.getAttribute('data-id');

    // Remove 'active' class from all anchors
    anchors.forEach(a => a.classList.remove('active'));

    // Add 'active' class to the clicked anchor
    this.classList.add('active');

    // Save the active anchor id to localStorage
    localStorage.setItem('activeAnchorId', id);
  });
});
