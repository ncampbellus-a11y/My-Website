import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Services() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full flex flex-col">
      {/* PAGE HEADER */}
      <section className="bg-[#1a2b45] text-white pt-24 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="text-[#7eb3e8] font-bold text-sm tracking-wider uppercase mb-4">
              What We Build
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl mb-6">
              AI Solutions Designed Around Your Business
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#a0aec0] text-xl leading-relaxed">
              Three core AI systems — each one purpose-built to eliminate the bottlenecks that cost you time, leads, and profit.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #2563a8, #b8872a)" }} />
      </section>

      {/* SERVICE 1: AI Lead Response System */}
      <section id="lead" className="bg-white py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="md:w-1/2 flex flex-col items-start">
              <motion.div variants={fadeUp} className="bg-blue-50 text-[#2563a8] font-semibold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-blue-100">
                Core Service
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45] mb-6">
                AI Lead Response System
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
                The moment a lead comes in, your AI is already responding — via SMS, email, or chat — qualifying them, answering questions, and moving them toward a booked appointment. No delays. No dropped leads. No human required.
              </motion.p>
              <motion.ul variants={fadeUp} className="flex flex-col gap-4 mb-10 w-full">
                {[
                  "Instant multi-channel response via SMS, email, and chat",
                  "Smart qualifying questions tailored to your business",
                  "Automated appointment scheduling with calendar sync",
                  "Follow-up sequences that continue until conversion or opt-out",
                  "Full lead activity and performance reporting dashboard",
                  "CRM integration with GoHighLevel, HubSpot, Salesforce, and more"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-[#2563a8] mt-1 shrink-0" size={20} />
                    <span className="text-[#1e2d3d]">{feature}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link href="/pricing" className="bg-[#1a2b45] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a2b45]/90 transition-colors inline-block">
                  View Pricing
                </Link>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <motion.div variants={fadeUp} className="bg-[#1a2b45] rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563a8] rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
                <h3 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4">Impact at a Glance</h3>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold text-[#7eb3e8] w-24">340%</div>
                    <div className="text-[#a0aec0] text-sm">Faster average lead response vs. industry benchmark</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold text-[#7eb3e8] w-24">85%</div>
                    <div className="text-[#a0aec0] text-sm">Contact rate achieved within 30 days for clients</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold text-[#7eb3e8] w-24">2.4x</div>
                    <div className="text-[#a0aec0] text-sm">More booked appointments per month on average</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold text-[#7eb3e8] w-24">24/7</div>
                    <div className="text-[#a0aec0] text-sm">Always-on — no weekends, no holidays, no breaks</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE 2: AI Receptionist (Reversed Layout) */}
      <section id="receptionist" className="bg-[#f2f3f5] py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col-reverse md:flex-row items-center gap-16"
          >
            <div className="md:w-1/2 w-full">
              <motion.div variants={fadeUp} className="bg-[#1a2b45] rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden h-full">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b8872a] rounded-full blur-3xl opacity-20 -ml-20 -mb-20 pointer-events-none"></div>
                <h3 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4">Why It Matters</h3>
                <div className="flex flex-col gap-10 mt-12">
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-5xl font-bold text-[#b8872a] mb-2">1 in 4</div>
                    <div className="text-[#a0aec0]">Calls go unanswered at the average business</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-5xl font-bold text-[#b8872a] mb-2">0</div>
                    <div className="text-[#a0aec0]">Missed calls once the AI Receptionist is live</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-5xl font-bold text-[#b8872a] mb-2">2 hrs</div>
                    <div className="text-[#a0aec0]">Average daily staff time reclaimed per client</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 flex flex-col items-start">
              <motion.div variants={fadeUp} className="bg-amber-50 text-[#b8872a] font-semibold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-amber-100">
                AI Add-On
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45] mb-6">
                AI Receptionist
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
                A voice AI that picks up every inbound call, sounds natural, asks the right questions, schedules appointments, and sends your team a full post-call report — all without a single human intervention.
              </motion.p>
              <motion.ul variants={fadeUp} className="flex flex-col gap-4 mb-10 w-full">
                {[
                  "Answers 100% of inbound calls, 24 hours a day",
                  "Collects caller name, contact info, and intent",
                  "Schedules and confirms appointments in real time",
                  "Sends automated post-call summary reports to your team",
                  "Handles common FAQs and routes calls appropriately",
                  "Tone and language fully customized to your brand"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-[#b8872a] mt-1 shrink-0" size={20} />
                    <span className="text-[#1e2d3d]">{feature}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link href="/pricing" className="bg-[#1a2b45] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a2b45]/90 transition-colors inline-block">
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE 3: AI Auto Sourcing Agent */}
      <section id="auto" className="bg-white py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="md:w-1/2 flex flex-col items-start">
              <motion.div variants={fadeUp} className="bg-blue-50 text-[#2563a8] font-semibold text-xs tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-blue-100">
                AI Add-On
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45] mb-6">
                AI Auto Sourcing Agent
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
                Your AI analyst works auction floors around the clock — evaluating every vehicle against real market data so you only buy the right units at the right price. Stop guessing. Start scoring.
              </motion.p>
              <motion.ul variants={fadeUp} className="flex flex-col gap-4 mb-10 w-full">
                {[
                  "Sources vehicles from Manheim, ADESA, and major auction platforms",
                  "Purchase price benchmarked against KBB and MMR data",
                  "Estimated retail price and projected profit per unit",
                  "Automated repair cost estimates based on vehicle condition",
                  "Full vehicle history — accidents, title issues, odometer flags",
                  "Risk flags: flood damage, frame damage, high mileage, open recalls",
                  "Deal Score — a 0-100 confidence rating on every vehicle"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-[#2563a8] mt-1 shrink-0" size={20} />
                    <span className="text-[#1e2d3d]">{feature}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link href="/pricing" className="bg-[#1a2b45] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a2b45]/90 transition-colors inline-block">
                  View Pricing
                </Link>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <motion.div variants={fadeUp} className="bg-[#1a2b45] rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden flex flex-col items-center">
                <div className="mb-10 relative flex justify-center items-center">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#2a3b55" strokeWidth="16" />
                    <circle 
                      cx="100" cy="100" r="80" 
                      fill="none" stroke="#7eb3e8" strokeWidth="16" 
                      strokeDasharray="502" 
                      strokeDashoffset="90" /* 502 * (1 - 0.82) */
                      strokeLinecap="round" 
                      className="transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(126,179,232,0.5)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-white">82</span>
                    <span className="text-xs text-[#a0aec0] uppercase tracking-wider font-semibold">Deal Score</span>
                  </div>
                </div>

                <div className="w-full bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 text-green-400 p-1 rounded-full"><Check size={16} /></div>
                    <span className="text-sm font-medium">Clean title — no liens</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 text-green-400 p-1 rounded-full"><Check size={16} /></div>
                    <span className="text-sm font-medium">No flood or frame damage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500/20 text-yellow-400 p-1 rounded-full"><AlertTriangle size={16} /></div>
                    <span className="text-sm font-medium text-white/80">Minor collision history (rear)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 text-green-400 p-1 rounded-full"><Check size={16} /></div>
                    <span className="text-sm font-medium">Projected profit: <span className="text-white">$2,400</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 text-green-400 p-1 rounded-full"><Check size={16} /></div>
                    <span className="text-sm font-medium">Est. repair cost: <span className="text-white">$650</span></span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ADDITIONAL ASSISTANTS */}
      <section className="bg-[#e8eaed] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="text-[#2563a8] font-bold text-sm tracking-wider uppercase mb-4">
              More Tools
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-[#1a2b45] mb-6">
              Additional AI Assistants
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
              Custom-built AI tools for the unique workflows your business depends on. If you're doing it manually and repeatedly, we can automate it.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              "Review Generation",
              "FAQ Chatbot",
              "Appointment Reminders",
              "Internal Ops AI",
              "Lead Nurture Sequences",
              "Custom Workflows"
            ].map((tool, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-lg shadow-sm border border-border flex items-center justify-center text-center">
                <span className="font-semibold text-[#1a2b45] text-lg">{tool}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center mt-12">
            <Link href="/#contact" className="bg-[#1a2b45] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a2b45]/90 transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#2563a8] py-24 px-6 text-white text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6">
            Not Sure Which Service You Need?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/90 text-xl leading-relaxed mb-10">
            We'll walk through your business together and recommend exactly what will drive the most impact. No pressure, no jargon.
          </motion.p>
          <motion.a 
            variants={fadeUp}
            href="mailto:hello@clarevai.com" 
            className="bg-white text-[#2563a8] px-10 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us for a Free Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
