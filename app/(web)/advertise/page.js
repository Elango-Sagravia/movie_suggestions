import AdvertiseForm from "@/components/ui/advertiseForm/advertiseForm";
import AdvertiseHero from "@/components/ui/advertiseHero/advertiseHero";
import AdvertiseQuestion from "@/components/ui/advertiseQuestion/advertiseQuestion";
import AdvertiseStatus from "@/components/ui/advertiseStatus/advertiseStatus";

export const metadata = {
  title: "Advertise with Us – Partner with Movie Suggestions",
  description:
    " Reach a movie-loving audience! Advertise with Movie Suggestions and showcase your brand to film enthusiasts worldwide. Get started today",
  alternates: {
    canonical: "https://www.moviesuggestions.com/advertise",
  },
};

export default function Advertise() {
  return (
    <main className="mt-10">
      <AdvertiseHero />
      {/* <AdvertiseStatus /> */}
      <AdvertiseForm />
      <AdvertiseQuestion />
    </main>
  );
}
