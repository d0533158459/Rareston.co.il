# Rarestone — יחידות אירוח יוקרתיות בצפת

## 🚀 Quick Start

```bash
npm install
cp .env.local.example .env.local
# Fill in your Supabase credentials in .env.local
npm run dev
```

Open http://localhost:3000

---

## 📁 Project Structure

```
rarestone/
├── app/
│   ├── page.tsx              # Homepage
│   ├── apartments/[id]/      # Apartment detail pages
│   ├── booking/              # Booking checkout (3-step)
│   ├── admin/                # Admin dashboard (password: rarestone2024)
│   ├── contact/              # Contact page
│   └── api/chat/             # AI concierge API
├── components/
│   ├── Navbar.tsx            # Sticky RTL navbar
│   ├── Hero.tsx              # Full-screen hero + booking widget
│   ├── ApartmentCard.tsx     # Apartment cards with gallery
│   ├── Reviews.tsx           # Customer reviews section
│   ├── Gallery.tsx           # Masonry gallery with lightbox
│   ├── AIChat.tsx            # Floating AI concierge
│   ├── WhatsAppButton.tsx    # WhatsApp floating button
│   └── Footer.tsx
├── lib/
│   ├── data.ts               # Apartment data
│   ├── supabase.ts           # Supabase client
│   ├── utils.ts              # Helper functions
│   └── LangContext.tsx       # He/En language context
└── styles/globals.css
```

---

## 🔧 Environment Variables

Create `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=https://rarestone.co.il
```

---

## 🗄️ Supabase Setup

Run these SQL commands in your Supabase project:

```sql
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  apartment_id text NOT NULL,
  guest_name text NOT NULL,
  guest_email text NOT NULL,
  guest_phone text NOT NULL,
  check_in date NOT NULL,
  check_out date NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  total_price integer NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE blocked_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  apartment_id text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  reason text,
  created_at timestamptz DEFAULT now()
);
```

---

## 💳 PayMe Payment Integration

The booking flow is architected for PayMe gateway. To activate:
1. Get PayMe API credentials from https://ng.paymeservice.com
2. Add `PAYME_SELLER_ID` and `PAYME_SECRET_KEY` to `.env.local`
3. Implement the payment endpoint in `app/api/payment/route.ts`

---

## 🔐 Admin Dashboard

Access: `/admin`  
Password: `rarestone2024` (change in production via ADMIN_PASSWORD env var)

Features:
- View booking statistics
- Manage apartments (edit name, price, description, images)
- View and manage bookings
- Block dates per apartment
- Edit reviews
- Change homepage hero text and image

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
# Set environment variables in Vercel dashboard
# Add domain: rarestone.co.il
```

---

## 📞 Contact

WhatsApp: 053-315-8459  
Email: d0533158459@gmail.com
