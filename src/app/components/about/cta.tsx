"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type FieldError = {
  message: string;
  type: "required" | "pattern" | "minLength" | "maxLength";
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function CTA() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Touched fields tracking
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation state
  const [errors, setErrors] = useState<Record<string, FieldError>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mark field as touched on blur
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Validate individual field
  const validateField = (
    name: keyof FormData,
    value: string,
  ): FieldError | null => {
    switch (name) {
      case "firstName":
        return !value.trim()
          ? { message: "First name is required", type: "required" }
          : null;
      case "lastName":
        return !value.trim()
          ? { message: "Last name is required", type: "required" }
          : null;
      case "email":
        if (!value.trim()) {
          return { message: "Email is required", type: "required" };
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          return {
            message: "Please enter a valid email address",
            type: "pattern",
          };
        }
        return null;
      case "phone":
        return value.trim() && !/^[0-9+\s()-]{8,20}$/.test(value)
          ? { message: "Please enter a valid phone number", type: "pattern" }
          : null;
      case "message":
        if (!value.trim()) {
          return {
            message: "Please tell us how we can help you",
            type: "required",
          };
        } else if (value.trim().length < 10) {
          return {
            message: "Message must be at least 10 characters",
            type: "minLength",
          };
        }
        return null;
      default:
        return null;
    }
  };

  // Validate the entire form
  const validateForm = (): boolean => {
    const newErrors: Record<string, FieldError> = {};
    let isValid = true;

    // Validate each field
    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Validate touched fields on change
  useEffect(() => {
    const newErrors: Record<string, FieldError> = {};

    Object.keys(touched).forEach((field) => {
      if (touched[field]) {
        const key = field as keyof FormData;
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[field] = error;
        }
      }
    });

    setErrors(newErrors);
  }, [formData, touched]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, field) => {
        acc[field] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    setTouched(allTouched);

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTouched({});

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1000);
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        (firstErrorField as HTMLElement).focus();
      }
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Let&apos;s Discuss Your Superannuation Strategy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form to schedule a consultation with one of our
              expert advisors. We&apos;ll analyze your current situation and
              provide personalized recommendations.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="size-6" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-base text-gray-600">
                    <a
                      href="mailto:contact@supaboost.com.au"
                      className="hover:text-primary"
                    >
                      contact@supaboost.com.au
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="size-6" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-base text-gray-600">
                    <a href="tel:+61212345678" className="hover:text-primary">
                      (02) 1234 5678
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="size-6" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">
                    Office
                  </h3>
                  <address className="mt-1 text-base not-italic text-gray-600">
                    123 Financial District
                    <br />
                    Sydney, NSW 2000
                    <br />
                    Australia
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            {/* Success message */}
            {isSuccess ? (
              <div className="mb-6 rounded-md bg-green-50 p-4" role="alert">
                <div className="flex">
                  <div className="shrink-0">
                    <Check
                      className="size-5 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Consultation Request Received
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>
                        Thank you for contacting us. One of our expert advisors
                        will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 ${errors.firstName ? "border-red-300 ring-1 ring-red-300" : ""}`}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                    required
                  />
                  {errors.firstName && (
                    <p
                      id="firstName-error"
                      className="mt-1 text-xs text-red-500"
                      role="alert"
                    >
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 ${errors.lastName ? "border-red-300 ring-1 ring-red-300" : ""}`}
                    aria-invalid={errors.lastName ? "true" : "false"}
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                    required
                  />
                  {errors.lastName && (
                    <p
                      id="lastName-error"
                      className="mt-1 text-xs text-red-500"
                      role="alert"
                    >
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 ${errors.email ? "border-red-300 ring-1 ring-red-300" : ""}`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-xs text-red-500"
                    role="alert"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 ${errors.phone ? "border-red-300 ring-1 ring-red-300" : ""}`}
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p
                    id="phone-error"
                    className="mt-1 text-xs text-red-500"
                    role="alert"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  How can we help you?{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-1 ${errors.message ? "border-red-300 ring-1 ring-red-300" : ""}`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  required
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-xs text-red-500"
                    role="alert"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="-ml-1 mr-2 size-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Schedule Consultation"
                  )}
                </Button>
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                By submitting this form, you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
