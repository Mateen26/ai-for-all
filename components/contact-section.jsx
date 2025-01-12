import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import arrowRight from "@/public/images/arrow-right.svg"
import Image from "next/image"
export function ContactSection() {
  return (
    <section className="container py-6 px-4 md:px-6">
      <Card className="bg-[#F6F6F6] w-full max-w-[1150px] mx-auto rounded-[10px]">
        <CardContent className="p-4 md:p-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-[38px] font-medium pt-4 md:pt-[30px]">Want to learn more?</h2>
              <p className="text-[#303030] text-lg md:text-[22px] pt-2 md:pt-[16px] pb-4 md:pb-[40px] !font-[400]">
                Connect with us and let&apos;s talk
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#303030] text-xl md:text-[25px] !font-[400]">Enter your email</p>
              <div className="flex flex-col md:flex-row gap-2">
                <Input type="email" placeholder="your@email.com" className="flex-1 !py-4 md:!py-6 bg-white" />
                <Button className="bg-[#1FA84F] hover:bg-[#1FA84F]/90 py-4 md:py-6">
                  Connect <Image src={arrowRight} alt="Arrow Right" width={16} height={16} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

