// Lib
import clsx from "clsx";

// Components
import FormInput from "./FormInput";
import { LinkButton } from "@/components/shared";

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
        "bg-gradient-dark body-copy px-8 py-16 shadow-2xl",
        className,
      )}
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="flex flex-col gap-4">
        <FormInput label="name" name="name" type="text" />
        <FormInput label="email" name="email" type="email" />
        <div className="grid grid-cols-2 gap-4">
          <FormInput label="phone" name="phone" type="tel" />
          <FormInput label="rental date" name="date" type="date" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lunar-white capitalize" htmlFor="message">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            className="bg-lunar-white rounded-xs p-2 text-black"
            placeholder="Tell us about your event..."
          />
        </div>
        <LinkButton type="submit" isButton>
          Submit
        </LinkButton>
      </div>
    </form>
  );
}
