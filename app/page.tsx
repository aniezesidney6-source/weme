import { Navbar } from "@/components/Navbar";
import { HeroCopy } from "@/components/HeroCopy";
import { CardFan } from "@/components/CardFan";
import { PartnerLogos } from "@/components/PartnerLogos";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-2 sm:p-[22px]">
      <section className="dot-grid relative overflow-hidden rounded-[14px]">
        <Navbar />

        {/* vertical rhythm: copy -> cards -> partners */}
        <div className="flex min-h-[100svh] flex-col justify-between pb-12 pt-[136px] sm:pt-[180px]">
          <HeroCopy />

          <div className="mt-10 px-4 sm:mt-4 sm:px-8">
            <CardFan />
          </div>

          <div className="mt-12 px-4 sm:mt-8">
            <PartnerLogos />
          </div>
        </div>
      </section>
    </main>
  );
}
