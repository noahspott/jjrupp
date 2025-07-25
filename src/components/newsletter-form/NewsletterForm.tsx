// Lib
import clsx from "clsx";
import { useState } from "react";

// Components
import { Button } from "@/components/shared";

// Types
import type { Dispatch, SetStateAction } from "react";
import type { FormState } from "@/types/FormState";

export default function NewsletterForm({
  className = "",
}: {
  className?: string;
}) {
  const [formState, setFormState] = useState<FormState>("idle");

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");
    console.log("Submitting!");

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      fetch("/__newsletter.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch (error) {
      console.error("Whoops. Something went wrong. Please try again.");
      setFormState("error");
    } finally {
      setFormState("success");
    }
  }

  return (
    <form
      data-netlify="true"
      netlify-honeypot="true"
      name="newsletter"
      method="POST"
      className={clsx("", className)}
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
        <div className="flex flex-col gap-4 sm:flex-row">
          {formState === "idle" && (
            <input
              id="email"
              type="email"
              name="email"
              className="border-secondary flex-grow border-2 p-2"
              required
            />
          )}

          {formState === "success" && (
            <div className="border-tertiary flex flex-grow items-center border-2 p-2">
              <p className="text-secondary">
                You've been added the the newsletter!
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={formState !== "idle"}
            variant="secondary"
            aria-label="Sign up for newsletter"
          >
            {formState === "submitting" ? "Submitting" : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
