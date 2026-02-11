import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Layers, Shield, Sparkles } from "lucide-react";
import { schools } from "@/data/schools";

export default function Home() {
  // Get first 4 schools for the featured section
  const featuredSchools = schools.slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <div id="features" className="relative">
        {/* Features Row */}
        <div className="px-8 py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[17px] font-semibold mb-2">Central Repository</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">The largest archive of Maldivian school identities, consolidated into one platform.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[17px] font-semibold mb-2">Vector Format</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">Access high-quality SVG files for every listed school, perfect for any scale of print or digital.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[17px] font-semibold mb-2">Verified Accuracy</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">Each asset is meticulously reviewed for accuracy against official school documentation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Schools Section */}
        <div className="pt-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div className="max-w-xl">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand mb-6 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Assets
                </h2>
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                  Preserving education through design.
                </h3>
                <p className="text-lg text-slate-500 font-medium">
                  Quick access to some of the most requested school identities in our repository.
                </p>
              </div>
              <Link href="/schools" className="flex items-center gap-2 text-brand font-semibold hover:gap-4 transition-all pb-2 border-b-2 border-brand/10 hover:border-brand">
                View Full Directory
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredSchools.map((school) => (
                <Link key={school.id} href={`/school/${school.id}`} className="group">
                  <div className="aspect-square bg-slate-50 border border-slate-100 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-slate-200/50">
                    <div className="relative w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                      <Image
                        src={school.logo}
                        alt={school.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-6 px-1 text-center">
                    <h4 className="text-[17px] font-semibold text-slate-900 group-hover:text-brand transition-colors">
                      {school.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <BentoGrid />

        {/* CTA Section */}
        <div className="px-8 py-32">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-200/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full" />
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 relative z-10">
              Missing a logo?
            </h2>
            <p className="text-lg md:text-xl font-medium opacity-60 mb-12 max-w-xl mx-auto relative z-10">
              Help us complete the archive by requesting a school identity or contributing a high-quality vector you might have.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link href="/request" className="bg-brand text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-brand-hover transition-all flex items-center gap-3">
                Submit Request
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all">
                About the Archive
              </Link>
            </div>
          </div>
        </div>

        <footer className="px-8 py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight uppercase mb-2">MV <span className="text-brand">ASSETS</span></h2>
              <p className="text-sm text-slate-400 font-medium">© 2026 Male', Maldives. Built for the community.</p>
            </div>
            <div className="flex gap-12 text-[12px] font-semibold uppercase tracking-widest text-slate-400">
              <Link href="/schools" className="hover:text-brand transition-colors">Schools</Link>
              <Link href="/about" className="hover:text-brand transition-colors">About</Link>
              <Link href="/request" className="hover:text-brand transition-colors">Request</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
