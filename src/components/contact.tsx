"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { sendEmail } from "@/lib/sendEmail";
import { toast } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

interface ContactProps {
  delay?: number;
}

export function Contact({ delay = 0 }: ContactProps) {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={delay}>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Please contact me directly at{" "}
              <a className="underline" href="mailto:benrogers1299@outlook.com">
                benrogers1299@outlook.com
              </a>{" "}
              or through this form.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={delay + 0.01}>
          <form
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
            className="mt-6 flex flex-col w-[min(100%,38rem)] mx-auto dark:text-black"
          >
            <input
              className="h-14 px-4 rounded-lg border border-input dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="h-52 my-3 rounded-lg border border-input p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            >
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </button>
          </form>
        </BlurFade>
      </div>
    </section>
  );
}
