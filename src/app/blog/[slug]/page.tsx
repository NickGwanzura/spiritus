import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import { getPost, posts } from "@/data/posts";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ paddingTop: 88, background: "var(--bg)" }}>
      <JsonLd
        id="ld-breadcrumb-blog-post"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        id="ld-blogposting"
        data={blogPostingJsonLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          author: post.author,
        })}
      />

      <article
        style={{
          padding: "64px 56px 120px",
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            textDecoration: "none",
            marginBottom: 32,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M9 6H3M6 3L3 6L6 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All insights
        </Link>

        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            marginBottom: 18,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.03em",
            color: "var(--fg-subtle)",
            flexWrap: "wrap",
          }}
        >
          <time dateTime={post.publishedAt}>
            Published{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <>
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "var(--fg-dim)",
                }}
              />
              <time
                dateTime={post.updatedAt}
                style={{ color: "var(--accent)" }}
              >
                Updated{" "}
                {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </>
          )}
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "var(--fg-dim)",
            }}
          />
          <span>{post.readingMinutes} min read</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(32px, 4.5vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--fg)",
            margin: "0 0 22px",
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "var(--fg-muted)",
            margin: "0 0 48px",
            paddingBottom: 32,
            borderBottom: "1px solid var(--border)",
          }}
        >
          {post.description}
        </p>

        <div>{post.body}</div>

        <div
          style={{
            marginTop: 64,
            padding: "32px 28px",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-md)",
            background: "var(--bg-raised)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                fontWeight: 600,
                color: "var(--fg)",
                marginBottom: 4,
              }}
            >
              Have a project to scope?
            </div>
            <div style={{ fontSize: 14, color: "var(--fg-muted)" }}>
              Tell us what you want built. We respond within 24 hours.
            </div>
          </div>
          <Link href="/contact" className="btn-amber">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7H11M7 3L11 7L7 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div
          style={{
            marginTop: 32,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--fg-subtle)",
          }}
        >
          Published by{" "}
          <Link
            href={SITE_URL}
            style={{ color: "var(--fg-muted)", textDecoration: "none" }}
          >
            {post.author}
          </Link>
          {post.tags.length > 0 && (
            <>
              {" · "}
              {post.tags.join(" · ")}
            </>
          )}
        </div>
      </article>
    </div>
  );
}
