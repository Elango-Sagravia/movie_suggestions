"use client";

import SubscriberForm from "@/components/ui/subscriberForm/subscriberForm";
import { useAppContext } from "@/context/appContext";
import Image from "next/image";

import libre from "@/components/libre-font";
import content from "@/content/content";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { email, setEmail, message, tempEmail } = useAppContext();

  return (
    <div className="bg-nl_sec_background">
      <div className="flex px-4 md:px-16 pt-40 pb-24 lg:pt-44 bg-nl_sec_background max-w-7xl mx-auto lg:min-h-[650px]">
        <div className="flex-1">
          <p className="text-white py-4">{content.homePage.hero.preSubTitle}</p>
          <h1
            className={`${cn(
              `text-white text-4xl sm:text-5xl ${libre.className} leading-tight sm:leading-tight`
            )}`}
          >
            {content.homePage.hero.title}
          </h1>
          <p className="text-white py-4">{content.homePage.hero.subTitle}</p>
          {message === "successfully subscribed" && (
            <>
              <p className="text-nl_background font-bold mt-10 text-2xl">
                One last step!
              </p>
              <p className="text-white mt-4 text-sm w-3/4 md:w-1/2 text-black/70">
                <p>
                  Please check your <strong>{email}</strong> email and confirm
                  your free subscription (or we won’t be able to get to you).
                </p>

                <p className="text-white mt-2">
                  If you don’t see the email, check your{" "}
                  <strong>
                    promotions, spam, or other folders in your inbox
                  </strong>
                  .
                </p>
              </p>
              <button
                onClick={() => setEmail("")}
                className="text-white mt-4 text-sm w-full md:w-3/4 text-black/70 underline text-left"
              >
                Subscribe with different email
              </button>
            </>
          )}
          {message === "" && (
            <SubscriberForm formClasses="mt-4 pb-2 flex w-full sm:w-5/6  flex-col gap-2" />
          )}
          {message === "invalid email" && (
            <>
              <p className="text-white text-nl_background font-bold mt-10 text-2xl">
                ❌ Invalid Email
              </p>
              <p className="text-white mt-4 text-sm w-3/4 md:w-1/2 text-black/70">
                We were unable to validate your email,{" "}
                <strong>{tempEmail}</strong>. This may be due to a typo in the
                email address or inactivity over an extended period.
              </p>
              <button
                onClick={() => setEmail("")}
                className="text-white mt-4 text-sm w-full md:w-3/4 text-black/70 underline text-left"
              >
                Subscribe with different email
              </button>
            </>
          )}
        </div>
        <div className="hidden flex-1 lg:block relative flex items-center justify-center">
          <Image
            src={"/home-hero.png"}
            // layout="fill"
            // objectFit="cover"
            alt="Home screen banner image"
            width={470}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
