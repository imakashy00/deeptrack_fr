import Navbar from "@/components/Navbar";
import Image from "next/image";
import study from "@/components/assets/study.png";
import { Button } from "@/components/ui/button";
import Services from "@/components/Services";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:px-60 px-6 w-full">
      <Navbar />
      <div className="w-full grid sm:grid-cols-5 sm:mt-20 mt-5 ">
        {/* Image for small device*/}
        <div className=" sm:hidden my-10 ">
          <Image src={study} alt="study" />
        </div>
        {/* Hero */}
        <div className="sm:col-span-3 sm:grid-cols-2 sm:space-y-10 space-y-5 my-auto sm:py-28">
          <div>
            <h1 className="sm:text-6xl text-4xl bg-gradient-to-br from-green-500  to-blue-500 bg-clip-text text-transparent">
              Seeing is not always believing. Verify with DeepTrack
            </h1>
          </div>
          <div className="sm:text-xl text-sm text-gray-600 sm:block hidden">
            Our advanced AI detection tool helps you verify the authenticity{" "}
            <br />
            of images with just a single upload. Don&rsquo;t let AI fool you{" "}
            <br /> —stay informed, stay protected.
          </div>
          <div className=" text-sm text-gray-600 block sm:hidden">
            Our advanced AI detection tool helps you verify the authenticity of
            images with just a single upload. <br />
            Don&rsquo;t let AI fool you. <br /> —stay informed, stay protected.
          </div>
          <div className="sm:block flex justify-center sm:py-auto py-5">
            <Link href="/verify">
              <Button className="bg-blue-500 text-lg hover:bg-blue-400">
                Upload Images
              </Button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className=" sm:col-span-2 sm:block hidden">
          <Image src={study} alt="study" />
        </div>
      </div>

      <div className="w-full ">
        <Services />
      </div>
    </div>
  );
}
