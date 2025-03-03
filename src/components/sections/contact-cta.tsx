import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ContactCta() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        Ready to boost your super?
      </h2>
      <p className="mt-4 max-w-2xl text-lg">
        Get in touch with our team of experts for personalized advice on
        optimizing your superannuation strategy.
      </p>
      <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">
            <Mail className="mr-2 size-4" />
            Contact Us
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="bg-background/20"
          asChild
        >
          <Link href="tel:1300787378">
            <Phone className="mr-2 size-4" />
            1300 SUPER (1300 78737)
          </Link>
        </Button>
      </div>
    </div>
  );
}
