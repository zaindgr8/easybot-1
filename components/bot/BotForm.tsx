import React from "react";

const Form = ({ data }: any) => {
  const {
    title,
    exchange,
    quoteCurrency,
    baseCurrency,
    botOption,
    status,
    usdtAssigned,
    assignedBalance,
    autoCompounding,
    initialOrder,
    priceAfterXPercent,
    pullback,
    takeProfitAverage,
    takeProfitIndependent,
    covers,
  } = data.form;

  return (
    <>
      <div className="mt-10 mb-10">
        <div className="flex gap-10">
          {/* Left Column */}
          <div className="w-1/2 p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                readOnly
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700">
                Use The EazyBot Strategy?
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Exchange
              </label>
              <input
                type="text"
                value={exchange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                readOnly
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quote Currency
                </label>
                <input
                  type="text"
                  value={quoteCurrency}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Base Currency
                </label>
                <input
                  type="text"
                  value={baseCurrency}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bot Option
                </label>
                <input
                  type="text"
                  value={botOption}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <input
                  type="text"
                  value={status}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700">Sell Only</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700">
                Enable Market Crash Recovery
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
            <div className="text-sm font-medium text-gray-700">
              USDT Assigned
            </div>
            <div className="flex items-center gap-3 justify-between">
              <input
                type="number"
                value={usdtAssigned}
                className="mt-1 block w-2/3 rounded-md border border-gray-300 shadow-sm hover:border-black"
                readOnly
              />
              <input
                type="number"
                value={usdtAssigned}
                className="mt-1 block w-2/3 rounded-md border border-gray-300 shadow-sm hover:border-black"
                readOnly
              />
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <div className="text-sm font-medium text-gray-700">
                Assigned Balance (Total 5 BOT): {assignedBalance.total}
              </div>
              <div>Available USDT: {assignedBalance.availableUSDT}</div>
              <div>Available SOL: {assignedBalance.availableSOL}</div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700">
                Auto Compounding
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Initial Order
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={initialOrder.amount}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
                <input
                  type="number"
                  value={initialOrder.percentage}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price After X %
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={priceAfterXPercent.percentage}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                    placeholder="Enter percentage"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pullback
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={pullback.value}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                    placeholder="Enter pullback value"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Take Profit Sections */}
        <div className="flex mt-10 gap-[120px]">
          <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Take Profit (Average)
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Take Profit
                </label>
                <input
                  type="number"
                  value={takeProfitAverage.takeProfit}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Profit Re-tracement
                </label>
                <input
                  type="number"
                  value={takeProfitAverage.profitRetracement}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Expected Exchange Fee: {takeProfitAverage.exchangeFee} | Expected
              SSF Fee: {takeProfitAverage.ssfFee}
            </p>
            <p className="text-xs text-gray-400">
              Actual Take Profit: {takeProfitAverage.actualTakeProfit}%
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Take Profit (Independent)
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Take Profit
                </label>
                <input
                  type="number"
                  value={takeProfitIndependent.takeProfit}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Profit Re-tracement
                </label>
                <input
                  type="number"
                  value={takeProfitIndependent.profitRetracement}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                  readOnly
                />
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Expected Exchange Fee: {takeProfitIndependent.exchangeFee} |
              Expected SSF Fee: {takeProfitIndependent.ssfFee}
            </p>
            <p className="text-xs text-gray-400">
              Actual Take Profit: {takeProfitIndependent.actualTakeProfit}%
            </p>
          </div>
        </div>
        <div className="mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Covers</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="text-left p-2 text-sm font-medium text-gray-700">
                    Index
                  </th>
                  <th className="text-left p-2 text-sm font-medium text-gray-700">
                    Cover %
                  </th>
                  <th className="text-left p-2 text-sm font-medium text-gray-700">
                    Buy X time
                  </th>
                  <th className="text-left p-2 text-sm font-medium text-gray-700">
                    Pullback
                  </th>
                  <th className="text-left p-2 text-sm font-medium text-gray-700">
                    Type
                  </th>
                  <th className="text-left p-2 text-sm font-medium text-gray-700">
                    Keep Profit (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {covers.map((cover: any, index: any) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 text-sm text-gray-700">{index + 1}</td>
                    <td className="p-2 text-sm text-gray-700">
                      <input
                        type="number"
                        value={cover.coverPercentage}
                        className="w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                        readOnly
                      />
                    </td>
                    <td className="p-2 text-sm text-gray-700">
                      <input
                        type="number"
                        value={cover.buyXTime}
                        className="w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                        readOnly
                      />
                    </td>
                    <td className="p-2 text-sm text-gray-700">
                      <input
                        type="number"
                        value={cover.pullback}
                        className="w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                        readOnly
                      />
                    </td>
                    <td className="p-2 text-sm text-gray-700">
                      <input
                        type="text"
                        value={cover.type}
                        className="w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                        readOnly
                      />
                    </td>
                    <td className="p-2 text-sm text-gray-700">
                      <input
                        type="number"
                        value={cover.keepProfitPercentage}
                        className="w-full rounded-md border border-gray-300 shadow-sm hover:border-black"
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
