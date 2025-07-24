// Components
import { Content, Section } from "@/components/shared";
import ContactForm from "./ContactForm";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ContactItem from "./ContactItem";

// Tools
import { useState } from "react";

// Types
import type { FormState } from "@/components/contact-form/types";
import { EMAIL, PHONE } from "@/data/business";

export default function ContactSection() {
  const [loadingState, setLoadingState] = useState<FormState>("idle");
  return (
    <Section>
      <Content>
        <div className="flex flex-col gap-24">
          <div className="flex max-w-xl flex-1 flex-col gap-8">
            <h1 className="heading-2 mb-8">Contact</h1>
            <p className="body-base">
              For bookings, licensing opportunities, collaboration proposals, or
              press requests, please use the form below to get in touch.
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
    </Section>
  );
}
