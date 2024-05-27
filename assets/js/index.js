var menuItems = document.querySelectorAll('#menu li a');

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    menuItems.forEach(function(item) {
      item.parentNode.classList.remove('active');
    });
    this.parentNode.classList.add('active');
  });
});