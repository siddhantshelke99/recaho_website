"use client";

import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/common/Button";
import {
  countries,
  dialCodes,
  interestedProducts,
  outletRanges,
  restaurantTypes,
  validateLead,
} from "@/lib/validation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "demo" | "contact";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  restaurantName: string;
  country: string;
  restaurantType: string;
  outlets: string;
  product: string;
  message: string;
  website: string;
};

const EMPTY: FormState = {
  fullName: "",
  email: "",
  phone: "",
  countryCode: "+91",
  restaurantName: "",
  country: "",
  restaurantType: "",
  outlets: "",
  product: "Not sure yet",
  message: "",
  website: "",
};

const inputClass =
  "h-11 w-full min-w-0 rounded-lg border border-line bg-white px-3 text-[0.9rem] text-ink placeholder:text-muted/80 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; reference?: string }
  | { state: "error"; message: string; code?: string };

export function DemoForm({ variant = "demo" }: { variant?: Variant }) {
  const pathname = usePathname();
  const formId = useId();
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const isDemo = variant === "demo";

  function update(field: keyof FormState, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "idle" });

    const validation = validateLead({ ...values, type: isDemo ? "demo" : "contact", sourcePath: pathname });

    if (!validation.ok) {
      setErrors(validation.errors);
      const firstField = Object.keys(validation.errors)[0];
      if (firstField && firstField !== "form") {
        document.getElementById(`${formId}-${firstField}`)?.focus();
      }
      return;
    }

    setErrors({});
    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: isDemo ? "demo" : "contact", sourcePath: pathname }),
      });

      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        code?: string;
        message?: string;
        reference?: string;
        errors?: Record<string, string>;
      };

      if (response.ok && body.ok) {
        setStatus({ state: "success", reference: body.reference });
        setValues(EMPTY);
        return;
      }

      if (body.errors) setErrors(body.errors);
      setStatus({
        state: "error",
        code: body.code,
        message:
          body.message ??
          "The enquiry could not be delivered right now. Please email or call the sales team so nothing is missed.",
      });
    } catch {
      setStatus({
        state: "error",
        message: "Network error — the enquiry was not sent. Please check your connection and try again.",
      });
    }
  }

  const mailtoBody = encodeURIComponent(
    `Name: ${values.fullName}\nRestaurant: ${values.restaurantName}\nCountry: ${values.country}\nType: ${values.restaurantType}\nOutlets: ${values.outlets}\nInterested in: ${values.product}\n\n${values.message}`,
  );

  if (status.state === "success") {
    return (
      <div className="rounded-[var(--radius-panel)] border border-success/25 bg-success/5 p-7 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-success/10">
          <CheckCircle2 className="size-6 text-success" aria-hidden />
        </span>
        <h2 className="mt-4 font-display text-xl font-bold text-ink">Your enquiry has been received</h2>
        <p className="mx-auto mt-2 max-w-md text-[0.9rem] leading-relaxed text-body">
          A Recaho specialist will contact you on the details provided, usually within one business day.
          {status.reference ? (
            <>
              {" "}
              Reference: <strong className="font-semibold text-ink">{status.reference}</strong>.
            </>
          ) : null}
        </p>
        <p className="mt-4 text-[0.8rem] text-muted">
          Prefer to talk now? Call{" "}
          <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="font-medium text-brand">
            {site.phones[0]}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="w-full min-w-0 rounded-[var(--radius-panel)] border border-line bg-white p-5 sm:p-7"
    >
      <div className="grid grid-cols-1 gap-4 [&>*]:min-w-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="min-w-0 sm:col-span-1">
          <FieldLabel htmlFor={`${formId}-fullName`} required>
            Full name
          </FieldLabel>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
            className={cn(inputClass, errors.fullName && "border-brand")}
            placeholder="Your name"
          />
          <FieldError id={`${formId}-fullName-error`} message={errors.fullName} />
        </div>

        <div>
          <FieldLabel htmlFor={`${formId}-email`} required>
            Business email
          </FieldLabel>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={cn(inputClass, errors.email && "border-brand")}
            placeholder="you@restaurant.com"
          />
          <FieldError id={`${formId}-email-error`} message={errors.email} />
        </div>

        <div>
          <FieldLabel htmlFor={`${formId}-phone`} required>
            Mobile number
          </FieldLabel>
                      <div className="flex min-w-0 gap-2">
            <select
              aria-label="Country calling code"
              value={values.countryCode}
              onChange={(event) => update("countryCode", event.target.value)}
              className="h-11 w-[6.6rem] shrink-0 rounded-lg border border-line bg-white px-2 text-[0.85rem] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
            >
              {dialCodes.map((dial) => (
                <option key={`${dial.code}-${dial.country}`} value={dial.code}>
                  {dial.code} · {dial.country.slice(0, 2).toUpperCase()}
                </option>
              ))}
            </select>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              required
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
              className={cn(inputClass, "min-w-0 flex-1", errors.phone && "border-brand")}
              placeholder="98765 43210"
            />
          </div>
          <FieldError id={`${formId}-phone-error`} message={errors.phone} />
        </div>

        {isDemo ? (
          <>
            <div>
              <FieldLabel htmlFor={`${formId}-restaurantName`} required>
                Restaurant name
              </FieldLabel>
              <input
                id={`${formId}-restaurantName`}
                name="restaurantName"
                type="text"
                autoComplete="organization"
                value={values.restaurantName}
                onChange={(event) => update("restaurantName", event.target.value)}
                aria-invalid={Boolean(errors.restaurantName)}
                aria-describedby={errors.restaurantName ? `${formId}-restaurantName-error` : undefined}
                className={cn(inputClass, errors.restaurantName && "border-brand")}
                placeholder="Restaurant or group name"
              />
              <FieldError id={`${formId}-restaurantName-error`} message={errors.restaurantName} />
            </div>

            <div>
              <FieldLabel htmlFor={`${formId}-country`} required>
                Country
              </FieldLabel>
              <select
                id={`${formId}-country`}
                name="country"
                value={values.country}
                onChange={(event) => update("country", event.target.value)}
                aria-invalid={Boolean(errors.country)}
                aria-describedby={errors.country ? `${formId}-country-error` : undefined}
                className={cn(inputClass, errors.country && "border-brand")}
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <FieldError id={`${formId}-country-error`} message={errors.country} />
            </div>

            <div>
              <FieldLabel htmlFor={`${formId}-restaurantType`} required>
                Restaurant type
              </FieldLabel>
              <select
                id={`${formId}-restaurantType`}
                name="restaurantType"
                value={values.restaurantType}
                onChange={(event) => update("restaurantType", event.target.value)}
                aria-invalid={Boolean(errors.restaurantType)}
                aria-describedby={errors.restaurantType ? `${formId}-restaurantType-error` : undefined}
                className={cn(inputClass, errors.restaurantType && "border-brand")}
              >
                <option value="">Select type</option>
                {restaurantTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <FieldError id={`${formId}-restaurantType-error`} message={errors.restaurantType} />
            </div>

            <div>
              <FieldLabel htmlFor={`${formId}-outlets`} required>
                Number of outlets
              </FieldLabel>
              <select
                id={`${formId}-outlets`}
                name="outlets"
                value={values.outlets}
                onChange={(event) => update("outlets", event.target.value)}
                aria-invalid={Boolean(errors.outlets)}
                aria-describedby={errors.outlets ? `${formId}-outlets-error` : undefined}
                className={cn(inputClass, errors.outlets && "border-brand")}
              >
                <option value="">Select outlets</option>
                {outletRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              <FieldError id={`${formId}-outlets-error`} message={errors.outlets} />
            </div>

            <div className="sm:col-span-2">
              <FieldLabel htmlFor={`${formId}-product`}>Interested product</FieldLabel>
              <select
                id={`${formId}-product`}
                name="product"
                value={values.product}
                onChange={(event) => update("product", event.target.value)}
                className={inputClass}
              >
                {interestedProducts.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : null}

        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${formId}-message`} required={!isDemo}>
            {isDemo ? "Additional message (optional)" : "How can we help?"}
          </FieldLabel>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={isDemo ? 3 : 5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            className={cn(
              "w-full min-w-0 rounded-lg border border-line bg-white px-3 py-2.5 text-[0.9rem] text-ink placeholder:text-muted/80 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15",
              errors.message && "border-brand",
            )}
            placeholder={
              isDemo
                ? "Current systems, must-have features or rollout timing."
                : "Tell us about your restaurant, outlets or the integration you need."
            }
          />
          <FieldError id={`${formId}-message-error`} message={errors.message} />
        </div>
      </div>

      {/* Honeypot — hidden from users and assistive technology */}
      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      {status.state === "error" ? (
        <div
          role="alert"
          className="mt-5 rounded-lg border border-brand/25 bg-brand-50 p-4 text-[0.85rem] leading-relaxed text-ink-700"
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <div>
              <p className="font-semibold text-ink">
                {status.code === "not_configured" ? "This form is not connected yet" : "We could not send this enquiry"}
              </p>
              <p className="mt-1">{status.message}</p>
              <div className="mt-2.5 flex flex-wrap gap-4">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Recaho demo request")}&body=${mailtoBody}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-600"
                >
                  <Mail className="size-3.5" aria-hidden /> Email {site.email}
                </a>
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-600"
                >
                  <Phone className="size-3.5" aria-hidden /> {site.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status.state === "submitting"} className="w-full sm:w-auto">
          {status.state === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : isDemo ? (
            "Request my free demo"
          ) : (
            "Send message"
          )}
        </Button>
        <p className="max-w-xs text-[0.72rem] leading-relaxed text-muted">
          We use these details only to respond to your enquiry. No marketing list, no reselling of data.
        </p>
      </div>
    </form>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[0.8rem] font-medium text-ink">
      {children}
      {required ? <span className="ml-0.5 text-brand">*</span> : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 flex items-center gap-1 text-[0.72rem] font-medium text-brand">
      <AlertCircle className="size-3" aria-hidden />
      {message}
    </p>
  );
}
