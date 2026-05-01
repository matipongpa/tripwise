"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

interface TripFormData {
  destination: string;
  startDate: string;
  endDate: string;
  budget: string;
  travelStyle: string;
  travelers: string;
  email: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/";

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-lg text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-shadow bg-white";

const labelClass = "block text-sm font-medium text-foreground mb-1.5";

export default function InputForm() {
  const [form, setForm] = useState<TripFormData>({
    destination: "Bangkok, Thailand",
    startDate: "",
    endDate: "",
    budget: "",
    travelStyle: "",
    travelers: "",
    email: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="form" className="py-12 md:py-20 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            You&apos;re on the list!
          </h2>
          <p className="text-gray-500">
            We&apos;ll send your Bangkok trip plan to{" "}
            <span className="font-medium text-foreground">{form.email}</span>{" "}
            within a few minutes.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-12 md:py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          Plan your Bangkok trip
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Fill in your details and we&apos;ll build your itinerary.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] mx-auto bg-white border border-gray-200 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label htmlFor="destination" className={labelClass}>
              Destination
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              value={form.destination}
              readOnly
              className={`${inputClass} bg-gray-50 cursor-default text-gray-500`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className={labelClass}>
                Start date
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={form.startDate}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="endDate" className={labelClass}>
                End date
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={form.endDate}
                onChange={handleChange}
                required
                min={form.startDate}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="budget" className={labelClass}>
              Total budget
            </label>
            <div className="relative">
              <input
                id="budget"
                name="budget"
                type="number"
                value={form.budget}
                onChange={handleChange}
                placeholder="e.g. 5000"
                required
                min={0}
                className={`${inputClass} pr-20`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none select-none">
                ฿ THB
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="travelStyle" className={labelClass}>
              Travel style
            </label>
            <select
              id="travelStyle"
              name="travelStyle"
              value={form.travelStyle}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="" disabled>
                Select travel style
              </option>
              <option value="budget">Budget backpacker</option>
              <option value="midrange">Mid-range couple</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div>
            <label htmlFor="travelers" className={labelClass}>
              Number of travelers
            </label>
            <select
              id="travelers"
              name="travelers"
              value={form.travelers}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="" disabled>
                Select number
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className={inputClass}
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-base hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting"
              ? "Generating your plan…"
              : "Generate my trip plan →"}
          </button>

          <p className="text-center text-xs text-gray-500">
            We&apos;ll send your plan to your email within a few minutes.
          </p>
        </form>
      </div>
    </section>
  );
}
