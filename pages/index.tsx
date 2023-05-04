import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen w-screen bg-bg-primary flex justify-between">
        <div className="w-7/12 flex flex-row items-center px-[90px]">
          <div>
            <div>
              <p className="flex items-center text-primary font-medium text-lg">
                <span className="w-5 h-0.5 bg-primary block mr-[10px]" />
                Future Investment
              </p>
              <h3 className="mt-3 font-montserrat font-extrabold text-[60px] leading-[70px]">
                Manage Your Finances Every Day{" "}
                <span className="text-text-hijau">Very Easily</span>
              </h3>
              <p className="mt-[20px] text-lg text-text-tertiary">
                Manage & develop your finances well for the future to come.
                Download now on your smartphone
              </p>
              <ul className="mt-[60px] flex space-x-[30px]">
                <li>
                  <Link href='/'><img src="/images/appstore.svg"/></Link>
                </li>
                <li>
                  <Link href='/'><img src="/images/playstore.svg"/></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-5/12 bg-bg-secondary rounded-l-[50px]">Kanan</div>
      </main>
    </>
  );
}
