import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  readingMinutes: number;
  body: ReactNode;
};

const Para = ({ children }: { children: ReactNode }) => (
  <p
    style={{
      fontSize: 17,
      lineHeight: 1.75,
      color: "var(--fg-muted)",
      margin: "0 0 22px",
    }}
  >
    {children}
  </p>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2
    style={{
      fontFamily: "var(--font-sans)",
      fontSize: "clamp(24px, 3vw, 32px)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      color: "var(--fg)",
      margin: "44px 0 16px",
      lineHeight: 1.2,
    }}
  >
    {children}
  </h2>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3
    style={{
      fontFamily: "var(--font-sans)",
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--fg)",
      margin: "28px 0 10px",
    }}
  >
    {children}
  </h3>
);

const UL = ({ children }: { children: ReactNode }) => (
  <ul
    style={{
      margin: "0 0 22px",
      paddingLeft: 22,
      color: "var(--fg-muted)",
      fontSize: 16,
      lineHeight: 1.75,
    }}
  >
    {children}
  </ul>
);

const Note = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <aside
    style={{
      margin: "0 0 28px",
      padding: "16px 20px",
      borderLeft: "3px solid var(--accent)",
      background: "var(--accent-subtle)",
      borderRadius: "var(--r-sm)",
      fontSize: 14.5,
      lineHeight: 1.65,
      color: "var(--fg-muted)",
    }}
  >
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: 6,
        fontWeight: 600,
      }}
    >
      {label}
    </div>
    {children}
  </aside>
);

export const posts: Post[] = [
  {
    slug: "how-much-does-custom-software-cost-in-zimbabwe",
    title:
      "How much does custom software cost in Zimbabwe? (2026 guide)",
    description:
      "A practical, no-nonsense pricing guide for custom software development in Zimbabwe — websites, web apps, SaaS, CRM, ERP, and integrations. Real ranges, what drives cost, and how to scope an engagement that fits your budget.",
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-19",
    author: "Spiritus Systems",
    tags: ["pricing", "custom software", "Zimbabwe", "guide"],
    readingMinutes: 7,
    body: (
      <>
        <Para>
          The question we get more than any other is: <em>how much will this
          cost?</em> The honest answer is that it depends — but
          &ldquo;it depends&rdquo; is not useful when you are trying to plan a
          budget. So this post lays out real ranges for custom software
          development in Zimbabwe in 2026, what drives the price up or down,
          and how to scope an engagement that fits what you actually need.
        </Para>

        <Note label="A note on the figures">
          Every figure below is a <strong>starting point</strong>, expressed
          in USD, and based on real engagements completed by Spiritus Systems
          in the last 18 months. Final scope is always quoted individually
          against a written brief — your project may be cheaper or more
          expensive depending on integrations, compliance, and the depth of
          the workflow being modelled. Treat these as a planning tool, not a
          price list. We refresh this post when ranges change.
        </Note>

        <H2>What &ldquo;custom software&rdquo; actually means</H2>
        <Para>
          Custom software is anything built specifically for your business
          rather than bought off the shelf. In Zimbabwe that usually means one
          of these:
        </Para>
        <UL>
          <li>A marketing website or web app for a local SME or corporate</li>
          <li>An e-commerce store with EcoCash, Paynow, or card support</li>
          <li>A custom CRM or ERP that fits your workflow</li>
          <li>A SaaS product you intend to sell to other businesses</li>
          <li>An automation, integration, or AI system for internal operations</li>
        </UL>
        <Para>
          The cost ranges below are USD, fixed-price, scoped against a written
          brief. Local-currency invoicing is available; ranges assume current
          USD pricing.
        </Para>

        <H2>Pricing ranges for 2026</H2>

        <H3>Marketing websites — $1,500 to $8,000</H3>
        <Para>
          A modern marketing site for a Zimbabwean SME usually lands between
          $1,500 (single-page, lightly designed, content-managed) and $8,000
          (multi-page, fully designed, with a CMS, blog, and SEO setup). At
          the high end, you get bespoke design, structured content, optimised
          performance, and a setup the team can actually update.
        </Para>

        <H3>E-commerce stores — $4,000 to $15,000</H3>
        <Para>
          E-commerce is more expensive because of payment integration, stock
          handling, and order management. Expect $4,000 for a small store on
          a proven platform with EcoCash and Paynow wired in, scaling to
          $15,000 for a custom Next.js store with multi-currency support,
          delivery routing, and admin tooling.
        </Para>

        <H3>Custom CRM and ERP — $6,000 to $25,000</H3>
        <Para>
          Custom enterprise systems start at around $6,000 for a
          single-workflow CRM and reach $25,000 for a multi-module ERP with
          accounting integration, role-based access, audit trails, and a
          dashboard layer. The deciding factor is rarely complexity of code —
          it is the breadth of workflows and the depth of integrations.
        </Para>

        <H3>SaaS platforms — $12,000 to $60,000+ for v1</H3>
        <Para>
          A SaaS product is the longest engagement because it has to be
          production-grade on day one — auth, billing, multi-tenancy,
          monitoring, the lot. A focused MVP lands around $12,000. A
          full-fat v1 with admin tooling, analytics, and payment rails
          wired in for both Zimbabwe and international customers is
          $40,000 to $60,000 and up.
        </Para>

        <H3>AI and automation — $3,000 to $20,000 per use case</H3>
        <Para>
          AI engagements are scoped per use case. A document understanding
          pipeline (invoices, KYC, contracts) starts around $3,000. A
          customer-facing agent with retrieval, guardrails, and WhatsApp
          integration is $8,000 to $20,000 depending on volume and the
          number of edge cases that need handled.
        </Para>

        <H3>Integrations — $1,500 to $8,000 per integration</H3>
        <Para>
          Connecting two systems (say Pastel to a custom CRM, or Shopify to
          your accounting package) ranges from $1,500 for a one-direction,
          scheduled sync up to $8,000 for a bidirectional, real-time
          integration with retries, monitoring, and a dead-letter queue.
        </Para>

        <H2>What pushes the price up or down</H2>
        <UL>
          <li>
            <strong>Scope clarity.</strong> A tight written brief saves
            money. Discovery happens either before contract or during build;
            doing it before is cheaper.
          </li>
          <li>
            <strong>Integrations.</strong> Every system that needs to talk
            to another system adds cost. Off-the-shelf APIs are cheap;
            legacy databases are not.
          </li>
          <li>
            <strong>Design fidelity.</strong> Using a clean default design
            system is cheaper than custom brand work. Both are valid choices.
          </li>
          <li>
            <strong>Compliance and audit.</strong> Regulated sectors (banks,
            insurers, health) need audit trails, logging, and security
            review that adds 20–40% to a build.
          </li>
          <li>
            <strong>Volume and scale.</strong> A platform expecting 50
            users is built differently to one expecting 50,000. We design
            for the actual target, not a guess.
          </li>
        </UL>

        <H2>How to scope an engagement that fits your budget</H2>
        <Para>
          The cheapest project is the one that solves a single, sharp
          problem. The most expensive is the one that tries to solve every
          problem at once. We almost always recommend phasing — ship a
          focused v1, learn what real users actually do, then expand.
        </Para>
        <Para>
          A good rule of thumb: if your budget is tight, cut features
          before cutting quality. A small, well-built tool earns trust and
          unlocks a follow-on engagement. A large, half-built tool earns
          neither.
        </Para>

        <H2>Payment terms in Zimbabwe</H2>
        <Para>
          We invoice in USD and accept USD bank transfer, local bank
          transfer, EcoCash for smaller retainers, and cross-border wire
          for diaspora-owned clients. Standard terms are 50% on signature,
          50% on delivery for fixed-price builds, and monthly in advance
          for retainers.
        </Para>

        <H2>Want a real number for your project?</H2>
        <Para>
          Send us a short brief — what you want built, who uses it, what
          it integrates with — and we will come back with a fixed-price
          quote within five working days. No surprises, no hourly
          guesswork, no scope creep.
        </Para>
      </>
    ),
  },

  {
    slug: "custom-crm-vs-salesforce-hubspot-zoho-zimbabwe",
    title:
      "Custom CRM vs Salesforce, HubSpot, and Zoho in Zimbabwe: which actually fits?",
    description:
      "Off-the-shelf CRM platforms are powerful but expensive and rigid. A custom CRM is flexible but a bigger up-front investment. Here is how to choose between them for a Zimbabwean business in 2026.",
    publishedAt: "2026-03-22",
    updatedAt: "2026-04-19",
    author: "Spiritus Systems",
    tags: ["CRM", "comparison", "Zimbabwe", "guide"],
    readingMinutes: 6,
    body: (
      <>
        <Para>
          When a Zimbabwean business outgrows spreadsheets and WhatsApp
          groups, the next decision is what to use as a customer
          relationship management system. The market is dominated by three
          big names — Salesforce, HubSpot, and Zoho — and they are all
          competent products. So when does a custom-built CRM actually
          make more sense?
        </Para>

        <H2>The off-the-shelf option</H2>
        <Para>
          Salesforce, HubSpot, and Zoho all give you a working CRM in
          minutes. You sign up, import contacts, configure fields, and you
          are running. The trade-offs are real but well understood:
        </Para>
        <UL>
          <li>
            Per-seat licensing in USD. For a 20-person team on a mid-tier
            plan, that is $400–$2,000 per month, every month, forever.
          </li>
          <li>
            Field, workflow, and report customisation is limited unless
            you buy a higher tier or hire a specialist consultant.
          </li>
          <li>
            Local payment rails (EcoCash, Paynow), local reporting
            requirements, and ZWL/USD multi-currency handling all need
            workarounds or third-party plugins.
          </li>
          <li>
            Data ownership is contractual but operationally vendor-locked.
            Migrating away later is painful.
          </li>
        </UL>
        <Para>
          For a startup with 1–5 users running standard sales workflows,
          off-the-shelf is almost always the right answer. Pay the
          monthly fee, get back to selling.
        </Para>

        <H2>When custom starts to make sense</H2>
        <Para>
          Custom becomes the better economic and operational choice when
          one or more of these is true:
        </Para>
        <UL>
          <li>
            <strong>Your workflow does not fit the SaaS model.</strong>{" "}
            You sell something that does not look like leads-opportunities-deals.
            Property management, billboard advertising, HVAC service
            scheduling, freight forwarding — none of these map cleanly to
            a generic CRM.
          </li>
          <li>
            <strong>You operate in a regulated sector.</strong> Audit
            trails, role-based permissions, on-premise hosting, and
            local data residency are easier to guarantee with a
            custom build.
          </li>
          <li>
            <strong>You have specific local integrations.</strong>{" "}
            WhatsApp Business as the primary client channel, Pastel or
            Sage as the accounting backbone, EcoCash as a payment rail.
            Off-the-shelf supports all of these, but only via plugins
            and at extra cost.
          </li>
          <li>
            <strong>The 3-year cost crosses the line.</strong> A
            custom CRM amortised over 3 years often costs less than 3
            years of per-seat licensing and plugin fees, especially
            for teams of 15+ people.
          </li>
        </UL>

        <H2>The honest case for off-the-shelf</H2>
        <Para>
          We are a custom software company and we still recommend
          HubSpot or Zoho to clients regularly. Specifically:
        </Para>
        <UL>
          <li>Teams under 10 with standard sales pipelines</li>
          <li>Businesses that need a CRM running this week, not in 12 weeks</li>
          <li>Companies that intend to run experiments before committing to a workflow</li>
          <li>Anyone who values vendor support over flexibility</li>
        </UL>

        <H2>The honest case for custom</H2>
        <Para>
          And we recommend custom when:
        </Para>
        <UL>
          <li>The team is 15+ and growing, with workflow requirements that vendors cannot model without expensive consultants</li>
          <li>The business has unique data shapes — billboards, properties, jobs, consignments — that do not behave like contacts and deals</li>
          <li>WhatsApp is the primary channel and reps need it inside the CRM, not in a separate tab</li>
          <li>The sector is regulated enough that local hosting and audit logging are non-negotiable</li>
        </UL>

        <H2>What a custom CRM build looks like</H2>
        <Para>
          A typical custom CRM engagement runs 8–16 weeks and includes
          discovery, data model design, role-based access, dashboards,
          integrations (WhatsApp, accounting, payments), staff training,
          and a 90-day post-launch runway. Cost ranges from $6,000 for
          a focused single-workflow build to $25,000 for a multi-module
          system with deep integrations.
        </Para>

        <H2>How to decide</H2>
        <Para>
          Try the off-the-shelf option first. If you find yourself
          paying for plugins, hiring consultants to bend it into shape,
          or doing critical work outside the CRM because it cannot do it
          natively — that is your signal that custom would now save you
          money. Until you hit that wall, vendor SaaS is the cheaper
          bet.
        </Para>
      </>
    ),
  },

  {
    slug: "offline-first-web-apps-for-load-shedding-zimbabwe",
    title:
      "Offline-first web apps for load-shedding: how Zimbabwean software actually has to work",
    description:
      "Load-shedding, mobile data caps, and patchy connectivity make &ldquo;always online&rdquo; an unsafe assumption in Zimbabwe. Here is how we build web apps that keep working when the lights and the internet go out.",
    publishedAt: "2026-02-11",
    updatedAt: "2026-04-19",
    author: "Spiritus Systems",
    tags: ["engineering", "offline-first", "Zimbabwe", "PWA"],
    readingMinutes: 5,
    body: (
      <>
        <Para>
          Most web apps are written assuming a stable internet
          connection and a desktop on mains power. In Zimbabwe, that
          assumption is wrong about a third of the day. Load-shedding,
          fibre cuts, and metered mobile data are facts of operating
          life. Software that ignores them generates real losses —
          missed sales, lost data, frustrated staff.
        </Para>
        <Para>
          Here is the engineering pattern we apply when building web
          apps for the Zimbabwean operating environment.
        </Para>

        <H2>1. Treat connectivity as optional, not required</H2>
        <Para>
          Most apps fail in one of two ways when the connection
          drops: they freeze on a spinner, or they accept an action
          and then silently lose it. Both are bad. The fix is to
          design for queued action — every user action is captured
          locally, then synced to the server when the network
          returns. The user keeps working; the system catches up.
        </Para>

        <H2>2. Cache everything cacheable</H2>
        <Para>
          Service workers and IndexedDB make it possible to serve
          the entire app shell, recent data, and reference lists
          (clients, products, prices) directly from the browser.
          That means a sales rep at a customer site with no signal
          can still open the CRM, see their pipeline, and take an
          order. The sync happens later.
        </Para>

        <H2>3. Use background sync and conflict resolution</H2>
        <Para>
          Background sync queues actions while offline and replays
          them when the connection returns. Conflict resolution is
          the harder problem — what happens when two reps update
          the same record offline? We default to last-write-wins
          for low-stakes fields and explicit merge UI for
          high-stakes ones.
        </Para>

        <H2>4. Optimise for low data</H2>
        <Para>
          Bundle size matters everywhere, but it matters more in
          Zimbabwe where users pay per megabyte. We aim for under
          200KB of JavaScript on first load, lazy-load everything
          else, compress images aggressively, and serve responsive
          image sizes so phones do not download desktop assets.
        </Para>

        <H2>5. Handle authentication offline</H2>
        <Para>
          Tokens expire while the user is offline. Refresh quietly
          when the connection returns, fall back to a friendly
          re-auth prompt only if the refresh itself fails. Never
          dump someone to a login screen while they are mid-task.
        </Para>

        <H2>6. Surface connectivity status honestly</H2>
        <Para>
          Show the user, calmly, when the app is operating offline
          and what is queued for sync. A small status indicator,
          not a panicked banner. Users in Zimbabwe are used to
          intermittent connectivity; they just need to know their
          work is safe.
        </Para>

        <H2>The toolkit</H2>
        <UL>
          <li>Next.js with PWA support</li>
          <li>Service workers for offline app shell</li>
          <li>IndexedDB for structured client-side data</li>
          <li>Background Sync API for queued actions</li>
          <li>Optimistic UI updates with rollback on conflict</li>
          <li>Image optimisation and responsive sizing</li>
        </UL>

        <H2>The result</H2>
        <Para>
          An app that loads in under two seconds on Econet 3G,
          works during load-shedding, syncs cleanly when the power
          and internet return, and treats data as precious. That
          is the bar for software shipped in Zimbabwe — anything
          less is a liability.
        </Para>
      </>
    ),
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsSorted(): Post[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
