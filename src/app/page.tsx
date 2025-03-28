import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-6">
          <Image
            src="/rvcc-logo.png"
            alt="Raritan Valley Country Club Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          RVCC Masters Pool
        </h1>
        <p className="text-xl text-green-700">
          Join us for the 2025 Masters Tournament Pool
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1400px]">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Pool Rules
          </h2>
          <div className="space-y-3 text-green-700">
            <p>• Select 7 golfers from the field</p>
            <p>• Need 5 golfers to make the cut</p>
            <p>• Your score will be the total of your top 5 players</p>
            <p className="font-semibold mt-4">Entry Deadline: Before opening tee shot on Thursday, April 10, 2025</p>
          </div>
        </div>

        <div className="bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Enter the Pool
          </h2>
          <p className="text-green-700 mb-4">
            Select your 7 golfers for the 2025 Masters Tournament
          </p>
          <p className="text-sm text-green-600 mb-6">
            Choose wisely - remember you need 5 to make the cut!
          </p>
          <a
            href="https://www.surveymonkey.com/r/YZB675F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg w-full md:w-auto"
          >
            <span className="mr-2">🏌️‍♂️</span>
            Submit Your Entry
            <span className="ml-2">🏌️‍♂️</span>
          </a>
        </div>
      </div>

      <div className="bg-white/90 p-6 rounded-lg shadow-lg w-full max-w-[1400px] text-center backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Tournament Details
        </h2>
        <div className="space-y-2 text-green-700">
          <p>Augusta National Golf Club</p>
          <p>April 10-13, 2025</p>
          <p className="font-semibold">Entry Deadline: Before First Tee Shot on Thursday</p>
        </div>
      </div>
    </div>
  );
}
