import PrimaryLinkButton from "../PrimaryLinkButton/PrimaryLinkButton";
import { ArrowRight } from "lucide-react";
import libre from "@/components/libre-font";

export default function AdvertiseQuestion() {
  return (
    <section className="px-4 md:px-16 py-24 bg-nl_sec_background">
      <div className="flex flex-col items-center">
        <h5
          className={`text-nl_background text-5xl text-center ${libre.className} leading-tight`}
        >
          Still got questions?
        </h5>
        <PrimaryLinkButton className="max-w-40 mt-20" href="/contact">
          <ArrowRight size={18} color="hsl(48 94% 62%)" />
          <span className="px-2">Contact Us</span>
        </PrimaryLinkButton>
      </div>
    </section>
  );
}
