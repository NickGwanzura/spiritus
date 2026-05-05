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
    className="post-list"
    style={{
      margin: "0 0 22px",
      paddingLeft: 24,
      color: "var(--fg-muted)",
      fontSize: 16,
      lineHeight: 1.75,
      listStyleType: "disc",
      listStylePosition: "outside",
    }}
  >
    {children}
  </ul>
);

const OL = ({ children }: { children: ReactNode }) => (
  <ol
    className="post-list post-list-ordered"
    style={{
      margin: "0 0 22px",
      paddingLeft: 30,
      color: "var(--fg-muted)",
      fontSize: 16,
      lineHeight: 1.75,
      listStyleType: "decimal",
      listStylePosition: "outside",
    }}
  >
    {children}
  </ol>
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
    slug: "why-your-zimbabwean-business-needs-a-website-2026",
    title:
      "Why your Zimbabwean business needs a real website in 2026",
    description:
      "A Facebook page is not a website, and a WhatsApp catalogue is not a search result. Here is why a proper site is now the cheapest sales hire a Zimbabwean business can make, and what it actually has to do to earn its keep.",
    publishedAt: "2026-05-05",
    author: "Spiritus Systems",
    tags: ["websites", "SEO", "Zimbabwe", "marketing", "business"],
    readingMinutes: 7,
    body: (
      <>
        <Para>
          For a long time, Zimbabwean small and medium businesses got
          away without a proper website. A Facebook page, a WhatsApp
          number on the back of a business card, and a Google
          Business Profile were enough to keep the phone ringing. In
          2026, that arithmetic has flipped. The first place a
          customer goes when they want to buy from you is no longer
          your storefront, your reception, or even your social page.
          It is a Google search on the phone in their hand.
        </Para>

        <Note label="What changed">
          Cheaper data bundles, faster networks, and a generation of
          buyers who research everything before paying for anything
          have moved purchase decisions online, even when the actual
          transaction still happens in cash. Skipping the website is
          not a saving any more; it is a leak.
        </Note>

        <H2>Where buyers actually look for you now</H2>
        <Para>
          When someone in Harare needs an HVAC installer, a property
          valuer, a lawyer, a printer, or a fabric supplier, the
          search engine is the first stop. They type &ldquo;air
          conditioning company harare&rdquo; or &ldquo;lawyers
          borrowdale&rdquo; and they pick from the top three results
          that show prices, photos, contact details, and a legitimate
          website on a custom domain. If you are not in that list,
          you do not exist for them. The phone-book mentality is
          over.
        </Para>
        <Para>
          A website is the only asset you control that can rank on
          Google, hold credible content, and route traffic to
          whichever channel you prefer. Compare what each surface
          actually does for a buyer who has not heard of you yet:
        </Para>
        <UL>
          <li>
            <strong>Facebook page.</strong> Posts disappear into the
            feed. The page itself rarely ranks for the searches your
            customer is actually running.
          </li>
          <li>
            <strong>WhatsApp catalogue.</strong> Convenient for
            repeat buyers, but it assumes the customer already has
            your number. It is invisible to discovery.
          </li>
          <li>
            <strong>Google Business Profile.</strong> Helpful, but
            on its own it points to a phone number with no story
            behind it. It works hardest when it points to a real
            website.
          </li>
          <li>
            <strong>Custom website.</strong> Indexed by Google,
            ranks for the suburb-and-service queries your buyers
            type, and acts as the destination every other channel
            sends traffic to.
          </li>
        </UL>

        <H2>A Facebook page is not a website</H2>
        <Para>
          It is worth being clear about why a social page cannot do
          the job:
        </Para>
        <UL>
          <li>
            <strong>You do not own it.</strong> Meta owns the URL,
            the layout, and the audience, and changes the rules
            whenever it likes.
          </li>
          <li>
            <strong>You do not control what runs against it.</strong>{" "}
            Competitor ads can appear on your own page.
          </li>
          <li>
            <strong>Reach is throttled.</strong> Posts are hidden
            from your own followers unless you pay to boost.
          </li>
          <li>
            <strong>It does not rank.</strong> Search engines do not
            crawl Facebook posts the way they crawl real websites,
            so customers searching for what you do never see you.
          </li>
        </UL>
        <Para>
          The same applies, in different shapes, to Instagram,
          LinkedIn, TikTok, and any other rented audience. Use them,
          but rent them on top of an asset you actually own.
        </Para>

        <H2>The Google search a Zimbabwean customer is running right now</H2>
        <Para>
          Local search behaviour in Zimbabwe is intensely
          &ldquo;near-me&rdquo; oriented. Customers add a suburb
          (Borrowdale, Avondale, Bulawayo CBD, Mutare) or the
          country itself to almost every commercial query. They want
          to know that you operate where they operate, that you have
          done the work before, and that you will pick up when they
          call.
        </Para>
        <Para>
          A website is what gives the search engine something to
          rank. Structured pages on every service, every location,
          and every product category, with proper page titles, meta
          descriptions, and schema markup, mean Google can
          understand what you offer and surface it when someone
          searches. Without that scaffolding, you are competing for
          nobody.
        </Para>

        <H2>Trust signals that make a Zimbabwean visitor stay</H2>
        <Para>
          A first-time visitor in Zimbabwe is making a credibility
          check in seconds. They look for a few things, and missing
          any of them shortens the visit:
        </Para>
        <UL>
          <li>
            A working contact section with a real address, a phone
            number that uses the country code, and an email on your
            own domain.
          </li>
          <li>
            Photos of actual work, actual premises, or actual staff.
            Stock images are read instantly as a generic template.
          </li>
          <li>
            Prices, ranges, or a clear way to ask for a quote. Hidden
            pricing scares away serious buyers.
          </li>
          <li>
            An About page with a founder name, the year you started,
            and the kind of clients you serve. Anonymity reads as
            fly-by-night.
          </li>
          <li>
            A clear next step on every page: &ldquo;Book a
            consultation&rdquo;, &ldquo;Request a quote&rdquo;, or
            &ldquo;Order on WhatsApp&rdquo; with a deep link.
          </li>
        </UL>

        <H2>Mobile, 3G, and load shedding: speed is a feature</H2>
        <Para>
          Most of your traffic is on a phone, often on a 3G or 4G
          connection that fluctuates by neighbourhood. Many of your
          visitors are reading you during a power cut, on the
          back-up data of a router, with a battery percentage they
          are watching closely. A site that takes ten seconds to
          load loses them before the hero image even appears.
        </Para>
        <Para>
          Sub-two-second load times are no longer a nice-to-have;
          they are the floor for not getting closed. That floor is
          built from a few specific moves:
        </Para>
        <UL>
          <li>Sensible image sizes, served in modern formats and lazy-loaded.</li>
          <li>Minimal third-party scripts; every analytics tag and chat widget pays for itself or comes off.</li>
          <li>Edge-rendered pages so the first byte arrives quickly even on a slow connection.</li>
          <li>Builds tested on actual Zimbabwean networks, not fibre in a Cape Town office.</li>
        </UL>
        <Para>
          Stripe-grade speed wins business in Harare for the same
          reasons it wins business in San Francisco.
        </Para>

        <H2>Local SEO that actually moves the needle</H2>
        <Para>
          SEO for a Zimbabwean business is mostly about being
          honest, clear, and complete. The wins come from four
          places:
        </Para>
        <OL>
          <li>
            A Google Business Profile that is fully filled in,
            verified, with current photos, hours, and the same name
            and phone number as the website.
          </li>
          <li>
            Pages on the site for each service, each location, and
            each product category, written in the language a
            customer would actually search.
          </li>
          <li>
            Real customer reviews collected over time, on Google,
            on Facebook, and where relevant on industry-specific
            sites.
          </li>
          <li>
            A small flow of useful content (case studies, guides,
            FAQs) that answers the questions your customers are
            actually typing.
          </li>
        </OL>
        <Para>
          Tricks, link farms, and keyword stuffing are not necessary
          and tend to backfire. A clean site, properly structured,
          with real content, will outrank thirty competitors who
          cut corners.
        </Para>

        <H2>Payments are part of the website now</H2>
        <Para>
          For any business selling something online, the payment
          integration is part of the experience. Zimbabwean
          customers want to pay how they actually pay: EcoCash,
          OneMoney, Paynow, ZIPIT, Mastercard for diaspora buyers,
          and bank transfer for corporate clients. The site that
          accepts the payment method the customer has in front of
          them wins; the site that asks for a wire to a foreign
          account loses, every time.
        </Para>
        <Para>
          This is not exotic any more. Paynow integrates cleanly
          into modern websites. EcoCash USSD callbacks are a solved
          problem. Multi-currency pricing, rounding, and
          reconciliation are off-the-shelf for any team that has
          built two or three of these systems. The friction is
          institutional, not technical.
        </Para>

        <H2>What a working business website actually needs</H2>
        <Para>
          A short, opinionated brief. If you are scoping a website
          in 2026, this is the floor:
        </Para>
        <UL>
          <li>Custom domain, not a free subdomain, and an email on that domain.</li>
          <li>A homepage that says, in one sentence, what you do and who for.</li>
          <li>Service or product pages, each one a proper page that can be shared and indexed.</li>
          <li>A real contact page with a phone number, a WhatsApp deep link, an address, and a map.</li>
          <li>A short About page with the founder, the team, and the story.</li>
          <li>A blog or insights area, even if you only post once a quarter, for SEO and credibility.</li>
          <li>Analytics you actually look at, not just install.</li>
          <li>Page speed on mobile, tested on real local networks.</li>
          <li>Cookie and privacy notices that match the law.</li>
          <li>Backups, monitoring, SSL, and a 24-hour recovery plan.</li>
        </UL>

        <H2>The cost of not having one</H2>
        <Para>
          The argument that a website is expensive misses the
          comparison. A salesperson in Harare costs more per month
          than most websites cost in total. A website works every
          hour, in every time zone, never gets sick, never quits,
          and can be improved by changing a couple of files. The
          right comparison is not &ldquo;the cost of a website&rdquo;
          against zero; it is &ldquo;the cost of a website&rdquo;
          against the leads, the credibility, and the reach you
          currently lose every week without one.
        </Para>
        <Para>
          A surprising number of the Zimbabwean businesses we work
          with discover, six months after launch, that the website
          is now the source of the majority of their qualified
          inbound. Not because it is doing anything magic; just
          because it is meeting customers where they are already
          looking.
        </Para>

        <H2>Build once, compound</H2>
        <Para>
          A good website is the lowest-maintenance, highest-leverage
          asset a small or medium Zimbabwean business can own.
          Built well, it pays for itself in a single quarter and
          then keeps paying for years. Built badly, it becomes
          another running cost that does not move the dial. The
          difference is almost entirely a matter of who builds it,
          what they understand about the local market, and whether
          they treat the website as a serious commercial asset or
          a brochure.
        </Para>
        <Para>
          If your current site is a static brochure, a half-finished
          template, or a Facebook page pretending to be a homepage,
          your business is being judged by it whether you like it or
          not. The 2026 question is not whether to invest in a
          website. It is whether to invest in one that earns its
          keep.
        </Para>
      </>
    ),
  },
  {
    slug: "real-estate-systems-stand-sales-zimbabwe",
    title:
      "Real estate systems that manage the sale of stands: what actually works in Zimbabwe",
    description:
      "Selling residential and commercial stands in Zimbabwe is nothing like selling houses. Here is how we design software for stand sales: inventory by coordinates, instalment plans, title deeds, and the workflows that keep every plot accounted for.",
    publishedAt: "2026-04-23",
    author: "Spiritus Systems",
    tags: ["real estate", "property", "Zimbabwe", "CRM", "ERP"],
    readingMinutes: 7,
    body: (
      <>
        <Para>
          Stand sales are one of the most common, and most poorly
          tooled, workflows in Zimbabwean property. A developer
          opens up a suburb, divides the land into individual
          plots, and has to track every stand from survey to title
          deed across years of instalment payments. Most
          off-the-shelf property software is built around houses and
          monthly rentals. Stands behave differently, and the
          software has to match.
        </Para>

        <Note label="Why stands are different">
          A stand has coordinates, not an address. It is sold once,
          not rented monthly. Payment usually spans years of
          instalments. Title deed transfer lags the final payment by
          months. And a single development might have hundreds of
          stands, each at a slightly different stage of the same
          long workflow. Generic property CRMs miss all of this.
        </Note>

        <H2>Inventory: the plot is the record</H2>
        <Para>
          The core of a stand-sales system is the plot register. Every
          stand has a unique identifier, a location on the layout
          plan, a size in square metres, a zoning class, and a status
          that moves through reserved, sold, fully paid, title
          transferred, and occupied. The register has to reflect the
          physical reality on the ground and the legal reality in the
          deeds office, and the two are rarely in perfect sync.
        </Para>
        <Para>
          We build the inventory as a map-first interface: the sales
          team sees the layout plan with every stand colour-coded by
          status, clicks a plot, and sees the buyer, the payment
          schedule, the outstanding balance, and the next action due.
          Searching by buyer, by phase, by price band, or by payment
          state all run off the same underlying record.
        </Para>

        <H2>Instalment plans and the payment waterfall</H2>
        <Para>
          Stand sales in Zimbabwe are almost always on instalment
          plans, spanning years rather than months. The software has
          to handle bespoke schedules per buyer,
          varying deposit sizes, early settlement discounts, late
          payment penalties, and the occasional currency shift
          mid-contract. Most clients also allow buyers to restructure
          a schedule after a missed month, which the system needs to
          support without breaking audit history.
        </Para>
        <Para>
          We store every payment against the stand, not against a
          generic invoice, so the balance, the history, and the
          remaining schedule always belong to a specific plot. A
          payment waterfall rule applies incoming cash to penalties,
          then interest, then principal, so finance never has to
          work out manually where a buyer's money landed.
        </Para>

        <H2>Title deeds and the handover workflow</H2>
        <Para>
          The final payment is not the end of the process. Title
          deed transfer involves the conveyancer, the deeds office,
          the city council, and a run of standard documents that
          have to be generated, signed, and filed. The system has
          to track each step, flag delays, and surface the buyers
          who are fully paid but still waiting for transfer. In a
          mature development this queue is often dozens of
          files long and is the single biggest source of customer
          complaints. Automating the tracking cuts the complaints
          in half even before the conveyancer works faster.
        </Para>

        <H2>Reporting the board actually reads</H2>
        <Para>
          Stand developers want to see three numbers: how many
          stands are sold versus available, how much cash is
          committed across active instalment plans, and how much is
          actually collected this month versus this month last year.
          We build those three numbers as the top of every
          dashboard, with drill-downs into phase, sales rep,
          payment method, and arrears ageing. A healthy system
          makes the monthly board pack a five minute export rather
          than a two-day reconciliation project.
        </Para>

        <H2>WhatsApp, not email, for buyer communication</H2>
        <Para>
          Every buyer conversation in Zimbabwean property happens on
          WhatsApp. The system has to send the welcome pack, the
          payment confirmations, the reminder for the next
          instalment, and the fully paid celebration through the
          same channel, with every message logged against the plot
          record. Integrating WhatsApp Business properly means the
          sales team stops copying receipts into a group chat and
          the audit trail stops depending on someone's phone.
        </Para>

        <H2>Scope and how to phase it</H2>
        <Para>
          A focused stand-sales system for a single development
          typically covers inventory, instalment schedules, payment
          tracking, and a WhatsApp channel for buyer communication.
          A larger, multi-phase platform adds title deed tracking,
          conveyancer workflows, board reporting, and multi-developer
          administration. We almost always recommend phasing: ship
          the inventory and payment engine first, prove it with the
          sales team and finance team, then layer title deed
          tracking and board reporting once the core is trusted. A
          live v1 the sales team actually uses beats a speculative
          v3 that never ships.
        </Para>

        <H2>The mistake to avoid</H2>
        <Para>
          The biggest trap is trying to force stand sales into a
          generic property CRM or a rental platform. We have seen
          developers spend long stretches fighting a tool that was built
          for letting agents before accepting that the workflow is
          different. Build the inventory, the schedule engine, and
          the title tracker for what they actually are: the core of
          your business, not an add-on to someone else's. That is
          the system that keeps every stand accounted for, every
          buyer up to date, and every board meeting free of
          surprises.
        </Para>
      </>
    ),
  },

  {
    slug: "ecocash-paynow-card-payments-zimbabwe-ecommerce",
    title:
      "EcoCash, Paynow, and card payments: wiring modern payments into Zimbabwean software",
    description:
      "A practical guide to payment rails for Zimbabwean e-commerce and SaaS in 2026. How EcoCash, Paynow, bank transfer, and international card processing actually fit together, what each costs, and how to pick the right mix for your product.",
    publishedAt: "2026-04-23",
    author: "Spiritus Systems",
    tags: ["payments", "EcoCash", "Paynow", "Zimbabwe", "e-commerce"],
    readingMinutes: 7,
    body: (
      <>
        <Para>
          Payments are the quiet make-or-break of any Zimbabwean software
          product. The user journey can be perfect, the design can be
          stunning, the stock levels can be accurate, and none of it
          matters if the checkout fails or the settlement takes days
          to reach your bank account. This post is a practical guide
          to the rails we use and how we decide which combination
          fits a given product.
        </Para>

        <Note label="A quick map">
          In Zimbabwe today, the practical choices are mobile money
          (EcoCash, OneMoney, InnBucks), local card and bank rails
          (Paynow, ZimSwitch, ZIPIT, RTGS), international card
          processing (Stripe, PayPal, Flutterwave) and direct bank
          transfer. Most production systems we ship combine at least
          two of these, sometimes four.
        </Note>

        <H2>EcoCash: still the default for local consumers</H2>
        <Para>
          EcoCash remains the payment rail the widest slice of Zimbabwean
          consumers actually trust. If your customer base is domestic
          retail, B2C services, or anything at small-ticket transaction
          sizes, EcoCash is usually the first rail to wire in.
          Settlement is near-instant, dispute rates are low, and the
          user flow is familiar on every feature phone and smartphone.
        </Para>
        <Para>
          The trade-offs are real. Merchant fees are not trivial once
          volumes scale, the API ecosystem is less mature than
          international equivalents, and limits can bite for
          higher-ticket items. We integrate EcoCash either directly
          through the merchant API or via Paynow as an aggregator,
          depending on transaction volume and how much operational
          control the client wants.
        </Para>

        <H2>Paynow: the aggregator most teams should start with</H2>
        <Para>
          For most small and mid-sized merchants, Paynow is the
          pragmatic first integration. It aggregates EcoCash,
          OneMoney, Zimswitch debit cards, and Visa/Mastercard under a
          single API and one settlement relationship. Going live
          takes days, a clean test environment lets you validate
          flows without touching real money, and reconciliation is
          simpler because there is only one account to reason about.
        </Para>

        <H2>Stripe and international cards: for the diaspora and cross-border</H2>
        <Para>
          If any part of your customer base sits outside Zimbabwe, you
          need an international rail. Diaspora buyers, SaaS customers
          paying in USD, and foreign donors for NGOs all expect a
          card flow that works the way it does everywhere else.
          Stripe remains the gold standard for developer experience
          where your billing entity can qualify; Flutterwave is a
          workable alternative for Zimbabwe-incorporated entities.
          A typical pattern we ship is Paynow for local checkout and
          Stripe or Flutterwave for international, chosen at the
          payment step by billing country or currency.
        </Para>

        <H2>Bank transfer and RTGS: underrated for B2B</H2>
        <Para>
          For B2B invoicing, retainers, and anything at larger
          ticket sizes, direct bank transfer is still the cheapest
          and most reliable rail in Zimbabwe. Merchant cost
          is near zero and limits are generous. The real cost is
          operational: you need someone reconciling against bank
          statements, ideally automatically. Our preferred setup
          ingests daily statements, matches incoming references
          against open invoices, and flags anything that does not
          match for human review. A multi-hour task becomes a ten
          minute morning check.
        </Para>

        <H2>Building resilient checkout flows</H2>
        <Para>
          Any rail can fail. EcoCash has network wobbles. Paynow
          occasionally times out. International processors hit their
          own patches of turbulence. The question is not whether a
          failure will happen, but whether your checkout degrades
          gracefully when it does.
        </Para>
        <UL>
          <li>
            <strong>Idempotency on every request.</strong> The user
            taps twice, the network flaps, the retry fires twice.
            Every charge attempt carries an idempotency key so the
            second request is a safe no-op.
          </li>
          <li>
            <strong>Webhooks verified and replayable.</strong>{" "}
            Confirmation comes from the provider's webhook, not from
            the redirect back to your site. Webhooks are verified
            against a shared secret and persisted before any business
            logic runs, so you can replay a missed event.
          </li>
          <li>
            <strong>Order state that survives a crash.</strong> Every
            transaction lives in a proper state machine (initiated,
            pending, confirmed, failed, refunded) with timestamps
            at each transition. Accounts and customer support both
            read from the same history.
          </li>
          <li>
            <strong>A fallback rail.</strong> If Paynow is down, offer
            the customer a direct bank transfer with an order
            reference and an automated reconciliation path. A broken
            checkout that offers an alternative is a saved sale.
          </li>
        </UL>

        <H2>Reconciliation is the part nobody budgets for</H2>
        <Para>
          The hardest part of a Zimbabwean payment stack is not
          accepting money; it is matching every inflow to an order,
          invoice, or customer in a way finance and operations both
          trust. Every rail produces a different statement format on
          a different cadence. We build a reconciliation dashboard
          alongside the checkout that shows every inflow, its source
          rail, its matched order, and a queue of unmatched items
          for finance to investigate, so the merchant's view of cash
          is always the truth.
        </Para>

        <H2>Multi-currency in a ZWL and USD economy</H2>
        <Para>
          Zimbabwean merchants often need to price in USD, settle
          partially in ZWL, report to ZIMRA in both, and invoice
          diaspora buyers in USD only. Handling this cleanly means
          storing every transaction in its original currency with an
          explicit FX rate at the moment of capture, never
          converting on the fly, and treating ZWL and USD as two
          distinct ledgers that roll up to a consolidated view only
          at the reporting layer.
        </Para>

        <H2>How to pick the right starting rail</H2>
        <UL>
          <li>
            Selling to Zimbabwean consumers at small-ticket order
            values: Paynow first, add EcoCash direct later if volume
            justifies it.
          </li>
          <li>
            Selling to diaspora or international SaaS customers:
            Stripe or Flutterwave first, Paynow as a local option
            alongside.
          </li>
          <li>
            B2B invoicing and retainers at larger ticket sizes: bank
            transfer with automated reconciliation is the floor,
            card options added for convenience.
          </li>
          <li>
            NGOs taking donations from multiple countries: Stripe
            plus a local option, with receipts and tax handling
            built in.
          </li>
        </UL>

        <H2>The rule we keep coming back to</H2>
        <Para>
          A payment stack is only as good as the worst rail on its
          worst day. Build for the failures, not the happy path,
          instrument everything that touches money, and treat
          reconciliation as a product surface rather than a
          spreadsheet. Every Zimbabwean merchant we have shipped for
          has reported the same thing once the stack is in place:
          fewer finance headaches, cleaner monthly closes, and a
          surprising amount of reclaimed revenue that used to fall
          through the cracks.
        </Para>
      </>
    ),
  },

  {
    slug: "how-much-does-custom-software-cost-in-zimbabwe",
    title:
      "What drives the cost of custom software in Zimbabwe",
    description:
      "A practical guide to how custom software is scoped and priced in Zimbabwe. What actually drives the cost of websites, web apps, SaaS, CRM, ERP, and integrations, and how to shape an engagement that fits your budget.",
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-23",
    author: "Spiritus Systems",
    tags: ["pricing", "custom software", "Zimbabwe", "guide"],
    readingMinutes: 6,
    body: (
      <>
        <Para>
          The question we get more than any other is: <em>how much will this
          cost?</em> The honest answer is that it depends, but &ldquo;it
          depends&rdquo; is not useful when you are trying to plan a budget.
          So this post lays out what actually drives the cost of custom
          software in Zimbabwe, how we scope engagements, and how to shape
          a project that fits what you need without burning budget on
          things you do not.
        </Para>

        <Note label="Why no price list">
          Every project is different. A one-page brochure site and a
          multi-tenant SaaS both count as &ldquo;a website,&rdquo; and
          their scopes live on different planets. Rather than pretend a
          public price list is useful, we quote each engagement against
          a written brief. This article explains the levers that move
          the quote up or down so you can shape the brief deliberately.
        </Note>

        <H2>What &ldquo;custom software&rdquo; actually means</H2>
        <Para>
          Custom software is anything built specifically for your business
          rather than bought off the shelf. In Zimbabwe that usually means
          one of these:
        </Para>
        <UL>
          <li>A marketing website or web app for a local SME or corporate</li>
          <li>An e-commerce store with EcoCash, Paynow, or card support</li>
          <li>A custom CRM or ERP that fits your workflow</li>
          <li>A SaaS product you intend to sell to other businesses</li>
          <li>An automation, integration, or AI system for internal operations</li>
        </UL>
        <Para>
          Each of these has a different shape, a different risk profile,
          and a different set of cost drivers. Treating them as one
          category is why so many software quotes come back feeling
          arbitrary.
        </Para>

        <H2>The levers that move the quote</H2>
        <UL>
          <li>
            <strong>Scope clarity.</strong> A tight written brief is the
            cheapest thing you can bring to a quote. Discovery happens
            either before contract or during build; doing it before is
            cheaper and faster.
          </li>
          <li>
            <strong>Integrations.</strong> Every system that needs to
            talk to another system adds real work. Off-the-shelf APIs
            are cheap, legacy databases and paper-based handoffs are
            not.
          </li>
          <li>
            <strong>Design fidelity.</strong> Using a clean default
            design system is faster than a bespoke brand build. Both
            are valid choices, but they sit in different scope tiers.
          </li>
          <li>
            <strong>Compliance and audit.</strong> Regulated sectors
            (banks, insurers, health) need audit trails, security
            review, and stricter release processes. That is meaningful
            additional work.
          </li>
          <li>
            <strong>Volume and scale.</strong> A platform for a small
            internal team is built differently to one expecting
            thousands of concurrent users. We design for the actual
            target, not a guess.
          </li>
          <li>
            <strong>Content and migration.</strong> Writing copy,
            photographing products, moving data off an old system, or
            retraining staff are all real line items that quietly
            dominate many projects if not planned for.
          </li>
        </UL>

        <H2>How we scope an engagement</H2>
        <Para>
          Every engagement starts with a short discovery: a written
          brief, one or two workshops, and a list of integrations and
          constraints. That output becomes a fixed-scope, fixed-price
          proposal you can take to a board. Changes after that sit in a
          separate change order so the baseline stays stable.
        </Para>
        <Para>
          The cheapest project is the one that solves a single, sharp
          problem. The most expensive is the one that tries to solve
          every problem at once. We almost always recommend phasing:
          ship a focused v1, learn what real users actually do, then
          expand. A small, well-built tool earns trust and unlocks a
          follow-on engagement. A large, half-built tool earns neither.
        </Para>

        <H2>Signals that a project will come in on the lower end</H2>
        <UL>
          <li>A single, well-understood workflow rather than a platform</li>
          <li>Existing brand assets, content, and data ready to migrate</li>
          <li>Modern APIs on every system we need to integrate with</li>
          <li>A decision maker available weekly for review and approval</li>
          <li>No regulatory or compliance obligations beyond the basics</li>
        </UL>

        <H2>Signals that a project will come in on the higher end</H2>
        <UL>
          <li>Multi-module, multi-tenant, or multi-market scope</li>
          <li>Legacy systems that need reverse-engineering to integrate</li>
          <li>Heavy custom design or brand-first expectations</li>
          <li>Regulated industry with audit and security requirements</li>
          <li>Large-scale data migration from paper, spreadsheets, or unsupported tools</li>
        </UL>

        <H2>Payment terms in Zimbabwe</H2>
        <Para>
          We invoice in USD and accept USD bank transfer, local bank
          transfer, EcoCash for smaller retainers, and cross-border
          wire for diaspora-owned clients. Fixed-price builds are
          typically billed in milestone instalments tied to delivery.
          Retainers are billed monthly in advance.
        </Para>

        <H2>Want a real number for your project?</H2>
        <Para>
          Send us a short brief (what you want built, who uses it,
          what it integrates with) and we will come back with a
          fixed-price quote. No hourly guesswork, no scope creep, and
          no public price list designed to anchor you before we have
          even heard the problem.
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
          big names (Salesforce, HubSpot, and Zoho) and they are all
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
            Per-seat licensing in USD. For a growing team on a
            mid-tier plan, that subscription cost compounds every
            month, for every seat, for as long as you use it.
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
          For a small team running standard sales workflows, off-the-shelf
          is almost always the right answer. Pay the monthly fee, get
          back to selling.
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
            scheduling, freight forwarding. None of these map cleanly to
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
          <li>Small teams with standard sales pipelines</li>
          <li>Businesses that need a CRM running this week, not next quarter</li>
          <li>Companies that intend to run experiments before committing to a workflow</li>
          <li>Anyone who values vendor support over flexibility</li>
        </UL>

        <H2>The honest case for custom</H2>
        <Para>
          And we recommend custom when:
        </Para>
        <UL>
          <li>The team is mid-sized and growing, with workflow requirements that vendors cannot model without expensive consultants</li>
          <li>The business has unique data shapes (billboards, properties, jobs, consignments) that do not behave like contacts and deals</li>
          <li>WhatsApp is the primary channel and reps need it inside the CRM, not in a separate tab</li>
          <li>The sector is regulated enough that local hosting and audit logging are non-negotiable</li>
        </UL>

        <H2>What a custom CRM build looks like</H2>
        <Para>
          A typical custom CRM engagement includes discovery, data
          model design, role-based access, dashboards, integrations
          (WhatsApp, accounting, payments), staff training, and a
          post-launch support runway. Scope ranges from a focused
          single-workflow build to a multi-module system with deep
          integrations into accounting, payments, and messaging
          platforms.
        </Para>

        <H2>The hidden costs of both paths</H2>
        <Para>
          Off-the-shelf CRMs are cheap to start and get expensive to
          customise. Every bespoke field, automation, or report beyond
          the default tier either bumps you into a higher plan, locks
          you to a consultant, or forces a third-party plugin with
          its own monthly bill. Custom CRMs are the opposite: a
          larger up-front cost and a smaller, more predictable
          monthly spend. The long-run winner depends almost entirely
          on how unusual your workflow is and how long you plan to
          run it.
        </Para>

        <H2>Migration and training, the quiet killers</H2>
        <Para>
          The thing that sinks most CRM projects is not the software.
          It is the switch. Data in Excel, WhatsApp, and the head of
          your longest-tenured salesperson has to land cleanly in the
          new system, and the team has to actually adopt it. We
          always scope migration, training, and a post-launch
          adoption window explicitly, whether the build is custom or
          a Salesforce rollout. The tool is half the work; the
          handover is the other half.
        </Para>

        <H2>How to decide</H2>
        <Para>
          Try the off-the-shelf option first. If you find yourself
          paying for plugins, hiring consultants to bend it into shape,
          or doing critical work outside the CRM because it cannot do it
          natively. That is your signal that custom would now save you
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
      "Load-shedding, mobile data caps, and patchy connectivity make “always online” an unsafe assumption in Zimbabwe. Here is how we build web apps that keep working when the lights and the internet go out.",
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
          life. Software that ignores them generates real losses:
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
          design for queued action. Every user action is captured
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
          the harder problem. What happens when two reps update
          the same record offline? We default to last-write-wins
          for low-stakes fields and explicit merge UI for
          high-stakes ones.
        </Para>

        <H2>4. Optimise for low data</H2>
        <Para>
          Bundle size matters everywhere, but it matters more in
          Zimbabwe where users pay per megabyte. We keep the first
          load as small as possible, lazy-load everything else,
          compress images aggressively, and serve responsive image
          sizes so phones do not download desktop assets.
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

        <H2>7. Plan for partial failure, not just full outage</H2>
        <Para>
          Real connectivity in Zimbabwe is rarely fully on or fully
          off. More commonly it is slow, intermittent, or high
          latency. The app needs to behave sensibly across that
          whole spectrum. We set short, explicit timeouts on every
          network call, surface loading states quickly instead of a
          frozen spinner, and give the user a retry control rather
          than a stuck screen. Anything that writes to the server is
          optimistic
          in the UI and pessimistic in the database: the action
          appears immediately, but the server has final say and
          rolls back cleanly when it cannot accept the write.
        </Para>

        <H2>8. Test under real Zimbabwean conditions</H2>
        <Para>
          The biggest gap between offline-first in theory and
          offline-first in practice is the test environment. Chrome
          DevTools throttling is a starting point, but it does not
          capture the reality of a 3G signal bouncing between two
          and no bars in a lift in Eastgate. Every release gets
          tested on real devices, on real networks, in real
          locations we know clients will use. The bugs you find on
          a Huawei Y6 in the Joina City parking garage are not the
          bugs you find on a Macbook in the office.
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
          An app that loads quickly on a local 3G signal, works
          during load-shedding, syncs cleanly when the power and
          internet return, and treats data as precious. That is the
          bar for software shipped in Zimbabwe. Anything less is a
          liability.
        </Para>
      </>
    ),
  },

  {
    slug: "ai-in-zimbabwean-business",
    title:
      "AI in Zimbabwean business: what is actually paying off in 2026",
    description:
      "AI is everywhere on LinkedIn and nowhere in most Zimbabwean offices. Here is a grounded look at where AI is genuinely earning its keep for local businesses, and where the hype still outruns the value.",
    publishedAt: "2026-04-18",
    updatedAt: "2026-04-20",
    author: "Spiritus Systems",
    tags: ["AI", "automation", "Zimbabwe", "guide"],
    readingMinutes: 6,
    body: (
      <>
        <Para>
          Every second post on LinkedIn says AI is transforming
          business. Walk into a typical Harare office and you will
          find a team that still reconciles invoices by hand,
          copies WhatsApp orders into Excel, and answers the same
          customer questions thirty times a day. The gap between
          the noise and the ground is wide.
        </Para>
        <Para>
          This post is a practical inventory of where AI is
          actually paying off for Zimbabwean businesses in 2026,
          based on what we have built and what we have watched
          other teams build. No slideware, no AGI speculation,
          just the use cases that return more than they cost.
        </Para>

        <Note label="The honest framing">
          AI is useful when it moves a specific operational needle:
          fewer hours on routine work, faster turnaround on
          ambiguous tasks, better decisions on messy data. If a
          proposed use case does not do one of those three things,
          it is marketing, not engineering.
        </Note>

        <H2>What language models are actually good at</H2>
        <Para>
          Before the use cases, it is worth being precise about
          what modern AI (primarily large language models) does
          well:
        </Para>
        <UL>
          <li>
            <strong>Reading messy text and extracting structure.</strong>{" "}
            Invoices, CVs, contracts, forms, anything with loose
            formatting becomes structured data.
          </li>
          <li>
            <strong>Answering questions against a known corpus.</strong>{" "}
            Point it at your policies, product catalogue, or
            support history and it will answer questions from it.
          </li>
          <li>
            <strong>Drafting text that follows a template.</strong>{" "}
            Quotes, proposals, summaries, handover notes.
          </li>
          <li>
            <strong>Classifying and routing.</strong> Is this
            ticket urgent? Is this lead qualified? Which
            department should handle this email?
          </li>
        </UL>
        <Para>
          What it is <em>not</em> good at (yet): reliable
          arithmetic, real-time facts it was not given, anything
          where being wrong is expensive and there is no human in
          the loop.
        </Para>

        <H2>Use cases earning their keep in Zimbabwe right now</H2>

        <H3>1. Invoice and document understanding</H3>
        <Para>
          Finance teams across Harare still type invoice data into
          Pastel or Sage by hand. A document-understanding pipeline
          reads the invoice image or PDF, extracts supplier, date,
          line items, VAT, and totals, and posts them to the
          accounting system, with a confidence score and a human
          review queue for edge cases. Typical ROI shows up quickly
          for any finance team processing a meaningful volume of
          invoices each month.
        </Para>

        <H3>2. WhatsApp customer service agents</H3>
        <Para>
          WhatsApp is the default customer channel in Zimbabwe.
          Most businesses have one or two people answering the
          same stock questions all day: pricing, availability,
          hours, delivery, returns. A well-scoped agent handles
          the repetitive majority of queries, hands off anything
          complex or sensitive to a human, logs every conversation,
          and never sleeps.
          Integration with your stock system means it can answer
          &ldquo;do you have this in Bulawayo?&rdquo; without
          calling the branch.
        </Para>

        <H3>3. Sales: lead qualification and proposal drafting</H3>
        <Para>
          Sales teams lose time on two things: chasing unqualified
          leads and rewriting the same proposal every week. AI
          handles the first by scoring inbound leads against your
          ideal-customer profile before a rep ever sees them. It
          handles the second by drafting first-cut proposals from
          a call transcript or brief, which a rep then edits
          rather than starts from scratch.
        </Para>

        <H3>4. Internal copilots over company data</H3>
        <Para>
          Every company has knowledge trapped in SharePoint folders,
          WhatsApp threads, and the head of whoever has been
          there longest. A private copilot, pointed at your own
          documents, lets any staff member ask: &ldquo;what is our
          refund policy for corporate clients?&rdquo; or &ldquo;how
          did we price the last billboard campaign for a
          telecom?&rdquo; and get an answer with sources. No
          customer data leaves your environment if the setup is
          done right.
        </Para>

        <H3>5. Operations: triage, summaries, and handovers</H3>
        <Para>
          Support queues, service tickets, incident reports, shift
          handovers. Any pile of unstructured text gets cleaner
          with a summariser and a classifier in front of it.
          Service managers read a digest instead of 200 tickets;
          on-call engineers start the morning with a briefing
          instead of scrolling Slack.
        </Para>

        <H2>What AI does not replace (yet)</H2>
        <UL>
          <li>
            Anyone in a role that requires judgment, empathy, or
            accountability. AI augments those roles; it does not
            remove them.
          </li>
          <li>
            Hard arithmetic and regulatory calculations. Those
            stay in deterministic code, with AI as the
            data-extraction layer in front.
          </li>
          <li>
            Decisions where being wrong costs real money and no
            one checks the output. That is where guardrails and
            human-in-the-loop belong.
          </li>
        </UL>

        <H2>Cost, and how to control it</H2>
        <Para>
          AI cost is usually either invisible or runaway. The trick
          is to treat it like any other infrastructure line. Route
          easy cases to cheaper models (Haiku, Gemini Flash),
          expensive cases to larger ones (Claude Opus, GPT-class),
          cache anything that repeats, and measure cost per task. A
          well-instrumented pipeline makes cost per action
          budgetable and forecastable instead of a surprise at the
          end of the month.
        </Para>

        <H2>Data, privacy, and sovereignty</H2>
        <Para>
          Running client data through foreign APIs is a
          legitimate concern, especially in regulated sectors. The
          answer is not to avoid AI; it is to pick the right
          deployment model. Enterprise API tiers from Anthropic
          and OpenAI contractually exclude your data from
          training. For stricter cases, open-weight models
          (Llama, Mistral, Qwen) run on infrastructure you control,
          including on-premise. The cost premium on that approach
          has shrunk sharply in the last couple of years.
        </Para>

        <H2>How to start (without wasting money)</H2>
        <UL>
          <li>
            Pick one process that burns hours weekly and has a
            clear success metric. Not five processes, not a
            platform. One process.
          </li>
          <li>
            Run a short pilot with real users and real data.
            Measure the before-state honestly.
          </li>
          <li>
            Build guardrails and evals before scaling. If your AI
            system has no tests, it is not a system; it is a
            prompt and a prayer.
          </li>
          <li>
            Expand after the pilot proves out. Not before.
          </li>
        </UL>

        <H2>The Zimbabwean advantage</H2>
        <Para>
          Local businesses are often small enough to deploy AI
          changes in days rather than quarters, and pragmatic
          enough to cut losses quickly when something does not
          work. That is a real edge over larger organisations
          drowning in procurement cycles. The teams that will
          benefit most from AI in Zimbabwe are not the biggest;
          they are the ones that pick sharp use cases, ship, and
          iterate.
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
