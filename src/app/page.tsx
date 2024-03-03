import Image from "next/image";
import Wrapper from "../../components/wrapper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function Home() {
  return (
    <>
      <div>

        <div className=" absolute w-56 h-56 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className=" absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl bottom-[40%] left-[40%]"></div>

        <Wrapper>
          <h1 className="text-black text-7xl font-semibold mt-36"><span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">{"Ready to build"}</span>{" a website"} <br />{"that works for you?"}</h1>
          <p className="mt-10">Get started today and unlock the potential of your online presence.</p>

          <Popover>
            <PopoverTrigger className="w-fit mt-10">
              <div className="w-fit flex justify-start">
                <div className="px-8 py-4 w-fit shadow-lg text-emerald-600 hover:bg-emerald-400 hover:text-white">Contact</div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="absolute -left-16 w-56 rounded-none">
              <div className="flex flex-col space-y-3 text-sm">
                <a href="" className="underline-offset-4 hover:underline hover:text-emerald-500">Whatsapp</a>
                <a href="" className="underline-offset-4 hover:underline hover:text-blue-500">Send us a mail</a>
                <a href="" className="underline-offset-4 hover:underline hover:text-gray-500">Find us on X</a>
              </div>
            </PopoverContent>
          </Popover>


        </Wrapper>
      </div>
    </>
  );
}
