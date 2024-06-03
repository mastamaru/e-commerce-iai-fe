import Head from "next/head";
import Image from "next/image";
import Input from "@/components/InputText";
import Navbar from "@/components/Navbar";

export default function Orders() {
  const orders = [
    {
      orderId: "20240521XXXX",
      date: "21 May 2024",
      items: [
        { name: "WGAMING Impossible Black Tee", size: "L", qty: 2 },
        { name: "PRX Dino Tracksuit Pants", size: "M", qty: 1 },
      ],
      orderTotal: "Rp 2.279.000",
      status: "Waiting Payment",
    },
    {
      orderId: "20240521XXXX",
      date: "21 May 2024",
      items: [
        { name: "WGAMING Impossible Black Tee", size: "L", qty: 2 },
        { name: "PRX Dino Tracksuit Pants", size: "M", qty: 1 },
      ],
      orderTotal: "Rp 2.279.000",
      status: "Waiting Payment",
    },
    {
      orderId: "20240521XXXX",
      date: "21 May 2024",
      items: [
        { name: "WGAMING Impossible Black Tee", size: "L", qty: 2 },
        { name: "PRX Dino Tracksuit Pants", size: "M", qty: 1 },
      ],
      orderTotal: "Rp 2.279.000",
      status: "Waiting Payment",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Order History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        {/* <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/pererek.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "44px", height: "auto" }}
            alt="hero"
          />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  My cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 underline"
                >
                  Orders
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Hi, Hiera</span>
            <img
              src="/hero.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div> */}
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-8">
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
                <tr key={order.orderId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item.name} Size: {item.size} ({item.qty})
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.items.reduce((acc, item) => acc + item.qty, 0)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.orderTotal}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-4 py-2 text-sm font-medium text-black border border-black bg-white-500">
                      {order.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <Image
            src="/pererek-shop.png"
            width={209}
            height={60}
            alt="shop logo"
            className="absolute left-0 bottom-[3%]"
          />
        </div>
      </footer>
    </div>
  );
}
