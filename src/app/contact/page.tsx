// src/app/contact/page.tsx
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact SuperBoost
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions about your superannuation? Our team of experts is
            here to help.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Phone
              </CardTitle>
              <CardDescription>Speak to our team directly</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">1300 SUPER (1300 78737)</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Monday to Friday: 9am - 5pm AEST
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </CardTitle>
              <CardDescription>Send us a message anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">contact@superboost.com.au</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We aim to respond within 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us
              </CardTitle>
              <CardDescription>Our office locations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">120 Collins Street</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Melbourne VIC 3000
                <br />
                By appointment only
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and one of our superannuation
                specialists will get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Inquiry Type</Label>
                  <select
                    id="inquiry-type"
                    defaultValue=""
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select an inquiry type
                    </option>
                    <option value="super-comparison">
                      Superannuation Fund Comparison
                    </option>
                    <option value="retirement-planning">
                      Retirement Planning
                    </option>
                    <option value="smsf">Self-Managed Super Fund</option>
                    <option value="insurance">Superannuation Insurance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry"
                    rows={5}
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="mr-2" />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to the{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted by SuperBoost.
                  </label>
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 rounded-lg border bg-muted/30 p-6">
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium">
                How quickly will I receive a response?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during
                business days. For urgent matters, we recommend calling our
                customer service team.
              </p>
            </div>
            <div>
              <h3 className="font-medium">
                Do I need to schedule an appointment to visit your office?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Yes, our offices operate on an appointment-only basis to ensure
                we can dedicate sufficient time to your needs. Please contact us
                by phone or email to arrange a meeting.
              </p>
            </div>
            <div>
              <h3 className="font-medium">
                Is there a fee for an initial consultation?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your initial 30-minute consultation is complimentary. This
                allows us to understand your situation and determine how we can
                best assist you with your superannuation needs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
