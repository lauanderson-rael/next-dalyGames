import Link from "next/link"
import Image from "next/image"
import { BiRightArrowCircle } from "react-icons/bi"
import { GameProps } from "@/utils/types/game"

interface GameCardProps {
    data: GameProps
}

export default function GameCard({ data }: GameCardProps) {
    return (
        <Link href={`/game/${data.id}`}>
            <section className="w-full bg-slate-200 ronded-lg p-4 mb-5">
                <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
                    <Image
                        className="rounded-lg object-cover"
                        src={data.image_url}
                        alt={data.title}
                        fill={true}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                    />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-sm px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden">
                        {data.title}
                    </p>
                    <BiRightArrowCircle size={24} color="#000" />
                </div>
            </section>
        </Link>
    )
}
