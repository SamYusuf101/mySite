import Link from "next/link";

<div className="space-x-4 space-y-4 pt-80  mt-60 md:pt-80 md:mt-10 lg:pt-60  ">
  
  <Link href="/Skills">
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
         hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Button
    </button>
  </Link>
  <Link href="/Contact">
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
         hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Button
    </button>
  </Link>
</div>;
