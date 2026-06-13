interface CustomButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick,
    className
}) => {
    return(
        <div
        
            onClick={onClick} 
            className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark transition text-white text-center cursor-pointer rounded-xl ${className}`}
        >

            {label}
        </div>
    )
}

export default CustomButton;
