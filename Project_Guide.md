# FNM Law Advocates LLP Website - Development Guide

## Project Overview
Building a professional law firm website for FNM Law Advocates LLP using Next.js, TypeScript, and Tailwind CSS.

## Brand Guidelines
- **Primary Colors**: Gold (#D4AF37), Black (#000000), White (#FFFFFF)
- **Typography**: Inter (body), Playfair Display or similar serif (headings)
- **Tone**: Professional, trustworthy, approachable yet authoritative

## Firm Information
- **Name**: FNM Law Advocates LLP
- **Tagline**: "Commissioners for Oath & Notaries Public"
- **Address**: Greyville Hub, 3rd Floor, Wing B Suite 8, Off Eastern Bypass, Ruai, Nairobi, Kenya
- **Phone**: +254 728 657 560, +254 713 286 796
- **Email**: info@fnmlawadvocates.com

## Team Members
1. **Fiona Kasyoka Nyamai** - Managing Partner
   - Specialties: Real Estate & Conveyancing, Corporate Law, IP Law, Family Law, Probate & Estate Planning
   - Currently pursuing Company Secretary certification

2. **Maureen Auma Nekesa Nasiboye** - Partner
   - Specialties: Civil & Commercial Litigation, Employment & Labour Law, Insurance Law
   - Currently pursuing MBA at Nexford University

3. **Abigael Mbesa Kimanzi** - Senior Associate
   - Specialties: Data Protection Law, Conveyancing, Corporate Law, Commercial Contracts

## Practice Areas
1. **Real Estate & Conveyancing**
   - Land purchases, joint ventures, mortgages, charges, leases, transfers
   - Title applications and financing assistance

2. **Intellectual Property Law**
   - Trademarks, patents, licensing, copyrights
   - Registration services, renewals, infringement proceedings

3. **Debt Recovery**
   - Collection services, legal proceedings

4. **Corporate and Commercial Law**
   - Company incorporation, M&A, joint ventures
   - Banking, finance, competition law, insolvency

5. **Alternative Dispute Resolution**
   - Arbitration, mediation, saving time and costs

6. **Litigation**
   - Insurance law, tort law, contract law, land law
   - Family & succession, employment & labour
   - Constitutional petitions, judicial review, election petitions

## Development Phases

### Phase 1: Foundation
- [ ] Next.js project setup with TypeScript
- [ ] Tailwind configuration with custom colors
- [ ] Basic folder structure
- [ ] Layout component with header/footer
- [ ] Simple homepage with hero section

### Phase 2: Core Pages
- [ ] About Us page (mission, vision, team)
- [ ] Practice Areas overview
- [ ] Individual practice area pages (6 total)
- [ ] Contact page with firm details
- [ ] Basic navigation between pages

### Phase 3: Components & Interactivity
- [ ] Responsive navigation with mobile menu
- [ ] Service cards with hover effects
- [ ] Team member profile cards
- [ ] Contact form with validation
- [ ] Professional animations and transitions

### Phase 4: Advanced Features
- [ ] Consultation booking form
- [ ] Document upload portal concept
- [ ] Newsletter signup
- [ ] Client testimonials section
- [ ] Legal resources/FAQ section

### Phase 5: Polish & Optimization
- [ ] Mobile responsiveness refinement
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Accessibility compliance
- [ ] Cross-browser testing

## Technical Specifications
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (if needed)
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel (recommended)

## Key Components Needed
```typescript
// Component structure reference
/components
  /ui
    - Button.tsx
    - Card.tsx
    - Input.tsx
    - Navigation.tsx
  /sections
    - Hero.tsx
    - ServicesOverview.tsx
    - TeamSection.tsx
    - ContactForm.tsx
  /layout
    - Header.tsx
    - Footer.tsx
    - Layout.tsx
```

## Content Strategy
- Clear value propositions for each service
- Process explanations ("How we handle your case")
- Trust signals: experience, notable cases, certifications
- Strong CTAs guiding toward consultation booking
- Local SEO for Nairobi/Kenya market

## Design Principles
1. **Professional First**: Every element should convey competence and trust
2. **Clean Hierarchy**: Clear information architecture
3. **Accessible**: WCAG 2.1 compliance
4. **Mobile-First**: Responsive design priority
5. **Performance**: Fast loading, optimized images
6. **Conversion-Focused**: Clear paths to contact/booking

## Development Commands
```bash
# Setup
npx create-next-app@latest fnm-law --typescript --tailwind --eslint --app

# Development
npm run dev

# Build
npm run build

# Type checking
npm run type-check
```

## Folder Structure
```
/src
  /app
    /about
    /practice-areas
      /[area]
    /contact
    /booking
    layout.tsx
    page.tsx
  /components
  /lib
  /types
  /utils
```

## Deployment Notes
- Configure environment variables for contact form
- Set up domain and SSL
- Configure analytics if needed
- Test all forms and interactions in production

## Future Enhancements
- Client portal for case tracking
- Blog/articles section for SEO
- Multi-language support (Swahili)
- Integration with calendar systems
- Payment processing for consultations