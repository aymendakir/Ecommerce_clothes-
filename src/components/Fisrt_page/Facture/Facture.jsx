import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import { usePDF } from "react-to-pdf";
import useAuthContext from "../../../Context/ApiContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function Facture() {
  const { GetFacture, OrderProduct } = useAuthContext([]);
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["facture"],
    queryFn: async () => {
      return GetFacture(id);
    },
  });
  const { data: productsData } = useQuery({
    queryKey: ["orderProducts", data?.order_id], // Assuming 'orderId' is a field in the facture data
    queryFn: async () => {
      return OrderProduct(data.order_id);
    },
    refetchOnMount: 3,
    retryOnMount: 3,
    enabled: !!data?.order_id, // Ensures the query runs only if 'orderId' is available
  });
  const { toPDF, targetRef } = usePDF({
    filename: `${data?.fullname}_${data?.id}.pdf`,
  });

  return (
    <>
      <div
        ref={targetRef}
        className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto w-full  "
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              className="h-8 w-8 mr-2"
              src="https://tailwindflex.com/public/images/logos/favicon-32x32.png"
              alt="Logo"
            />
            <div className="text-gray-700 font-semibold text-lg">Shoes</div>
          </div>
          <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">INVOICE</div>
            <div className="text-sm">Date: {data?.date?.slice(0, 10)}</div>
            <div className="text-sm">Invoice #: {data?.id}</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-8 mb-8 flex justify-between">
          <div>
            {" "}
            <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
            <div className="text-gray-700 mb-2 uppercase">{data?.fullname}</div>
            <div className="text-gray-700 mb-2">
              {data?.country} ,{data?.city}.
            </div>
            <div className="text-gray-700 mb-2">{data?.adresse}</div>
            <div className="text-gray-700">{data?.email}</div>
          </div>

          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "30%", width: "50%" }}
            value={window.location.href}
            viewBox={`0 0 256 256`}
          />
        </div>
        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">Name</th>
              <th className="text-gray-700 font-bold uppercase py-2">Color</th>
              <th className="text-gray-700 font-bold uppercase py-2">size</th>
              <th className="text-gray-700 font-bold uppercase py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {productsData?.map((product) => (
              <tr key={product.id}>
                <td className="py-4 text-gray-700">{product?.name}</td>
                <td className="py-4 text-gray-700">{product?.color}</td>
                <td className="py-4 text-gray-700">{product?.size}</td>
                <td className="py-4 text-gray-700">${product?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mb-8">
          <div className="text-gray-700 mr-2">Total:</div>
          <div className="text-gray-700 font-bold text-xl">
            $
            {productsData?.reduce(
              (total, product) => total + +product.price,
              0
            )}
          </div>
        </div>
        <div className="border-t-2 border-gray-300 pt-8 mb-8">
          <div className="text-gray-700 mb-2">
            Payment is due within 30 days. Late payments are subject to fees.
          </div>
        </div>
      </div>
      <button
        className="bg-gray-400 w-[120px] p-2 rounded-sm mx-auto flex justify-center my-10 "
        onClick={() => {
          toPDF();
        }}
      >
        {" "}
        Install Facture
      </button>
    </>
  );
}

export default Facture;
