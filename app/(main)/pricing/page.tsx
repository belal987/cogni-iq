import { Check, Zap, Rocket, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Basic assessment for curious individuals.",
      features: ["Full 20-question IQ test", "Standard score result", "Global percentile rank", "1 Practice category"],
      icon: Zap,
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      description: "Deep cognitive profiling and growth tracking.",
      features: ["Unlimited IQ assessments", "Detailed domain breakdowns", "Growth tracking dashboard", "Full Practice Mode access", "PDF scoring certificates"],
      icon: Rocket,
      cta: "Go Pro Now",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Bulk testing for schools and organizations.",
      features: ["Team management dashboard", "Departmental benchmarks", "API access for results", "Custom assessment branding", "Priority support"],
      icon: Crown,
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-6xl font-bold font-heading text-zinc-100 mb-6">Simple, Transparent Pricing</h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Choose the plan that best fits your goals. Start for free and upgrade as you need deeper insights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {tiers.map((tier) => (
          <Card 
            key={tier.name} 
            className={`p-8 bg-zinc-900 border-zinc-800 flex flex-col relative transition-all hover:scale-[1.02] ${
              tier.popular ? 'border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] ring-1 ring-emerald-500/50' : ''
            }`}
          >
            {tier.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 font-bold px-3">
                Most Popular
              </Badge>
            )}
            
            <div className="mb-8">
              <div className="h-10 w-10 rounded-lg bg-zinc-950 flex items-center justify-center mb-4">
                <tier.icon className={`h-5 w-5 ${tier.popular ? 'text-emerald-500' : 'text-zinc-400'}`} />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-black text-zinc-100">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-zinc-500 text-sm">/one-time</span>}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">{tier.description}</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-zinc-400">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-emerald-500" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button 
              className={`w-full h-12 font-bold ${
                tier.popular 
                  ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                  : 'bg-zinc-100 text-zinc-950 hover:bg-white'
              }`}
            >
              {tier.cta}
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center text-zinc-500 text-sm">
        Prices are shown in USD. All plans subject to our terms and conditions.
      </div>
    </div>
  );
}
