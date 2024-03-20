import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";



const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          className="object-cover w-full h-full"
          alt="beach house"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 Guests - 2-bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="host image"
            />
            <p>
              <strong>John doe</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eos
            quae nemo doloribus deserunt. Quis excepturi numquam quisquam,
            asperiores unde commodi maiores enim dolorum assumenda suscipit,
            reiciendis mollitia, veniam ipsa.
          </p>
        </div>
      <ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
