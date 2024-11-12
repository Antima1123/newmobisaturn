import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface MarketingCardProps {
  title: string
  points: Array<{
    icon: string
    text: string
  }>
  buttonText: string
  imageUrl: string
  imageOnRight: boolean
}

export default function Cardunique({
    title,
    points,
    buttonText,
    imageUrl,
    imageOnRight
} : MarketingCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg max-w-4xl py-6 px-8">
      <div className={`flex flex-col gap-6 ${imageOnRight ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="flex-1  items-center justify-center">
          <h2 className="mb-4 text-xl font-bold tracking-tight">{title}</h2>
          <ul className="mb-6 space-y-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-lg">{point.icon}</span>
                <span className="text-muted-foreground">{point.text}</span>
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-full md:w-auto bg-gradient-to-br from-emerald-600 to-purple-600 p-6">
            {buttonText}
          </Button>
        </div>
        <div className=" justify-center items-center flex">
          <Image src={imageUrl} width={500} height={500} alt="" className=" w-[350px]"/>
        </div>
      </div>
    </Card>
  )
}