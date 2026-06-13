import Image from "next/image";

const ReservationsPage = () => { 
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6"> 
            <h1 className="my-6 text-2xl">My reservations</h1>

            <div className="space-y-4">
                <div className="pt-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach-2.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Beach House"
                            />
                        </div>
                    </div>

                    <div className="col-span3 ">
                        <h2 className="mb-4 text-xl">Propery Name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 9/10/2025</p>
                        <p className="mb-2"><strong>Check out date</strong> 11/10/2025</p>

                        <p className="mb-2"><strong>Number of nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price:</strong> $200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to Property</div>
                    </div>
                </div>
                <div className="pt-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach-1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Beach House"
                            />
                        </div>
                    </div>

                    <div className="col-span3 ">
                        <h2 className="mb-4 text-xl">Propery Name</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 9/10/2025</p>
                        <p className="mb-2"><strong>Check out date</strong> 11/10/2025</p>

                        <p className="mb-2"><strong>Number of nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price:</strong> $200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to Property</div>
                    </div>
                </div>


            </div>
        </main>
    )
}

export default ReservationsPage;
