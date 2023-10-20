import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="fexCenter w-full flex-col pb-[100px]">
      <section className="get-app">
        <section className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg: bold-64 xl:max-w-[320px]">
            Get fot free now!
          </h2>
          <p className="regular-16 text-gray-10">Available on iOS an Android</p>
          <section className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </section>
        </section>
        <section className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </section>
      </section>
    </section>
  );
};

export default GetApp;
