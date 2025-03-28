import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Welcome to the RVCC Masters Pool
        </h1>
        <p className="text-xl text-green-700">
          Join us for the 2025 Masters Tournament Pool
        </p>
      </div>

      <div className="relative w-64 h-64">
        <Image
          src="/rvcc-logo.png"
          alt="Raritan Valley Country Club Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Enter the Pool
        </h2>
        <p className="text-green-700 mb-4">
          Select your 7 golfers for the 2025 Masters Tournament
        </p>
        <p className="text-sm text-green-600 mb-6">
          Choose wisely - your picks will determine your standing in the pool!
        </p>
        <a
          href="https://www.surveymonkey.com/r/YZB675F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
        >
          <span className="mr-2">🏌️‍♂️</span>
          Submit Your Entry
          <span className="ml-2">🏌️‍♂️</span>
        </a>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Tournament Details
        </h2>
        <div className="space-y-2 text-green-700">
          <p>Augusta National Golf Club</p>
          <p>April 10-13, 2025</p>
          <p>Entry Deadline: TBD</p>
        </div>
      </div>
    </div>
  );
}
