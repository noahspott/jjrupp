// Lib
import clsx from "clsx";

// Components
import FormInput from "./FormInput";
import { Button } from "@/components/shared";

// Types
import type { Dispatch, SetStateAction } from "react";
import type { FormState } from "./types";

export default function ContactForm({
  loadingState,
  setLoadingState,
  className = "",
}: {
  loadingState: FormState;
  setLoadingState: Dispatch<SetStateAction<FormState>>;
  className?: string;
}) {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoadingState("submitting");
    console.log("Submitting!");

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch (error) {
      console.error("Whoops. Something went wrong. Please try again.");
      setLoadingState("error");
    } finally {
      setLoadingState("success");
    }
  }

  return (
    <form
      data-netlify="true"
      netlify-honeypot="true"
      name="contact"
      method="POST"
      className={clsx(
        "bg-primary body-copy text-secondary px-8 py-16 shadow-2xl",
        className,
      )}
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <FormInput label="name" name="name" type="text" className="flex-1" />
          <FormInput label="phone" name="phone" type="tel" className="flex-1" />
        </div>
        <FormInput label="email" name="email" type="email" />
        <div className="flex flex-col gap-2">
          <label className="capitalize" htmlFor="message">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            className="border-secondary border-2 p-2"
            placeholder="Tell us about your event..."
          />
        </div>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
