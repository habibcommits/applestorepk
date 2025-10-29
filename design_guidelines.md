# Design Guidelines for Apple.store.pk E-Commerce Platform

## Design Approach

**Reference-Based Approach: Apple Design Language**
Drawing inspiration from Apple.com's premium, minimalist aesthetic with adaptations for e-commerce functionality. The design emphasizes product photography, generous whitespace, and sophisticated typography while maintaining accessibility and usability for a Pakistani cell phone retail store.

---

## Core Design Elements

### A. Typography

**Font Family:**
- Primary: SF Pro Display (or fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)
- Mono: SF Mono for technical specs and pricing

**Typography Scale:**
- Hero Headlines: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- Section Headlines: text-4xl md:text-5xl, font-semibold
- Product Titles: text-2xl md:text-3xl, font-semibold
- Subheadings: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text: text-sm, font-normal
- Button Text: text-base md:text-lg, font-medium, tracking-wide

---

### B. Layout System

**Spacing Primitives:**
Primary spacing units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Micro spacing: p-2, m-2, gap-2
- Component internal spacing: p-4, p-6, gap-4
- Section spacing: py-16 md:py-24 lg:py-32
- Grid gaps: gap-6, gap-8, gap-12

**Container Widths:**
- Full-width hero: w-full
- Content sections: max-w-7xl mx-auto px-4 md:px-8
- Product grids: max-w-7xl
- Admin dashboard: max-w-screen-2xl
- Forms: max-w-2xl

**Grid Systems:**
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Feature Sections: grid-cols-1 md:grid-cols-2 gap-8
- Admin Dashboard: grid-cols-1 lg:grid-cols-4 (sidebar + content)

---

### C. Component Library

#### Navigation Header
- Fixed position at top with backdrop blur (backdrop-blur-lg)
- Height: h-16 md:h-20
- Layout: Logo (left), Nav Links (center), Theme Toggle + Cart Icon (right)
- Navigation links: Hover underline animation with 2px height
- Mobile: Hamburger menu with slide-in overlay

#### Hero Section
- **Large Hero Image**: Full-width product showcase image (1920x900px)
- Height: min-h-[70vh] md:min-h-[80vh]
- Centered content overlay with blurred button backgrounds
- Headline + Subtext + Dual CTA buttons (Learn More + Shop Now)
- Buttons with backdrop-blur-md and semi-transparent backgrounds

#### Product Cards
- Aspect ratio: aspect-[3/4] for product images
- Card structure: Image → Title → Price → Add to Cart button
- Hover effect: Subtle scale transform (scale-105) and shadow elevation
- Rounded corners: rounded-2xl
- Padding: p-6

#### Shopping Cart
- Slide-in drawer from right side (w-full md:w-96)
- Cart items: Thumbnail (left), Product info (center), Quantity controls (right)
- Fixed bottom section for subtotal and checkout CTA
- Empty cart state with illustration and "Continue Shopping" CTA

#### Checkout Form
- Single-column layout max-w-2xl
- Grouped sections with clear visual separation
- Input fields: h-12, rounded-lg, px-4
- Payment method cards: Radio selection with visual emphasis
- Order summary sidebar on desktop (2-column layout lg:grid-cols-3)

#### Admin Dashboard
- Sidebar navigation (w-64, fixed on desktop)
- Top bar: Dashboard title, user info, theme toggle
- Data tables: Full-width with alternating row treatments
- Action buttons: Icon-only for edit/delete with tooltips
- Forms: Modal overlays for add/edit product (max-w-3xl)
- Order cards: Status badges, customer info, order items list

#### Footer
- 4-column grid on desktop, stacked on mobile
- Sections: About, Contact, Quick Links, Business Hours
- Embedded Google Maps: w-full h-64 rounded-xl
- Social proof: Star rating display with review count
- Bottom bar: Copyright, payment method icons

#### Theme Toggle
- Sun/Moon icon button in header
- Smooth transitions on theme change (transition-all duration-300)
- Persistent theme preference via localStorage

---

### D. Interactive Elements

**Buttons:**
- Primary CTA: Large buttons (px-8 py-4), rounded-full
- Secondary: Outlined style with 2px border, rounded-full
- Icon buttons: p-3, rounded-full
- Add to Cart: w-full, rounded-lg, h-12

**Form Inputs:**
- Text inputs: h-12, rounded-lg, border-2, px-4
- Select dropdowns: Match text input styling
- Focus states: Ring effect with offset

**Cards & Containers:**
- Product cards: rounded-2xl, border or subtle shadow
- Information sections: rounded-3xl, p-8 md:p-12
- Modal overlays: rounded-2xl with backdrop blur

---

## Page-Specific Layouts

### Landing Page
1. **Hero Section**: Full-width image with centered headline, subtext, dual CTAs
2. **Featured Products**: 4-column grid showcasing best sellers
3. **About Section**: 2-column split (text + image/map)
4. **Reviews Section**: Horizontal scroll of customer testimonials with star ratings
5. **Store Information**: Address, phone, hours, Google Maps embed
6. **Footer**: Comprehensive links and contact information

### Shop Page
- Filter sidebar (desktop) or dropdown (mobile)
- Product grid: 4 columns on xl, 3 on lg, 2 on md, 1 on mobile
- Pagination or infinite scroll
- Floating cart summary on scroll

### Admin Dashboard
- Left sidebar: Logo, navigation menu, logout
- Main content area: Data tables, forms, order management
- Modal overlays for CRUD operations
- Responsive: Sidebar collapses to hamburger on mobile

---

## Images

### Required Images:
1. **Hero Image**: Large banner showcasing flagship product (iPhone/MacBook) - 1920x900px, premium lifestyle photography
2. **Product Images**: Square aspect ratio (800x800px) for all products with clean white/minimal backgrounds
3. **Store Interior**: Professional photo of the physical store for About section - 1200x800px
4. **Team/Owner Photo**: Authentic photo for building trust - 600x600px
5. **Logo**: Apple.store.pk branded logo for header/footer

### Image Treatment:
- All product images: Consistent backgrounds, professional quality
- Hero images: Full-bleed with subtle gradient overlays
- Thumbnails: Consistent sizing across cart and order summaries
- Lazy loading for performance optimization

---

## Accessibility & Performance

- ARIA labels for all interactive elements
- Keyboard navigation support throughout
- Focus indicators: 2px ring with offset
- Minimum touch target: 44x44px for mobile
- Alt text for all images
- Form validation with clear error messages
- Loading states for async operations

---

## Key Design Principles

1. **Generous Whitespace**: Embrace negative space for premium feel
2. **Product-First**: Photography takes center stage
3. **Minimal Friction**: Guest checkout, clear CTAs, simple navigation
4. **Professional Polish**: Attention to micro-interactions and transitions
5. **Trust Signals**: Reviews, ratings, store information prominently displayed
6. **Responsive Excellence**: Mobile-first approach with desktop enhancements