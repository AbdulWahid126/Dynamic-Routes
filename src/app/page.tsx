import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-black to-purple-500 text-black min-h-screen">
      <ul className="font-sans font-medium ">
        <li className="bg-gradient-to-r from-white to-green-500 mb-5 text-4xl py-8 px-60 rounded-xl ">
          <Link href="/pakistan">PAKISTAN</Link>
        </li>
        <li className="bg-gradient-to-t from-white to-red-600 mb-5 text-4xl py-8 px-56 rounded-xl">
          <Link href="/indonesia">INDONESIA</Link>
        </li>
        <li className="bg-gradient-to-t from-green-600 via-white to-orange-500 mb-5 text-4xl py-8 px-64 rounded-xl">
          <Link href="/india">INDIA</Link>
        </li>
        <li className="bg-gradient-to-r from-green-600 via-red-500 to-green-600 mb-5 text-4xl rounded-xl px-52 py-8">
          <Link href="/bangladesh">BANGLADESH</Link>
        </li>
        <li className="bg-gradient-to-r from-green-600 via-white to-green-600 mb-5 text-4xl px-60 rounded-xl py-8">
          <Link href="/nigeria">NIGERIA</Link>
        </li>
      </ul>
    </div>
  );
}
