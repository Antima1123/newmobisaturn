import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"

type Props = {
    title: string
    url: string;
}

export const CategoryCard = ({title,url}: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex flex-col basis-1/3 items-center justify-center">
            <Card className="shadow-lg overflow-hidden">
                <CardContent className="p-0">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <Image
                            src={url}
                            alt={title}
                            height={500}
                            width={500}
                            className="object-contain max-w-[350px]"
                        />
                    </motion.div>
                </CardContent>
            </Card>
            <p className="mt-2">{title}</p>
        </motion.div>
    )
}