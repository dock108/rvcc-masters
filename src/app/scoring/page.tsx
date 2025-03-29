export default function Scoring() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Live Scoring
        </h1>
        <p className="text-xl text-green-700 mb-2">
          Coming Soon
        </p>
        <p className="text-lg text-green-600">
          Live scoring will be available starting at 2:00 PM EST on Thursday, April 10, 2025
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Tournament Updates
        </h2>
        <p className="text-green-700">
          Check back here during the Masters Tournament for live scoring updates and standings.
        </p>
        <p className="text-green-600 mt-4 text-sm">
          Scores will be updated regularly throughout the tournament.
        </p>
      </div>
    </div>
  );
} 