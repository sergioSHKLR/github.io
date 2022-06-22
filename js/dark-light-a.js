var darkMode;
if (localStorage.getItem('dark-mode')) {
  darkMode = localStorage.getItem('dark-mode');
} else {
  darkMode = 'light';
}
localStorage.setItem('dark-mode', darkMode);
if (localStorage.getItem('dark-mode') == 'dark') {
  $('body').addClass('dark');
  $('.dark-button').hide();
  $('.light-button').show();
}
$('.dark-button').on('click', function () {
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');
  localStorage.setItem('dark-mode', 'dark');
});
$('.light-button').on('click', function () {
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  localStorage.setItem('dark-mode', 'light');
});