import { Card } from "@/components/ui/card"
import { FileText, Download, Network, UserPlus, ShoppingCart, Plane, Smartphone, Heart, Coins } from "lucide-react"

export default function CampaignGoals() {
  return (
    <div className="w-full py-12 md:py-24 max-w-screen-2xl mx-auto">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Campaign Goals</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
            Enhance your mobile app&apos;s user acquisition, retention, and brand performance using predictive algorithms and
            machine learning techniques.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 h-full">
        <div className="mx-auto grid w-full gap-2 h-full">
          <Card className="relative overflow-hidden h-[12rem] bg-[#1A0A0F] p-6 items-center justify-center flex">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <FileText className="h-6 w-6 text-[#D9083C]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">CPR</h3>
                <p className="text-gray-300">Cost Per Result</p>
              </div>
            </div>
          </Card>
          <Card className="relative overflow-hidden bg-[#1A0A0F] p-6 h-[12rem] items-center justify-center flex">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <Download className="h-6 w-6 text-[#D9083C]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">CPI</h3>
                <p className="text-gray-300">Cost per Install</p>
              </div>
            </div>
          </Card>
        </div>
        <Card className="relative overflow-hidden bg-[#1A0A0F] p-6 items-center justify-center flex">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white">
                <Network className="h-6 w-6 text-[#D9083C]" />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">CPA</h3>
                  <p className="text-gray-300">Cost per Action (Multiple Goals)</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5 text-white" />
                    <span className="text-sm text-gray-300">Create Profile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-white" />
                    <span className="text-sm text-gray-300">Purchase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-white" />
                    <span className="text-sm text-gray-300">Book</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-white" />
                    <span className="text-sm text-gray-300">In App Purchase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-white" />
                    <span className="text-sm text-gray-300">Subscribe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-white" />
                    <span className="text-sm text-gray-300">Deposit</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}