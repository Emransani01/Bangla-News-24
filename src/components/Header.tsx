import Image from "next/image";
import NaveLinks from "./NaveLinks";

export const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="relative w-full px-4 py-4 sm:px-6 lg:px-10">
        {/* Logo + Title + Date */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/logo.webp"
            alt="Bangla News 24 Logo"
            width={50}
            height={50}
            className="h-10 w-10"
          />

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Bangla News 24
            </h2>

            <p className="text-sm text-gray-600">
              {date}
            </p>
          </div>
        </div>

        {/* Sign In + Sign Up */}
        <div className="mt-4 flex items-center justify-center gap-3 sm:absolute sm:right-6 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 lg:right-10">
          <button className="rounded-lg border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
            সাইন ইন
          </button>

          <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
            সাইন আপ
          </button>
        </div>
      </div>

      {/* Navigation */}
      <NaveLinks />
    </header>
  );
};