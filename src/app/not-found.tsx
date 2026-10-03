import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[65vh] items-center justify-center px-4 py-12 sm:px-6">
      <div className="w-full max-w-xl text-center">
        {/* Error Code */}
        <p className="text-7xl font-black tracking-tight text-red-600 sm:text-8xl">
          404
        </p>

        {/* Divider */}
        <div className="mx-auto my-5 h-1 w-16 rounded-full bg-red-600"></div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          খবরটি পাওয়া যায়নি
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          আপনি যে খবরটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে, সরিয়ে নেওয়া হয়েছে
          অথবা লিংকটি সঠিক নয়।
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
