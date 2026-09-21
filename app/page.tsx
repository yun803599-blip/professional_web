const capabilities = [
  { index: "01", title: "AI 系统设计", en: "System Design", text: "设计可靠的 AI 工作流、系统边界与人在回路机制，让复杂能力真正可运行。" },
  { index: "02", title: "AI 产品工程", en: "Product Engineering", text: "从业务问题出发，将 AI 能力转化为可用产品，并完成从原型到规模化交付。" },
  { index: "03", title: "AI 治理与风险", en: "Governance & Risk", text: "把权限、审计、生命周期和风险控制嵌入 AI 的真实运行方式。" },
  { index: "04", title: "AI 组织落地", en: "Adoption & Scale", text: "建立采用、复用、反馈和持续优化机制，让 AI 能力在组织中长期生长。" },
];

const projects = [
  {
    number: "01",
    status: "Archived / Prototype",
    title: "企业 AI 数据分析助手",
    cn: "Enterprise AI Data Analyst",
    primary: "AI Product & Engineering",
    secondary: "AI System Design / Governance & Controls",
    problem: "业务人员无法灵活、即时地查询经营数据，而自然语言取数又面临权限、SQL 准确性和业务口径不稳定的问题。",
    contribution: "我负责从产品方案到 AI 工作流的整体设计，搭建自然语言查询、权限路由、SQL 生成与校验、API / MCP 能力调用和业务分析链路，并持续围绕稳定性与可控性迭代。",
    decision: "从「长 Prompt + 自由 SQL」转向「缩小搜索空间 + 规则校验 + 权限进入执行链路」。",
    outcome: "完成自然语言查询、五级权限、SQL 校验和经营分析核心路径验证，后续转交 IT 建设更完整系统。",
    tags: ["Agent Workflow", "Text-to-SQL", "Permission Control"],
    metric: "五级权限模型",
    className: "project-lime",
  },
  {
    number: "02",
    status: "内部产品 · Live",
    title: "企业模板与知识复用平台",
    cn: "Enterprise Template Marketplace",
    primary: "AI Product & Engineering",
    secondary: "AI Adoption & Scale",
    problem: "企业内部大量优秀工具、模板和实践散落在个人手中，找不到、用不起来，也缺少持续贡献和复用的机制。",
    contribution: "我从 0 到 1 设计并推动模板市场落地，覆盖产品机制、数据结构、审核与激励，并参与前后端、OAuth、缓存、对象存储、部署和持续迭代。",
    decision: "从「列表页」改成「复用市场」；用 Bitable 而非自建数据库；把排行榜和激励做成产品机制。",
    outcome: "25 个模板，10,490 次使用，236 次点赞；单个案例 2,330 次复用。",
    tags: ["Full-stack Product", "OAuth & Platform Integration", "Growth Loop"],
    metric: "10K+ template uses",
    className: "project-blue",
  },
  {
    number: "03",
    status: "控制体系 · Controls",
    title: "企业 AI 治理与控制体系",
    cn: "Enterprise AI Governance & Control System",
    primary: "AI Governance, Risk & Controls",
    secondary: "AI Adoption & Scale",
    problem: "企业快速引入 AI 工具和模型后，工具入口、模型来源、API Key、权限、审批、使用状态和退出机制分散，风险难以被统一识别和追踪。",
    contribution: "我参与构建 AI 工具全生命周期治理体系，从模型与工具合规排查、风险识别，到准入分类、审批、API Key 与权限管理、台账、整改和退出机制。",
    decision: "从「制度要求」转向「制度 + 流程 + 台账 + 权限 + 生命周期控制」。",
    outcome: "完成 AI 工具与模型排查、风险分级、整改建议，并形成覆盖申请、评估、审批、开通、使用、变更和退出的管理机制。",
    tags: ["AI Tool Governance", "API Key Lifecycle", "Audit Controls"],
    metric: "全生命周期治理",
    className: "project-sand",
  },
];

const evidence = [
  // 8 atomic capabilities (default visible)
  { number: "01", category: "系统设计", title: "Reliable NL2SQL", text: "通过字段约束、业务口径映射、SQL 校验与异常兜底，让自然语言查询从「能生成」走向「结果可验证、错误可控制」。", project: "数据分析助手" },
  { number: "02", category: "治理控制", title: "Permission Routing", text: "让身份与数据权限直接进入查询执行链路，避免越界与业务口径漂移。", project: "数据分析助手" },
  { number: "03", category: "系统设计", title: "Semantic Mapping", text: "把自然语言问题映射到统一、可维护的指标定义，稳定业务语义。", project: "数据分析助手" },
  { number: "04", category: "产品工程", title: "Agent Decomposition", text: "把复杂任务拆成可观察、可验证的工作步骤，支撑可靠性与持续迭代。", project: "数据分析助手" },
  { number: "05", category: "产品工程", title: "Template Data Model", text: "建立支持分类、搜索、版本与复用的内容模型，让沉淀可被发现与复用。", project: "模板市场" },
  { number: "06", category: "产品工程", title: "Platform Integration", text: "连接企业身份体系，完成登录与权限上下文传递，降低接入成本。", project: "模板市场" },
  { number: "07", category: "组织落地", title: "Growth Loop", text: "通过审核、排行榜与反馈形成持续贡献循环，让平台自我生长。", project: "模板市场" },
  { number: "08", category: "治理控制", title: "Tool Lifecycle", text: "覆盖申请、评估、审批、权限、使用、整改与退出的可执行控制。", project: "治理体系" },
  // 10 granular evidence cards (behind "view more")
  { number: "09", category: "系统设计", title: "SQL Validation", text: "对 AI 生成 SQL 做业务规则、字段与范围校验，降低「语法正确但业务错误」的风险。", project: "数据分析助手" },
  { number: "10", category: "系统设计", title: "Fail-safe & Fallback", text: "识别高风险结果，提供拒答、重试与人工确认，控制错误传播。", project: "数据分析助手" },
  { number: "11", category: "产品工程", title: "Cache & Storage", text: "平衡内容访问性能、文件管理与部署成本。", project: "模板市场" },
  { number: "12", category: "组织落地", title: "Usage Feedback", text: "用浏览、使用与复用数据支持产品持续迭代。", project: "模板市场" },
  { number: "13", category: "治理控制", title: "Tool Intake", text: "按数据、模型与使用场景确定不同准入路径。", project: "治理体系" },
  { number: "14", category: "治理控制", title: "Risk Grading", text: "识别风险等级，匹配审查深度与责任角色。", project: "治理体系" },
  { number: "15", category: "治理控制", title: "API Key Lifecycle", text: "覆盖申请、发放、使用、轮换、回收与审计。", project: "治理体系" },
  { number: "16", category: "治理控制", title: "Approval Evidence", text: "保留决策依据、责任人和变更记录，支持追踪。", project: "治理体系" },
  { number: "17", category: "治理控制", title: "Remediation & Exit", text: "将风险发现转化为整改动作，并处理停用、数据迁移与密钥回收。", project: "治理体系" },
  { number: "18", category: "治理控制", title: "Permission Sync", text: "在角色或用途变化时同步调整系统访问权限。", project: "治理体系" },
];

const steps = [
  ["01", "先定义真实问题", "在选择 AI 方案之前，明确用户决策、运营约束与业务结果。"],
  ["02", "把它设计成系统", "将数据、模型、工具、权限、复核节点与失败路径放在同一张系统图中。"],
  ["03", "尽早建立证据", "优先验证风险最高的假设，同时衡量可靠性、可用性与可控性，而不只看输出质量。"],
  ["04", "让系统进入运营", "补齐产品、流程、责任人与反馈循环，让 AI 能力在组织中持续发挥作用。"],
];

const notes = [
  { type: "Field Note · 06 分钟", title: "为什么 Prompt 不是系统边界", text: "从聪明的提示词走向明确约束、结果校验与运行控制的一次实践复盘。" },
  { type: "Framework · 09 分钟", title: "从 AI 制度走向运行控制", text: "审批、权限、证据、责任人与生命周期管理，如何让治理真正可执行。" },
  { type: "Case Reflection · 07 分钟", title: "什么让企业内部 AI 产品留下来", text: "关于发现、贡献、复用、反馈和持续采用机制的产品思考。" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" data-header>
        <a className="wordmark" href="#top" aria-label="作品集首页"><span className="wordmark-mark">P</span><span>Private Portfolio</span></a>
        <nav aria-label="主导航"><a href="#work">项目 Work</a><a href="#capabilities">能力 Capabilities</a><a href="#notes">笔记 Notes</a><a href="#about">关于 About</a></nav>
        <a className="header-contact" href="#contact">联系我 · Contact</a>
        <button className="menu-button" type="button" aria-label="展开导航" aria-expanded="false" data-menu-button><span /><span /></button>
      </header>
      <div className="mobile-menu" data-mobile-menu><a href="#work">精选项目 · Work</a><a href="#capabilities">专业能力 · Capabilities</a><a href="#notes">专业笔记 · Notes</a><a href="#about">关于我 · About</a><a href="#contact">联系我 · Contact</a></div>

      <section className="hero" id="top">
        <div className="eyebrow"><span /><span data-editable="hero-eyebrow">I work across four layers of enterprise AI</span></div>
        <h1 data-editable="hero-title">Build AI systems people can actually <em>trust</em> and use.</h1>
        <p className="hero-subtitle" data-editable="hero-subtitle">让 AI 真正进入业务流程，并保持可控、可信、可持续。</p>
        <div className="hero-bottom">
          <p className="hero-copy" data-editable="hero-copy">我关注企业 AI 系统的准确性、权限、风险、产品体验和组织落地，并把这些问题转化为可运行、可控制、可衡量的产品与机制。</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">View Selected Work <span>↘</span></a><a className="button button-secondary" href="#about">About / Resume</a></div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit-dot" /></div>
        <div className="scroll-note" aria-hidden="true">向下探索 · EXPLORE <span>↓</span></div>
      </section>

      <section className="capabilities-preview reveal" id="capabilities">
        <div className="section-heading"><p>Four connected layers · 四层能力</p><h2>从系统设计到组织落地，贯穿企业 AI 的完整链路。</h2></div>
        <div className="capability-grid">
          {capabilities.map((item) => <article className="capability-card" key={item.index}><span className="card-index">{item.index}</span><div><p className="card-en" data-editable={`cap-${item.index}-en`}>{item.en}</p><h3 data-editable={`cap-${item.index}-title`}>{item.title}</h3><p data-editable={`cap-${item.index}-text`}>{item.text}</p></div><span className="card-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-kicker reveal"><span>精选项目 · Selected Work</span><span>03 个旗舰项目 · Flagship Projects</span></div>
        <div className="work-intro reveal"><h2>围绕真实企业约束，设计真正能运行的 AI 系统。</h2><p>每个项目都连接了产品判断、技术设计、运行控制与组织变化，而不止是一个演示。</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.className} reveal`} key={project.number}>
              <div className="project-top"><span>{project.number}</span><span className="status-dot" data-editable={`proj-${project.number}-status`}>{project.status}</span></div>
              <div className="project-visual" aria-hidden="true"><span className="visual-label">系统图 · SYSTEM MAP</span><div className="system-node node-a">输入 INPUT</div><div className="system-node node-b">AI</div><div className="system-node node-c">控制 CONTROL</div><div className="system-node node-d">输出 OUTPUT</div><i className="route route-a" /><i className="route route-b" /></div>
              <div className="project-body">
                <div className="project-title-block">
                  <p className="project-cn" data-editable={`proj-${project.number}-cn`}>{project.cn}</p>
                  <h3 data-editable={`proj-${project.number}-title`}>{project.title}</h3>
                  <p className="project-roles"><span data-editable={`proj-${project.number}-primary`}>{project.primary}</span><i aria-hidden="true">/</i><span data-editable={`proj-${project.number}-secondary`}>{project.secondary}</span></p>
                </div>
                <div className="project-detail">
                  <p><strong>问题 · Problem</strong><span data-editable={`proj-${project.number}-problem`}>{project.problem}</span></p>
                  <p><strong>我的贡献 · My Role</strong><span data-editable={`proj-${project.number}-contribution`}>{project.contribution}</span></p>
                  <p><strong>关键决策 · Key Decisions</strong><span data-editable={`proj-${project.number}-decision`}>{project.decision}</span></p>
                  <p><strong>结果 · Outcome</strong><span data-editable={`proj-${project.number}-outcome`}>{project.outcome}</span></p>
                </div>
              </div>
              <div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p className="project-metric" data-editable={`proj-${project.number}-metric`}>{project.metric}</p><a href="#contact" aria-label={`查看 ${project.title}`}>查看案例 <span>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-heading reveal"><p>我的工作方式 · How I Work</p><h2>从模糊问题，走向可运行的系统。</h2></div>
        <div className="process-list">
          {steps.map(([number, title, text]) => <article className="process-step reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="market-heading reveal">
          <div><p>原子能力 · Atomic Capabilities</p><h2>每张卡，都是一个可验证的最小能力单元。</h2></div>
          <p>每一张卡片对应一个可以被说明、验证并复用的具体能力；通过 View Evidence 进入对应项目的真实证据。默认展示 8 项，其余可继续展开。</p>
        </div>
        <div className="evidence-grid" data-market-grid>
          {evidence.map((item, index) => (
            <article className="evidence-card" data-extra={index >= 8 ? "true" : "false"} key={item.number}>
              <div className="market-card-top"><span>{item.number}</span><span data-editable={`evi-${item.number}-category`}>{item.category}</span></div>
              <div className="market-card-body"><p data-editable={`evi-${item.number}-project`}>{item.project}</p><h3 data-editable={`evi-${item.number}-title`}>{item.title}</h3><p data-editable={`evi-${item.number}-text`}>{item.text}</p></div>
              <a href="#work" aria-label={`查看 ${item.title} 的项目证据`}>View Evidence <span>↗</span></a>
            </article>
          ))}
        </div>
        <div className="market-more">
          <button type="button" data-market-more aria-expanded="false"><span data-market-label>查看更多 10 项</span><i aria-hidden="true">＋</i></button>
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="notes-heading reveal"><div><p>专业笔记 · Selected Notes</p><h2>持续思考，也谨慎表达。</h2></div><a href="#notes">查看全部笔记 · All Notes ↗</a></div>
        <div className="notes-grid">
          {notes.map((note, index) => <article className="note-card reveal" key={note.title}><span>0{index + 1}</span><p className="note-type" data-editable={`note-${index + 1}-type`}>{note.type}</p><h3 data-editable={`note-${index + 1}-title`}>{note.title}</h3><p data-editable={`note-${index + 1}-text`}>{note.text}</p><a href="#contact">阅读笔记 · Read <span>↗</span></a></article>)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label reveal">关于我 · About / Resume</div>
        <div className="about-copy reveal">
          <h2 data-editable="about-title">我负责连接 AI 的技术可能，与企业的真实运行。</h2>
          <p data-editable="about-copy">我的工作位于产品决策、系统可靠性、治理控制与组织采用的交叉位置。我帮助团队走出孤立的演示，建立人们能够理解、信任并持续使用的 AI 产品与运行机制。</p>
          <div className="about-actions"><a className="button button-dark" href="#contact">下载简历 · Resume <span>↓</span></a><a href="#work">查看项目经历 ↗</a></div>
        </div>
        <div className="about-facts reveal"><div><span>专注方向 · Focus</span><p>企业 AI 系统 · Enterprise AI</p></div><div><span>工作领域 · Across</span><p>产品 · 工程 · 治理 · 组织落地</p></div><div><span>所在地 · Based in</span><p>中国 · 支持远程协作</p></div></div>
      </section>

      <footer id="contact">
        <div className="footer-top reveal"><p>有一个复杂的 AI 问题？ · Let’s Talk</p><h2 data-editable="footer-heading">让它可用、可控，并真正发生。</h2><a href="mailto:hello@example.com"><span data-editable="footer-email">hello@example.com</span> <span>↗</span></a></div>
        <div className="footer-bottom"><p>© <span data-year>2026</span> Private Professional Portfolio</p><div><a href="#top">返回顶部 ↑</a><a href="#">LinkedIn</a><a href="#">邮件 Email</a></div></div>
      </footer>
      <div className="edit-panel" data-edit-panel>
        <button type="button" data-edit-toggle aria-pressed="false">✏️ 编辑</button>
        <button type="button" data-edit-export>导出 JSON</button>
        <button type="button" data-edit-reset>重置</button>
      </div>
      <script src="/portfolio.js" defer />
    </main>
  );
}
