import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Truck, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const reviews = [
    {
      name: "Ahmed Khan",
      rating: 5,
      text: "Excellent service and genuine Apple products. Highly recommended for anyone looking to buy Apple devices in Islamabad.",
    },
    {
      name: "Fatima Ali",
      rating: 5,
      text: "Best prices in town with amazing customer support. Got my iPhone 16 from here and absolutely love it!",
    },
    {
      name: "Usman Malik",
      rating: 4,
      text: "Great store with authentic products. The staff is very knowledgeable and helpful.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Only genuine Apple products with official warranty",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery across Islamabad and Rawalpindi",
    },
    {
      icon: Star,
      title: "Expert Support",
      description: "Dedicated support team to help with your purchase",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open daily from 1:30 PM for your convenience",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-elevate transition-all">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Customer Reviews
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Rated 4.4★ on Google with 216 reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Apple?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Visit our store or browse our collection online. Get the latest Apple products with warranty and support.
          </p>
          <Link href="/shop">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 rounded-full text-lg font-medium min-h-12"
              data-testid="button-browse-products"
            >
              Browse Products
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
