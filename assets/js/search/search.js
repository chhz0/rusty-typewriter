// base from https://github.com/frjo/hugo-theme-zen/blob/main/assets/js/search.js
import * as params from '@params';

(function () {
  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: ['title', 'tags', 'content', 'date'],
      store: ['title', 'summary', 'date', 'permalink'],
    },
    tokenize: 'forward',
  });

  function showResults(items) {
    const template = document.querySelector('template').content;
    const fragment = document.createDocumentFragment();

    const results = document.querySelector('.search-results');
    results.textContent = '';

    for (const id in items) {
      const item = items[id];
      const result = template.cloneNode(true);
      const a = result.querySelector('a');
      const time = result.querySelector('time');
      const content = result.querySelector('.content');
      a.innerHTML = item.title;
      a.href = item.permalink;
      time.innerText = item.date;
      content.innerHTML = item.summary;
      fragment.appendChild(result);
    }
    results.appendChild(fragment);
  }

  function doSearch(q) {
    const query = q || document.querySelector('.search-text').value.trim();
    const results = index.search({
      query: query,
      enrich: true,
      limit: params.searchLimit,
    });
    const items = {};
    results.forEach(function (result) {
      result.result.forEach(function (r) {
        items[r.doc.permalink] = r.doc;
      });
    });
    showResults(items);
  }

  function enableUI(searchform) {
    searchform.addEventListener('submit', function (e) {
      e.preventDefault();
      doSearch();
    });
    searchform.addEventListener('input', function () {
      doSearch();
    });
    document.querySelector('.search-loading').classList.add('hidden');
    document.querySelector('.search-bar').classList.remove('hidden');
    document.querySelector('.search-text').focus();
  }

  function buildIndex(cb) {
    const searchindex = params.basePath + 'searchindex.json';
    document.querySelector('.search-loading').classList.remove('hidden');
    fetch(searchindex)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.forEach(function (item) {
          index.add(item);
        });
      })
      .then(cb);
  }

  const searchform = document.querySelector('.search-form');
  if (searchform) {
    buildIndex(function () {
      const q = new URLSearchParams(window.location.search).get("q");
      document.querySelector('.search-text').value = q || '';
      doSearch(q);
    });
    enableUI(searchform)
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const drawer = document.getElementById('search-drawer');
  const searchButton = document.getElementById('search-drawer-button');
  const overlay = document.getElementById('search-drawer-overlay');

  // 显示/隐藏抽屉
  overlay.addEventListener('click', toggleDrawer);

  // 在toggleDrawer函数中添加覆盖层控制
  function toggleDrawer() {
    const drawer = document.getElementById('search-drawer');
    const overlay = document.getElementById('search-drawer-overlay');

    if (drawer.classList.contains('open')) {
      drawer.classList.add('closing');
      overlay.classList.remove('visible');
      drawer.classList.remove('open');

      setTimeout(() => {
        drawer.classList.remove('closing');
        drawer.classList.add('hidden');
      }, 300);
    } else {
      drawer.classList.remove('hidden');
      setTimeout(() => {
        drawer.classList.add('open');
        document.querySelector('.search-text').focus();
      }, 10);
    }
  }

  // 点击按钮触发
  searchButton.addEventListener('click', toggleDrawer);

  // 快捷键监听
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      toggleDrawer();
    }
  });

  // 点击抽屉外部关闭
  document.addEventListener('click', function (e) {
    if (!drawer.contains(e.target) && e.target !== searchButton && drawer.classList.contains('open')) {
      drawer.classList.add('closing');
      overlay.classList.remove('visible');
      drawer.classList.remove('open');

      setTimeout(() => {
        drawer.classList.remove('closing');
        drawer.classList.add('hidden');
        drawer.style.transform  = '';
      }, 300);
    }
  });
});