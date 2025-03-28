import AdvertiseForm from "@/components/ui/advertiseForm/advertiseForm";
import AdvertiseHero from "@/components/ui/advertiseHero/advertiseHero";
import AdvertiseQuestion from "@/components/ui/advertiseQuestion/advertiseQuestion";
import AdvertiseStatus from "@/components/ui/advertiseStatus/advertiseStatus";

export const metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "https://www.moviesuggestions.com/advertise",
  },
};

export default function Advertise() {
  return (
    <main>
      <AdvertiseHero />
      <AdvertiseStatus />
      <AdvertiseForm />
      <AdvertiseQuestion />
    </main>
  );
}
