import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/iPhone_17_Pro_hero_image_0ba29daa.png";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Latest Apple Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 md:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Experience Innovation
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto font-medium">
          Premium Apple products at the heart of Islamabad
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/shop">
            <Button
              size="lg"
              className="px-8 py-6 rounded-full text-lg font-medium min-h-12"
              data-testid="button-shop-now"
            >
              Shop Now
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 rounded-full text-lg font-medium backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/30 text-white min-h-12"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>

        {/* Business Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">4.4★</div>
            <div className="text-sm text-white/80">216 Google Reviews</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="text-lg font-semibold mb-2">Opens Daily</div>
            <div className="text-sm text-white/80">1:30 PM onwards</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="text-lg font-semibold mb-2">Visit Us</div>
            <div className="text-sm text-white/80">E-11/2, Islamabad</div>
          </div>
        </div>
      </div>
    </section>
  );
}
