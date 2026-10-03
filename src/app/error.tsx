"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
        {/* Error Icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <span className="text-3xl font-bold text-red-600">!</span>
        </div>

        {/* Error Code */}
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-600">
          Something went wrong
        </p>

        {/* Title */}
        <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          খবর লোড করা যাচ্ছে না
        </h1>

        {/* Description */}
        <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
          এই মুহূর্তে খবরগুলো লোড করতে সমস্যা হচ্ছে। কিছুক্ষণ পর আবার চেষ্টা
          করুন।
        </p>

        {/* Try Again */}
        <button
          onClick={() => reset()}
          className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          আবার চেষ্টা করুন
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;
