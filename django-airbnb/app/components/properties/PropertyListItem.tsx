import Image from "next/image";
import { PropertiesType } from "./PropertyList";

interface PropertiesProps {
    properties: PropertiesType
}

const PropertyListItem: React.FC<PropertyProps> = ({
    properties
}) => {
    return(
    <div className="cursor-pointer"> 
        <div className="flex relative overflow-hidden aspect-square rounded-xl">
            <Image
                fill
                src={properties.image_url}
                alt="Beach House"
                sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                className="hover:scale-110 object-cover transition h-full w-full"
            />
        </div>

        <div className="mt-2">
            <p className="text-lg font-bold">{properties.title}</p>
        </div>

        <div className="mt-2">
            <p className="text-sm text-gray-500"><strong>Ksh {properties.price_per_night}</strong> per night</p>
        </div>
    </div>
    )
}

export default PropertyListItem;
