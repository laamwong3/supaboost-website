import { Container } from "@/components/layout/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">SuperBoost</h3>
            <p className="text-sm text-muted-foreground">
              Helping Australians boost their retirement savings with expert
              guidance and powerful tools.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="hover:text-foreground">
                  Fund Comparison
                </Link>
              </li>
              <li>
                <Link href="/advice" className="hover:text-foreground">
                  Superannuation Advice
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-foreground">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-foreground">
                  Legislative Updates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@superboost.com.au</li>
              <li>Phone: 1300 SUPER (1300 78737)</li>
              <li>120 Collins Street, Melbourne VIC 3000</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SuperBoost. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-foreground">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
