import Image from "next/image";

interface DentistInfoProps {
    dentistName: string;
    dentistImageSrc: string;
    dentistBio: string;
    dentistCrf: string;
}

export default function DentistInfo({ dentistName, dentistImageSrc, dentistBio, dentistCrf }: DentistInfoProps) {
    return (
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="relative border-2 border-[#c9a961] w-50 h-72 sm:w-50 sm:h-50 rounded-3xl flex-shrink-0 mx-auto sm:mx-0 overflow-hidden">
                <Image
                    className="object-cover object-top"
                    src={dentistImageSrc}
                    fill
                    alt={dentistName}
                    title={dentistName}
                />
            </div>
            <div className="flex-1">
                <h3 className="text-lg text-[#2a2a2a] md:text-xl lg:text-2xl font-semibold mb-2 text-center sm:text-left">
                    {dentistName}
                </h3>
                <div className="flex justify-center sm:justify-start mb-1">
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
                        {dentistCrf}
                    </p>
                </div>
                <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed text-justify">
                    {dentistBio}
                </p>
            </div>
        </div>
    );
};