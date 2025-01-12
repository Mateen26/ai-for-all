import { AudioWaveformIcon as WaveformIcon, ActivitySquare, UserRound } from 'lucide-react'
import MarketeqVoice from "@/public/images/marketeq-voice.svg"
import SolarUserSpeak from "@/public/images/solar-user-speak-linear.svg"
import SolarColourTuneing from "@/public/images/solar-colour-tuneing-linear.svg"
import Image from "next/image"

export function FeaturesSection() {
  return (
    (<section className="container py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Correspond to Your Callers</h2>
        <p className="text-muted-foreground w-[450px] text-center mx-auto">
          Agent4 lets you create custom voice experiences for callers to your business or mobile phone. Have an intelligent
          agent answer or place calls with your voice, your content and connected to your systems.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center pt-[110px]">
        <div className="space-y-4">
          <div className="mx-auto h-[64px] w-[64px]">
            <Image src={MarketeqVoice} alt="Marketeq Voice" width={64} height={64} />
          </div>
          <h3 className="text-[50px] font-medium w-[320px] mx-auto leading-[60px]">AI Voice Caller</h3>
        </div>
        <div className="space-y-4">
          <div className="mx-auto h-[64px] w-[64px]">
          <Image src={SolarColourTuneing} alt="Solar Colour Tuneing" width={64} height={64} />

          </div>
          <h3 className="text-[50px] font-medium w-[320px] mx-auto leading-[60px]">Behavioural Tuning</h3>
        </div>
        <div className="space-y-4">
          <div className="mx-auto h-16 w-16">
          <Image src={SolarUserSpeak} alt="Solar User Speak" width={64} height={64} />

          </div>
          <h3 className="text-[50px] font-medium w-[320px] mx-auto leading-[60px]">Dynamic Call Flow</h3>
        </div>
      </div>
    </section>)
  );
}

