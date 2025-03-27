import { Separator } from "@/components/ui/separator";
import libre from "@/components/libre-font";

export default function HeadingWithUnderline({ text }) {
  return (
    <>
      <h2
        className={`text-2xl ${libre.className} leading-tight text-nl_background`}
      >
        {text}
      </h2>
      <Separator className="bg-nl_background mt-1" />
    </>
  );
}
