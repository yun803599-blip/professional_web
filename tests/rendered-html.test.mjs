import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

const readProjectFile = (path) => readFile(new URL(path, projectRoot), "utf8");

test("portfolio source contains the finished professional experience", async () => {
  const [page, layout] = await Promise.all([
    readProjectFile("app/page.tsx"),
    readProjectFile("app/layout.tsx"),
  ]);

  assert.match(layout, /title:\s*"企业 AI 专业作品集"/);
  assert.match(page, /AI Systems Portfolio/);
  assert.match(page, /Enterprise AI Product · System Design · Governance/);
  assert.match(page, /className="header-actions"/);
  assert.match(page, /className="eyebrow-dot"/);
  assert.match(page, /aria-controls="mobile-navigation"/);
  assert.doesNotMatch(page, /hello@example\.com/);
  assert.doesNotMatch(page, /href="#"/);
});

test("public view hides editing tools and keeps reveal content available", async () => {
  const css = await readProjectFile("app/globals.css");

  assert.match(css, /\.eyebrow-dot\s*\{/);
  assert.match(css, /\.reveal\s*\{\s*opacity:\s*1;\s*transform:\s*none;/);
  assert.match(css, /\.edit-panel\s*\{[\s\S]*?display:\s*none;/);
  assert.match(css, /\.edit-panel\.is-enabled\s*\{\s*display:\s*flex;/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /@media \(max-width:\s*700px\)[\s\S]*?\.header-contact\s*\{\s*display:\s*none;/);
});

test("mobile navigation and opt-in editor expose accessible state", async () => {
  const script = await readProjectFile("public/portfolio.js");

  assert.match(script, /setAttribute\("aria-hidden", "true"\)/);
  assert.match(script, /setAttribute\("aria-label", isOpen \? "展开导航" : "关闭导航"\)/);
  assert.match(script, /event\.key === "Escape"/);
  assert.match(script, /get\("edit"\) === "1"/);
  assert.match(script, /classList\.add\("is-enabled"\)/);
  assert.match(script, /window\.addEventListener\("load"/);
});
