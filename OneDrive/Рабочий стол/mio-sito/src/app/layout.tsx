import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mariupolinvest.ru"),
  title: "Южный Бизнес Инвест — Инвестиции в недвижимость Мариуполя | Ипотека 2%",
  description:
    "Инвестируйте в недвижимость Мариуполя: ипотека 2%, арендный поток от 50 000 ₽/мес, рост цены актива. Три ЖК бизнес-класса. Сопровождение от покупки до аренды — бесплатно.",
  keywords:
    "ипотека, мариуполь, инвестиции, недвижимость, купить квартиру, купить квартиру в мариуполе, инвестиции в недвижимость мариуполь, ипотека 2% новые территории, купить квартиру мариуполь, арендный доход мариуполь, южный бизнес инвест, новостройки мариуполь, квартира как актив",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://mariupolinvest.ru",
    siteName: "МариупольИнвест — Южный Бизнес Инвест",
    title: "Южный Бизнес Инвест — Инвестиции в недвижимость Мариуполя | Ипотека 2%",
    description:
      "Инвестируйте в недвижимость Мариуполя: ипотека 2%, арендный поток от 50 000 ₽/мес, рост цены актива. Три ЖК бизнес-класса. Сопровождение от покупки до аренды — бесплатно.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "МариупольИнвест — Южный Бизнес Инвест" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Южный Бизнес Инвест — Инвестиции в недвижимость Мариуполя | Ипотека 2%",
    description:
      "Инвестируйте в недвижимость Мариуполя: ипотека 2%, арендный поток от 50 000 ₽/мес, рост цены актива.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://mariupolinvest.ru",
  },
  icons: {
    icon: "/yubi-logo.png",
    shortcut: "/yubi-logo.png",
    apple: "/yubi-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "_VTBmQZZKrGa2p8JiVe7tenV9GVaz1VoMW119n_hV0I",
    other: {
      "yandex-verification": "63d29298187c2849",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="preload" as="image" href="/hero-bg.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Южный Бизнес Инвест",
              description:
                "Агентство недвижимости в Мариуполе. Ипотека 2%, инвестиции, аренда.",
              url: "https://mariupolinvest.ru",
              telephone: "+79966634824",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Мариуполь",
                addressCountry: "RU",
              },
              areaServed: "Мариуполь",
              priceRange: "от 7 500 000 ₽",
              sameAs: ["mailto:mariupolinvest@gmail.com"],
            }),
          }}
        />
      </head>
      <body className="bg-white text-[#273852] antialiased overflow-x-hidden pb-28">
        {children}
        <ChatWidget />
        <CookieBanner />
        {/* Yandex Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109155000', 'ym');
            ym(109155000, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/109155000" style={{position:"absolute", left:"-9999px"}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
