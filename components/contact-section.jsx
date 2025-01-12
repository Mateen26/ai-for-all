import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import arrowRight from "@/public/images/arrow-right.svg"
import Image from "next/image"
export function ContactSection() {
  return (
    (<section className="container py-16">
      <Card className="bg-[#F6F6F6] w-[1200px] mx-auto">
        <CardContent className="p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h2 className="text-[50px] font-medium pt-[36px]">Want to learn more?</h2>
              <p className="text-[#303030] pt-[16px] pb-[50px] text-[25px] !font-[400]">Connect with us and let&apos;s talk</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#303030] text-[25px] !font-[400]">Enter your email</p>
              <div className="flex gap-2 flex-wrap">
                <Input type="email" placeholder="your@email.com" className="flex-1 !py-6 bg-white" />
                <Button className="bg-[#1FA84F] hover:bg-[#1FA84F]/90 py-6">
                  Connect <Image src={arrowRight} alt="Arrow Right" width={16} height={16} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>)
  );
}

