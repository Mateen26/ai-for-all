import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

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
              <p className="text-muted-foreground">Enter your email</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="your@email.com" className="flex-1" />
                <Button className="bg-[#26B573] hover:bg-[#26B573]/90">
                  Connect <span className="ml-1">→</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>)
  );
}

