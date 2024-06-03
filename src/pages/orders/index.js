import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://iai-order-be.vercel.app/api/orders/IAI12"
        );
        const ordersData = response.data.map((order, index) => ({
          ...order,
          orderId: `2024${new Date(order.date)
            .toISOString()
            .slice(5, 7)}${new Date(order.date).toISOString().slice(8, 10)}${(
            index + 1
          )
            .toString()
            .padStart(4, "0")}`,
          date: new Date(order.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Order History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-8 h-[1200px]">
        <h1 className="text-3xl font-bold mb-6">Orders History</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  QTY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Order Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <React.Fragment key={order._id}>
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          rowSpan={order.items.length}
                        >
                          {order.orderId}
                        </td>
                      )}
                      {index === 0 && (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          rowSpan={order.items.length}
                        >
                          {order.date}
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-sarala">{item.name} </span>
                        <br />
                        <span className="font-sarala font-bold">
                          Size: {item.size}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.quantity}
                      </td>
                      {index === 0 && (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          rowSpan={order.items.length}
                        >
                          {order.total}
                        </td>
                      )}
                      {index === 0 && (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          rowSpan={order.items.length}
                        >
                          <button className="px-4 py-2 text-sm font-medium text-black border border-black bg-white-500">
                            {order.status}
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
