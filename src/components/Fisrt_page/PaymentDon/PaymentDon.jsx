import { Link } from "react-router-dom";

function PaymentDon({id}) {
  return (
    <main className="mt-10">
      <div className="h-[70vh] w-[55%] mx-auto bg-white rounded-lg flex flex-col items-center justify-center border border-gray-400">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
          Payment Done!
        </h3>
        <p>Thank you for completing your secure online payment.</p>
        <Link to={`/Facture/${id}`} target="_blank">
          You{"'"}r Facture
        </Link>
      </div>
    </main>
  );
}

export default PaymentDon;
