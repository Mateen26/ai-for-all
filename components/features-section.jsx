import { AudioWaveformIcon as WaveformIcon, ActivitySquare, UserRound } from 'lucide-react'
import MarketeqVoice from "@/public/images/marketeq-voice.svg"
import SolarUserSpeak from "@/public/images/solar-user-speak-linear.svg"
import SolarColourTuneing from "@/public/images/solar-colour-tuneing-linear.svg"
import Image from "next/image"

export function FeaturesSection() {
  return (
    (<section className="container py-6 px-4 md:px-6 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-[32px] font-medium">Correspond to Your Callers</h2>
        <p className="text-black w-full md:w-[450px] text-center mx-auto leading-[32px]">
          Agent4 lets you create custom voice experiences for callers to your business or mobile phone. Have an intelligent
          agent answer or place calls with your voice, your content and connected to your systems.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center pt-[110px]">
        <div className="space-y-4">
          <div className="mx-auto h-[80px] w-[80px]">
            <Image src={MarketeqVoice} alt="Marketeq Voice" width={80} height={80} />
          </div>
          <h3 className="text-[32px] font-medium w-[320px] mx-auto leading-[32px]">AI Voice Caller</h3>
        </div>
        <div className="space-y-4">
          <div className="mx-auto h-[80px] w-[80px]">
          <Image src={SolarColourTuneing} alt="Solar Colour Tuneing" width={124} height={124} />

          </div>
          <h3 className="text-[32px] font-medium w-[320px] mx-auto leading-[32px]">Behavioural Tuning</h3>
        </div>
        <div className="space-y-4">
          <div className="mx-auto h-[80px] w-[80px]">
          <Image src={SolarUserSpeak} alt="Solar User Speak" width={124} height={124} />

          </div>
          <h3 className="text-[32px] font-medium w-[320px] mx-auto leading-[32px]">Dynamic Call Flow</h3>
        </div>
      </div>
    </section>)
  );
}

