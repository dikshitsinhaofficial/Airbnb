import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="pb-6 max-w-[1500px] mx-auto px-6">
            <div className="mt4 w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach-2.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-4 block text-lg text-gray-600">
                        4 guest - 2 beadrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile.png"
                            width={50}
                            height={50}
                            className="rounded-full w-[50px] h-[50px] object-cover"
                            alt="Profile Picture"
                        />

                        <p><strong>Loren</strong> is your host</p>
                     </div>                        
    
                     <hr />
    
                     <p className="mt-6 text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     </p>
                </div>

                <ReservationSidebar/>

            </div>
        </main>
    )
}

export default PropertyDetailPage;
