// Components
import Content from "../Content";
import ContactForm from "./ContactForm";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ContactItem from "../ContactItem";

// Tools
import { useState } from "react";

// Types
import type { FormState } from "@/components/shared/contact-form/types";
import { EMAIL, PHONE } from "@/data/business";

export default function ContactSection() {
  const [loadingState, setLoadingState] = useState<FormState>("idle");
  return (
    <section className="section bg-lunar-white">
      <Content>
        <div className="flex flex-col gap-24 lg:flex-row">
          <div className="flex max-w-xl flex-1 flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="heading-kicker font-2 uppercase">Contact Us</h2>
              <p className="heading-section font-2 text-lunar-primary">
                Let's Bounce
              </p>
            </div>
            <p className="body-copy">
              Got questions? Ready to book? We're here to help! Reach out and
              let's get your party started.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <ContactItem
                theme="LIGHT"
                label="Phone"
                contactInfo={PHONE}
                type="PHONE"
              />
              <ContactItem
                theme="LIGHT"
                label="Email"
                contactInfo={EMAIL}
                type="EMAIL"
              />
            </div>
          </div>
          <div className="max-w-xl flex-1">
            {loadingState === "idle" && (
              <ContactForm
                loadingState={loadingState}
                setLoadingState={setLoadingState}
              />
            )}

            {loadingState === "success" && <SuccessMessage />}
            {loadingState === "error" && <ErrorMessage />}
          </div>
        </div>
      </Content>
    </section>
  );
}
