"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useMemo, useState } from "react";

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

type PlaybookDownloadTriggerProps = {
  downloadPath?: string;
  downloadFileName?: string;
  source?: string;
  buttonLabel?: string;
};

const DEFAULT_DOWNLOAD_PATH =
  "/assets/documents/bd-playbook-training-consulting-professionals.pdf";
const DEFAULT_DOWNLOAD_FILENAME =
  "bd-playbook-training-consulting-professionals.pdf";
const DEFAULT_SOURCE = "playbook-growth-engine";

export default function PlaybookDownloadTrigger({
  downloadPath = DEFAULT_DOWNLOAD_PATH,
  downloadFileName = DEFAULT_DOWNLOAD_FILENAME,
  source = DEFAULT_SOURCE,
  buttonLabel = "Download Playbook",
}: PlaybookDownloadTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

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

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = downloadPath;
    link.download = downloadFileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.company.trim() ||
      !form.industry.trim() ||
      !form.niche.trim()
    ) {
      setMessage("Please complete all fields.");
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
          subject: "Playbook download request",
          message:
            "A new playbook access request was submitted from the article page.",
          source,
        },
        emailConfig.publicKey,
      );

      setMessage("Access unlocked. Your download is starting.");
      triggerDownload();
      setForm(INITIAL_FORM);
      setTimeout(() => setIsOpen(false), 600);
    } catch (error) {
      console.error("Playbook request failed:", error);
      setMessage("Failed to unlock download. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="about-two__btn">
        <button type="button" onClick={() => setIsOpen(true)}>
          {buttonLabel}
        </button>
      </div>

      {isOpen ? (
        <div className="playbook-modal" role="dialog" aria-modal="true">
          <div
            className="playbook-modal__overlay"
            onClick={() => setIsOpen(false)}
          />
          <div className="playbook-modal__panel">
            <div className="playbook-modal__head">
              <p className="playbook-modal__kicker">Download Access</p>
              <button
                type="button"
                className="playbook-modal__close"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              >
                x
              </button>
            </div>
            <p className="playbook-modal__text">
              Please share your details first. Download links will unlock
              immediately.
            </p>

            <form className="playbook-modal__form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                type="email"
                placeholder="Work email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <input
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
              <select
                value={form.industry}
                onChange={(e) => handleChange("industry", e.target.value)}
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
                onChange={(e) => handleChange("niche", e.target.value)}
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

              <div className="about-two__btn">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Unlocking..." : "Unlock playbook downloads"}
                </button>
              </div>
            </form>

            {message ? (
              <p className="playbook-modal__message">{message}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
