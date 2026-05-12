const currentPage = window.location.pathname.split("/").pop() || "index.html";
const configuredNavPage = document.body.dataset.navPage;
const navPage = configuredNavPage || (currentPage.startsWith("app-") ? "apps.html" : currentPage);

document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href");
  const hrefPage = href.split("/").filter(Boolean).pop() || "index.html";
  if (hrefPage === navPage || (navPage === "" && hrefPage === "index.html")) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  const relTokens = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
  relTokens.add("noopener");
  relTokens.add("noreferrer");
  link.setAttribute("rel", Array.from(relTokens).join(" "));
});

const lilPostList = document.querySelector('[data-lil-post-list]');
if (lilPostList) {
  const searchInput = document.querySelector('[data-lil-search]');
  const tagFilter = document.querySelector('[data-lil-tag-filter]');
  const countNode = document.querySelector('[data-lil-post-count]');
  const emptyNode = document.querySelector('[data-lil-empty]');
  const posts = Array.from(lilPostList.querySelectorAll('.lil-post-card'));

  posts
    .sort((a, b) => {
      const dateDiff = new Date(b.dataset.date || 0) - new Date(a.dataset.date || 0);
      if (dateDiff !== 0) return dateDiff;
      return Number(b.dataset.order || 0) - Number(a.dataset.order || 0);
    })
    .forEach((post) => lilPostList.appendChild(post));

  const tags = Array.from(new Set(posts.flatMap((post) => (post.dataset.tags || '').split(',').map((tag) => tag.trim()).filter(Boolean)))).sort();
  let activeTag = 'all';

  const renderTagButton = (tag, label = tag) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lil-tag-button';
    button.textContent = label;
    button.dataset.tag = tag;
    button.setAttribute('aria-pressed', tag === activeTag ? 'true' : 'false');
    button.addEventListener('click', () => {
      activeTag = activeTag === tag && tag !== 'all' ? 'all' : tag;
      applyLilFilters();
    });
    return button;
  };

  tagFilter?.appendChild(renderTagButton('all', 'all'));
  tags.forEach((tag) => tagFilter?.appendChild(renderTagButton(tag)));

  const normalize = (value) => value.toLowerCase().trim();

  function applyLilFilters() {
    const query = normalize(searchInput?.value || '');
    let visible = 0;

    posts.forEach((post) => {
      const tagsText = post.dataset.tags || '';
      const text = normalize(`${post.textContent || ''} ${tagsText}`);
      const matchesQuery = !query || text.includes(query);
      const matchesTag = activeTag === 'all' || tagsText.split(',').map((tag) => tag.trim()).includes(activeTag);
      const show = matchesQuery && matchesTag;
      post.hidden = !show;
      if (show) visible += 1;
    });

    tagFilter?.querySelectorAll('.lil-tag-button').forEach((button) => {
      button.setAttribute('aria-pressed', button.dataset.tag === activeTag ? 'true' : 'false');
    });

    if (countNode) countNode.textContent = `${visible} of ${posts.length} posts`;
    if (emptyNode) emptyNode.hidden = visible !== 0;
  }

  searchInput?.addEventListener('input', applyLilFilters);
  applyLilFilters();
}
