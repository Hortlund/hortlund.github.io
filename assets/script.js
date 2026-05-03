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
