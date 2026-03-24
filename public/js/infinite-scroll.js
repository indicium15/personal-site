(function() {
  var sentinel = document.getElementById('infinite-scroll-sentinel');
  var postsContainer = document.querySelector('.posts');

  if (!sentinel || !postsContainer) return;

  var nextPageUrl = sentinel.getAttribute('data-next-page');
  var loading = false;
  var statusEl = sentinel.querySelector('.infinite-scroll-status');

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }

  function loadMorePosts() {
    if (loading || !nextPageUrl) return;
    loading = true;
    setStatus('Loading...');

    fetch(nextPageUrl)
      .then(function(response) { return response.text(); })
      .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var newPostsContainer = doc.querySelector('.posts');

        if (newPostsContainer) {
          Array.from(newPostsContainer.childNodes).forEach(function(node) {
            postsContainer.appendChild(document.importNode(node, true));
          });
        }

        var newSentinel = doc.getElementById('infinite-scroll-sentinel');
        nextPageUrl = newSentinel ? newSentinel.getAttribute('data-next-page') : null;

        setStatus('');
        if (!nextPageUrl) {
          observer.unobserve(sentinel);
        }
        loading = false;
      })
      .catch(function() {
        setStatus('');
        loading = false;
      });
  }

  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      loadMorePosts();
    }
  }, { rootMargin: '300px' });

  observer.observe(sentinel);
})();