import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Build Something Amazing
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Create beautiful, responsive web applications with our modern React framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Amazing Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Built for speed and performance, ensuring your application runs smoothly."
            />
            <FeatureCard
              icon={Shield}
              title="Secure by Default"
              description="Enterprise-grade security features to protect your data and users."
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile First"
              description="Responsive design that works beautifully on all devices and screen sizes."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications.
          </p>
          <Button size="lg">
            Start Building Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;