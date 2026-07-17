import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = {
  title: "Careers | Nolkha & Co",
  description: "Join Nolkha & Co. We are looking for ambitious CAs, article assistants, and financial analysts in Thane.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 md:pt-48 md:pb-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-32">
          <div className="w-full lg:w-1/2 lg:sticky lg:top-40">
            <Eyebrow align="left">Talent Acquisition</Eyebrow>
            <h1 className="mb-8 text-5xl md:text-7xl leading-[1.05]">Build your leverage.</h1>
            <p className="text-xl text-muted leading-relaxed max-w-md">
              We do not hire clock-punchers. We look for rigorous, pragmatic financial minds who want direct exposure to complex corporate structuring and high-stakes audits.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 group">
              <div className="bg-surface rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 transition-colors duration-500 group-hover:bg-primary/5">
                <Briefcase className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-3xl mb-2">Senior Tax Consultant</h3>
                <p className="text-muted text-lg mb-8">4+ years experience in direct tax and corporate restructuring. Must be capable of managing client relationships independently.</p>
                <Button variant="outline" asChild>
                  <Link href="mailto:careers@nolkhaca.com?subject=Senior Tax Consultant Application">Apply Now</Link>
                </Button>
              </div>
            </div>

            <div className="p-2 bg-black/5 rounded-[2.5rem] ring-1 ring-black/5 group">
              <div className="bg-surface rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-10 transition-colors duration-500 group-hover:bg-primary/5">
                <GraduationCap className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-3xl mb-2">Articled Assistants</h3>
                <p className="text-muted text-lg mb-8">IPCC cleared (both groups preferred). You will not be pushing paper; expect immediate exposure to core statutory audits and filings.</p>
                <Button variant="outline" asChild>
                  <Link href="mailto:careers@nolkhaca.com?subject=Articled Assistant Application">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-24 text-center">
          <h2 className="mb-6">Don't see a fit?</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
            We are always interested in speaking with exceptional talent. Send your resume and a brief note on how you can add structural value to our operations.
          </p>
          <Button size="lg" variant="accent" withTrailingIcon asChild>
            <Link href="mailto:careers@nolkhaca.com">Email Your Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
