import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 justify-between cursor-pointer px-6 flex items-center space-x-12 overflow-x-auto max-w-[1500px] mx-auto px-6"> 
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/category-beach.png"
                    alt="Categoty - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100"> 
                 <Image     
                    src="/category-beach.png"
                    alt="Categoty - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Cabins</span> 
             </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100"> 
                 <Image     
                    src="/category-beach.png"
                    alt="Categoty - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Hotels</span> 
            </div>                                                                 



            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100"> 
                 <Image     
                    src="/category-beach.png"
                    alt="Categoty - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Vilas</span> 
            </div>                                                                 


            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100"> 
                 <Image     
                    src="/category-beach.png"
                    alt="Categoty - Beach"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Camping</span> 
            </div>                                                                 

                                                                 



        </div>
    )
}

export default Categories;
