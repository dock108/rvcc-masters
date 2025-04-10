import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="text-center">
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="relative w-24 h-24">
            <Image
              src="/rvcc-logo.png"
              alt="Raritan Valley Country Club Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <h1 className="text-6xl font-bold text-[#006747]">
            RVCC Masters Pool
          </h1>
        </div>
        <p className="text-2xl text-[#006747]">
          Join us for the 2025 Masters Tournament Pool
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1400px]">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-semibold text-[#006747] mb-6">
            Pool Rules
          </h2>
          <div className="space-y-4 text-[#2d614d] text-lg">
            <p className="flex items-center">
              <span className="mr-2">•</span>
              Select 7 golfers from the field
            </p>
            <p className="flex items-center">
              <span className="mr-2">•</span>
              Need 5 golfers to make the cut
            </p>
            <p className="flex items-center">
              <span className="mr-2">•</span>
              Your score will be the total of your top 5 players
            </p>
            <p className="font-semibold mt-6 text-[#006747] border-t border-gray-100 pt-6">
              Entry Deadline: Passed
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-[#006747] mb-6 text-center">
            View Live Standings
          </h2>
          <p className="text-[#2d614d] text-lg mb-8 text-center">
            The entry deadline has passed. Check the live scoring page for updates!
          </p>
          <Link 
            href="/scoring" 
            className="inline-flex flex-col items-center justify-center bg-[#006747] text-white px-10 py-4 rounded-lg hover:bg-[#008759] transition-colors shadow-md hover:shadow-lg w-full md:w-auto text-lg font-medium"
          >
            <span className="font-medium">Go to Live Scoring</span>
            <span className="text-xs mt-1">(Available 2 PM EST 4/10)</span>
          </Link>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-[1400px] text-center border border-gray-100">
        <h2 className="text-3xl font-semibold text-[#006747] mb-6">
          Tournament Details
        </h2>
        <div className="space-y-3 text-[#2d614d] text-lg">
          <p>Augusta National Golf Club</p>
          <p>April 10-13, 2025</p>
          <p className="font-semibold text-[#006747]">Entry Deadline: Passed</p>
        </div>
      </div>
    </div>
  );
}
