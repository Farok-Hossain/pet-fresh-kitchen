// import CommonPagination from "@/components/common/CommonPagination";

const OrderHistory = () => {
  const data = [
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 2,
      price: 100.0,
      status: "Processing",
    },
    {
      id: "#3953",
      date: "21 January, 2025",
      product: 4,
      price: 150.5,
      status: "On the way",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 2,
      price: 200.75,
      status: "Cancelled",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 5,
      price: 450.0,
      status: "Pending",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 6,
      price: 300.0,
      status: "Completed",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 2,
      price: 120.25,
      status: "Failed",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 3,
      price: 80.0,
      status: "Pending",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 2,
      price: 220.0,
      status: "Completed",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 2,
      price: 175.5,
      status: "Failed",
    },
    {
      id: "#3933",
      date: "21 January, 2025",
      product: 4,
      price: 90.0,
      status: "Completed",
    },
    
  ];
  return (
    <div className="border-[1px] mx-10 w-full rounded-lg mt-12 mb-[200px] overflow-hidden">
  <h3 className="text-textGray text-xl font-medium leading-[30px] pl-6 py-4">
    Order History
  </h3>
  <div className=" overflow-x-auto">
    <table className="w-full text-left">
      <thead className="sticky">
        <tr className="bg-[#F2F2F2]">
          <th className="px-4 py-3 uppercase text-[#4D4D4D] text-xs font-medium leading-3">
            Order ID
          </th>
          <th className="px-4 py-3 uppercase text-[#4D4D4D] text-xs font-medium leading-3">
            Date
          </th>
          <th className="px-4 py-3 uppercase text-[#4D4D4D] text-xs font-medium leading-3">
            Total
          </th>
          <th className="px-4 py-3 uppercase text-[#4D4D4D] text-xs font-medium leading-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="py-2 px-4 lg:px-6 lg:py-3">{item.id}</td>
            <td className="py-2 px-4 lg:px-6 lg:py-3">{item.date}</td>
            <td className="py-2 px-4 lg:px-6 lg:py-3">
              ${item.price.toFixed(2)}{" "}
              {item.product ? `(${item.product} products)` : ""}
            </td>
            <td className="px-6 py-3">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default OrderHistory;
