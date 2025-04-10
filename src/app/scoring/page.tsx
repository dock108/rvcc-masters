export default function Scoring() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#006747] mb-8">
          Live Scoring & Standings
        </h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-full max-w-[1400px]">
        <iframe 
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUIuveT5sNktZdBwjNlDsx76CdovDAN-2usBv5_HtrlG6Q09qaenW_a842i0fgwg/pubhtml?widget=true&amp;headers=false"
          width="100%"
          height="600"
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-[1400px] text-center border border-gray-100">
        <h2 className="text-2xl font-semibold text-[#006747] mb-4">
          Notes
        </h2>
        <p className="text-[#2d614d]">
          Scores are updated periodically. Official standings will be finalized after the tournament concludes.
        </p>
      </div>
    </div>
  );
} 