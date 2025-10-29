import { Phone, MapPin, Clock, Mail, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-24">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Apple.store.pk</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for authentic Apple products in Islamabad. Experience premium quality and exceptional service.
            </p>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              <span className="font-semibold">4.4</span>
              <span className="text-sm text-muted-foreground">(216 reviews)</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a href="tel:03025018696" className="hover:text-primary transition-colors" data-testid="link-phone">
                  0302 5018696
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Shop no. 2,3, Karsaaz Tower II, E 11/2 Islamabad, 44000
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a href="mailto:info@apple.store.pk" className="hover:text-primary transition-colors">
                  info@apple.store.pk
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Opens Daily</p>
                  <p className="text-muted-foreground">1:30 PM onwards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block hover:text-primary transition-colors">Home</a>
              <a href="/shop" className="block hover:text-primary transition-colors">Shop</a>
              <a href="/admin" className="block hover:text-primary transition-colors">Admin</a>
            </nav>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6">Find Us</h3>
          <div className="w-full h-64 rounded-xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.354250478828!2d72.97091507410013!3d33.6997812362619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbdb386ff29cf%3A0xf82d723766d6b4b9!2sApple.store.pk!5e0!3m2!1sen!2s!4v1761778997948!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apple.store.pk Location"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apple.store.pk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
