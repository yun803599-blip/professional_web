(() => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const header = document.querySelector("[data-header]");

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "展开导航");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.classList.remove("is-open");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "展开导航" : "关闭导航");
    mobileMenu?.setAttribute("aria-hidden", String(isOpen));
    mobileMenu?.classList.toggle("is-open", !isOpen);
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) closeMenu();
  }, { passive: true });

  // Header scroll state
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll spy: highlight active nav link
  const navLinks = Array.from(document.querySelectorAll(".site-header nav a"));
  const sections = navLinks
    .map((a) => {
      const id = a.getAttribute("href")?.replace("#", "");
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && navLinks.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = navLinks.find((a) => a.getAttribute("href") === `#${entry.target.id}`);
          if (!link) return;
          navLinks.forEach((a) => a.classList.toggle("is-active", a === link));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => s && spy.observe(s));
  }

  // Reveal on scroll
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }
  document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = String(new Date().getFullYear()); });

  const marketGrid = document.querySelector("[data-market-grid]");
  const marketButton = document.querySelector("[data-market-more]");
  const marketLabel = document.querySelector("[data-market-label]");

  marketButton?.addEventListener("click", () => {
    const isExpanded = marketButton.getAttribute("aria-expanded") === "true";
    marketButton.setAttribute("aria-expanded", String(!isExpanded));
    marketGrid?.classList.toggle("is-expanded", !isExpanded);
    if (marketLabel) marketLabel.textContent = isExpanded ? "查看更多 10 项" : "收起更多能力";
  });

  // ============ Editable mode ============
  const STORE_KEY = "portfolio-edits";
  const editables = () => Array.from(document.querySelectorAll("[data-editable]"));
  const readStore = () => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); }
    catch { return {}; }
  };
  const writeStore = (obj) => localStorage.setItem(STORE_KEY, JSON.stringify(obj));

  // Apply saved edits on load
  const saved = readStore();
  editables().forEach((el) => {
    const key = el.getAttribute("data-editable");
    if (key && saved[key] != null) el.textContent = saved[key];
  });

  const toggleBtn = document.querySelector("[data-edit-toggle]");
  const exportBtn = document.querySelector("[data-edit-export]");
  const resetBtn = document.querySelector("[data-edit-reset]");
  let editing = false;

  if (new URLSearchParams(window.location.search).get("edit") === "1") {
    document.documentElement.classList.add("is-edit-enabled");
  }

  const setEditing = (on) => {
    editing = on;
    document.documentElement.classList.toggle("is-editing", on);
    toggleBtn?.setAttribute("aria-pressed", String(on));
    if (toggleBtn) toggleBtn.textContent = on ? "完成" : "编辑";
    editables().forEach((el) => { el.setAttribute("contenteditable", on ? "true" : "false"); });
  };

  toggleBtn?.addEventListener("click", () => setEditing(!editing));

  // Autosave on input (event delegation)
  document.addEventListener("input", (e) => {
    const el = e.target;
    if (!(el instanceof HTMLElement)) return;
    const key = el.getAttribute?.("data-editable");
    if (!key) return;
    const store = readStore();
    store[key] = el.textContent;
    writeStore(store);
  });

  // Export all current text as JSON
  exportBtn?.addEventListener("click", () => {
    const store = readStore();
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-content.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  // Reset to source defaults
  resetBtn?.addEventListener("click", () => {
    if (confirm("确定要清空所有自定义修改，恢复成源码默认内容吗？")) {
      localStorage.removeItem(STORE_KEY);
      location.reload();
    }
  });
})();
