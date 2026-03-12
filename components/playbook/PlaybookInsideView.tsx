"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  PLAYBOOK_ARTICLES,
  PLAYBOOK_CATEGORIES,
  PlaybookCategory,
} from "@/lib/playbooks";

type FormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  niche: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  niche: "",
};

const PLAYBOOK_ACCESS_KEY = "amka_playbook_download_access_v1";

export default function PlaybookInsideView() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<PlaybookCategory>("All");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedAccess = window.localStorage.getItem(PLAYBOOK_ACCESS_KEY);
    setIsUnlocked(savedAccess === "1");
  }, []);

  const emailConfig = useMemo(
    () => ({
      serviceId:
        process.env.NEXT_PUBLIC_EMAIL_SERVICEID ||
        process.env.VITE_EMAIL_SERVICEID,
      templateId:
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATEID ||
        process.env.VITE_EMAIL_TEMPLATEID,
      publicKey:
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ||
        process.env.VITE_EMAIL_PUBLIC_KEY,
    }),
    [],
  );

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleUnlock = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.company.trim() ||
      !form.industry.trim() ||
      !form.niche.trim()
    ) {
      setMessage("Please complete all fields to unlock downloads.");
      return;
    }

    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      setMessage("Email service is not configured.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: form.name,
          email: form.email,
          company: form.company,
          industry: form.industry,
          niche: form.niche,
          subject: "Playbook library download access request",
          message: "A user unlocked playbook downloads from /inside.",
          source: "playbook-inside-library",
        },
        emailConfig.publicKey,
      );

      setIsUnlocked(true);
      setForm(INITIAL_FORM);
      setMessage("Access unlocked. You can now download all playbooks below.");
      if (typeof window !== "undefined") {
        window.localStorage.setItem(PLAYBOOK_ACCESS_KEY, "1");
      }
    } catch (error) {
      console.error("Playbook library unlock failed:", error);
      setMessage("Failed to unlock downloads. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return PLAYBOOK_ARTICLES.filter((article) => {
      const categoryMatch =
        activeCategory === "All" || article.category === activeCategory;
      if (!categoryMatch) return false;

      if (!normalizedQuery) return true;

      const searchableText = [
        article.title,
        article.excerpt,
        article.hook,
        article.category,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section className="playbook-library">
      <div className="container">
        <div className="playbook-library__head">
          <p className="playbook-library__kicker">Library</p>
          <h2 className="playbook-library__title">All articles</h2>
          <input
            type="text"
            className="playbook-library__search"
            placeholder="Search by title or hook..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="playbook-library__filters">
            {PLAYBOOK_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "playbook-library__chip is-active"
                    : "playbook-library__chip"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row">
          {filteredArticles.map((article) => (
            <div key={article.slug} className="col-xl-4 col-md-6">
              <article className="playbook-library__card">
                <p className="playbook-library__card-category">
                  {article.category}
                </p>
                <h3 className="playbook-library__card-title">{article.title}</h3>
                <p className="playbook-library__card-hook">{article.hook}</p>
                <p className="playbook-library__card-excerpt">
                  {article.excerpt}
                </p>
                <Link className="playbook-library__card-link" href={article.href}>
                  Read article
                </Link>
              </article>
            </div>
          ))}
        </div>

        <div className="playbook-library__downloads">
          <p className="playbook-library__kicker">Part B - Playbooks</p>
          <h2 className="playbook-library__title">Choose your industry playbook</h2>
          <p className="playbook-library__subtitle">
            Download the full implementation-ready playbook for your industry.
          </p>

          <div className="playbook-library__unlock">
            <p className="playbook-library__unlock-kicker">Download Access</p>
            {isUnlocked ? (
              <p className="playbook-library__unlock-text">
                Access unlocked. You can now download all playbooks below.
              </p>
            ) : (
              <form
                className="playbook-library__access-form"
                onSubmit={handleUnlock}
              >
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                />
                <input
                  type="email"
                  placeholder="Work email"
                  value={form.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={form.company}
                  onChange={(event) =>
                    handleChange("company", event.target.value)
                  }
                />
                <select
                  value={form.industry}
                  onChange={(event) =>
                    handleChange("industry", event.target.value)
                  }
                >
                  <option value="">Select industry</option>
                  <option value="Training & Consulting">
                    Training & Consulting
                  </option>
                  <option value="Technical Services">Technical Services</option>
                  <option value="Built Environment">Built Environment</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  value={form.niche}
                  onChange={(event) => handleChange("niche", event.target.value)}
                >
                  <option value="">Select niche</option>
                  <option value="Leadership Development">
                    Leadership Development
                  </option>
                  <option value="Organisational Development">
                    Organisational Development
                  </option>
                  <option value="Sales / Commercial">Sales / Commercial</option>
                  <option value="HR / L&D">HR / L&D</option>
                </select>
                <div className="about-two__btn" >
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Unlocking..." : "Unlock Downloads"}
                  </button>
                </div>
              </form>
            )}
            {message ? (
              <p className="playbook-library__unlock-message">{message}</p>
            ) : null}
          </div>

          {PLAYBOOK_ARTICLES.map((article) => (
            <div key={article.slug} className="playbook-library__download-row">
              <div>
                <h4 className="playbook-library__download-title">
                  The Business Development Playbook for {article.title}
                </h4>
                <p className="playbook-library__download-meta">{article.niches}</p>
              </div>
              {isUnlocked ? (
                <a
                  className="playbook-library__download-btn"
                  href={article.downloadPath}
                  download={article.downloadFileName}
                >
                  Download PDF
                </a>
              ) : (
                <button
                  type="button"
                  className="playbook-library__download-btn is-disabled"
                  disabled
                >
                  Unlock to Download
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
