import { FEATURES } from "@/constants";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="flex-col felxCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <section className="max-container padding-container relative w-full flex justify-end">
        <section className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </section>
        <section className="z-20 flex w-full flex-col lg:w-[60%]">
          <section className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </section>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mb-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <section className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} alt="map" width={28} height={28} />
      </section>
      <h3 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h3>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Feature;
