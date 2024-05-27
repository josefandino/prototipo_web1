// var menuItems = document.querySelectorAll('#menu li a');

// menuItems.forEach(function(item) {
//   item.addEventListener('click', function() {
//     menuItems.forEach(function(item) {
//       item.parentNode.classList.remove('active');
//     });
//     this.parentNode.classList.add('active');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const rowLeft = document.getElementById('rowLeft');
  const rowRight = document.getElementById('rowRight');
  const menu = document.getElementById('menu');
  console.log('menu', menu);

  // Initially hide rowRight
  rowRight.querySelector('img').classList.add('hidden');

  rowLeft.addEventListener('click', () => {
    menu.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    rowLeft.querySelector('img').classList.add('hidden');
    rowRight.querySelector('img').classList.remove('hidden');
  });

  rowRight.addEventListener('click', () => {
    menu.scrollTo({
      top: menu.scrollHeight,
      behavior: 'smooth'
    });
    rowRight.querySelector('img').classList.add('hidden');
    rowLeft.querySelector('img').classList.remove('hidden');
  });
});


