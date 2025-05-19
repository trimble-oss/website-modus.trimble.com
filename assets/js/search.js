var lunrIndex, pagesIndex;
function endsWith(a, b) {
  return -1 !== a.indexOf(b, a.length - b.length);
}
function initLunr() {
  endsWith(baseurl, '/') || (baseurl += '/');
  fetch(baseurl + 'index.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      pagesIndex = data;
      lunrIndex = lunr(function () {
        this.ref('uri'),
          this.field('title', { boost: 15 }),
          this.field('tags', { boost: 10 }),
          this.field('content', { boost: 5 }),
          this.pipeline.remove(lunr.stemmer),
          this.searchPipeline.remove(lunr.stemmer),
          pagesIndex.forEach(function (a) {
            this.add(a);
          }, this);
      });
    })
    .catch((error) => {
      console.error('Error getting Hugo index file:', error);
    });
}
function search(a) {
  return lunrIndex.search(a + '^100 ' + a + '*^10 *' + a + '^10 ' + a + '~2^1').map(function (a) {
    return pagesIndex.filter(function (b) {
      return b.uri === a.ref;
    })[0];
  });
}
initLunr();
document.addEventListener('DOMContentLoaded', function () {
  new autoComplete({
    selector: document.getElementById('search-by'),
    source: function (a, b) {
      b(search(a));
    },
    renderItem: function (a, b) {
      var c = a.content.match('(?:\\s?(?:[\\w]+)\\s?){0,2}' + b + '(?:\\s?(?:[\\w]+)\\s?){0,' + 2 + '}');
      return (
        (a.context = c),
        '<div class="autocomplete-suggestion" data-term="' +
          b +
          '" data-title="' +
          a.title +
          '" data-uri="' +
          a.uri +
          '?q=' +
          b +
          '#' +
          b +
          '" data-context="' +
          a.context +
          '">\xBB ' +
          a.title +
          '<div class="context">' +
          (a.context || '') +
          '</div></div>'
      );
    },
    onSelect: function (a, b, c) {
      location.href = c.getAttribute('data-uri');
    },
  });
});
