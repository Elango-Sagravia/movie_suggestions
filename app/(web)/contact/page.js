import ContactForm from "@/components/ui/contactForm/contactForm";
import Faq from "@/components/ui/faq/faq";
import Subscribe from "@/components/ui/subscribe/subscribe";
import libre from "@/components/libre-font";
import ContactHeader from "@/components/ui/contactHeader/contactHeader";

export const metadata = {
  title: "Contact Us – Get in Touch with Movie Suggestions",
  description:
    "Have a question or suggestion? Contact Movie Suggestions for inquiries, feedback, or collaborations. We’d love to hear from you!",
  alternates: {
    canonical: "https://www.moviesuggestions.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="mt-10">
      {/* <header className="px-4 lg:px-16 py-20 max-w-7xl mx-auto">
        <h1 className={`text-4xl text-nl_background ${libre.className}`}>
          Contact us
        </h1>
      </header> */}
      <ContactHeader />
      <ContactForm />
      <Faq />
      <Subscribe />
    </main>
  );
}
