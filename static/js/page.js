document.addEventListener('click', function (event) {
  var button = event.target.closest('.video-launch');
  if (!button) return;
  var id = button.getAttribute('data-youtube');
  if (!/^[\w-]{11}$/.test(id || '')) return;
  var frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
  frame.title = button.getAttribute('aria-label').replace(/^Play /, '');
  frame.allow = 'autoplay; encrypted-media; picture-in-picture';
  frame.setAttribute('allowfullscreen', '');
  frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  button.replaceWith(frame);
  frame.focus();
});
