import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* About */}
          <div>
            <h2 className="mb-3 text-xl font-bold">
              Bangla News 24
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              দেশের সর্বশেষ খবর, গুরুত্বপূর্ণ সংবাদ এবং
              বিভিন্ন বিভাগের আপডেট এক জায়গায়।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-bold">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link
                href="/"
                className="transition hover:text-red-500"
              >
                হোম
              </Link>

              <Link
                href="/"
                className="transition hover:text-red-500"
              >
                সর্বশেষ খবর
              </Link>

              <Link
                href="/"
                className="transition hover:text-red-500"
              >
                সর্বাধিক পঠিত
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-lg font-bold">
              যোগাযোগ
            </h3>

            <div className="space-y-2 text-sm text-gray-400">
              <p>ইমেইল: info@banglanews24.com</p>
              <p>ফোন: +880 1234-567890</p>
              <p>বাংলাদেশ</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-5 text-center">
          <p className="text-xs text-gray-500 sm:text-sm">
            © 2026 Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;