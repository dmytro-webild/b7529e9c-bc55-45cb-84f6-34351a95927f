"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, Beef, Leaf, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="FastFoodCo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Fast, Fresh & Delicious"
      description="Satisfy your cravings with our signature burgers and fresh-cut fries. Order online for quick pickup or delivery."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517442.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-entrepreneur-working-laptop-looking-camera-while-being-cafe_637285-3425.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-father-having-fun-with-his-daughter-tickling-her-lunch-dining-table_637285-2892.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-image-happy-smiling-woman-enjoy-her-morning-french-breakfast-open-cafe-terrace-tasty-organic-food-holding-french-croissant-her-hand_291049-526.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-female-student-eating-fast-food-fast-food-cheat-meal_169016-67586.jpg",
          alt: "Customer",
        },
      ]}
      avatarText="Loved by millions"
      buttons={[
        {
          text: "Order Now",
          href: "#products",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "100% Fresh Beef",
          icon: Beef,
        },
        {
          type: "text-icon",
          text: "Farm-to-Table",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Lightning Fast",
          icon: Zap,
        },
        {
          type: "text-icon",
          text: "Family Owned",
          icon: Users,
        },
        {
          type: "text-icon",
          text: "Award Winning",
          icon: Award,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Quality You Can Taste"
      description="We believe fast food should be real food. From locally sourced beef to hand-cut potatoes, we prioritize freshness in every bite."
      bulletPoints={[
        {
          title: "Fresh Ingredients",
          description: "Locally sourced farm produce.",
        },
        {
          title: "Speedy Service",
          description: "Hot food served in minutes.",
        },
        {
          title: "Family Friendly",
          description: "Atmosphere for everyone.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/family-having-nice-thanksgiving-dinner-together_23-2149082325.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Signature Burger",
          price: "$8.99",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-melted-cheese-burger_23-2149342862.jpg",
        },
        {
          id: "2",
          name: "Crispy Chicken",
          price: "$7.49",
          variant: "Spicy",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-fish-chips-paper-cups-with-great-britain-flags-sauces_23-2148784930.jpg",
        },
        {
          id: "3",
          name: "Famous Fries",
          price: "$3.99",
          variant: "Salted",
          imageSrc: "http://img.b2bpic.net/free-photo/string-cheese-with-lemon-bowl-served-with-potato-chips-pistachios_141793-2921.jpg",
        },
        {
          id: "4",
          name: "Fresh Salad",
          price: "$6.99",
          variant: "Vegan",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-sauce-with-ingredients-around_114579-28915.jpg",
        },
        {
          id: "5",
          name: "Milkshake",
          price: "$4.49",
          variant: "Chocolate",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-photo-freshly-made-milk-shake-grey-background_114579-59344.jpg",
        },
        {
          id: "6",
          name: "Dessert Cone",
          price: "$2.99",
          variant: "Sweet",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-portrait-young-beautiful-asian-woman-eating-ice-cream-summer_7861-935.jpg",
        },
      ]}
      title="Our Popular Menu"
      description="Browse through our delicious offerings and order your favorites today."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Frozen ingredients",
          "Artificial flavors",
          "Slow service",
        ],
      }}
      positiveCard={{
        items: [
          "Farm-to-table fresh",
          "Natural goodness",
          "Lightning speed",
        ],
      }}
      title="Why Choose Us"
      description="Experience the difference of commitment to quality."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "500+",
          title: "Restaurant Locations",
          items: [
            "Globally present",
          ],
        },
        {
          id: "m2",
          value: "1M+",
          title: "Daily Customers",
          items: [
            "Serving happiness",
          ],
        },
        {
          id: "m3",
          value: "30",
          title: "Years Experience",
          items: [
            "Quality history",
          ],
        },
      ]}
      title="Our Reach"
      description="Growing to serve your community better."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Food Blogger",
          testimonial: "The best burger I've had in a long time!",
          imageSrc: "http://img.b2bpic.net/free-photo/very-good-smiling-brunette-woman-shows-ok-okay-hand-sign-looking-satisfied-recommend-great-deal-pleased-with-quality-standing-white-background_176420-46695.jpg",
        },
        {
          id: "t2",
          name: "Mike R.",
          role: "Student",
          testimonial: "Fast service and perfect for study breaks.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-croissant-cup-coffee-against-black-brick-wall_169016-23040.jpg",
        },
        {
          id: "t3",
          name: "Linda K.",
          role: "Parent",
          testimonial: "My kids love the kids menu options here.",
          imageSrc: "http://img.b2bpic.net/free-photo/family-taking-selfie-together-while-having-dinner_23-2148610961.jpg",
        },
        {
          id: "t4",
          name: "David L.",
          role: "Professional",
          testimonial: "Great lunch spot for a quick bite.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-caucasian-brunette-woman-eating-icecream-cone_169016-48665.jpg",
        },
        {
          id: "t5",
          name: "Emily B.",
          role: "Local",
          testimonial: "Always fresh, always consistent quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-female-student-eating-fast-food-fast-food-cheat-meal_169016-67586.jpg",
        },
      ]}
      title="Loved by Foodies"
      description="See what our happy customers are saying about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer delivery?",
          content: "Yes, we partner with major delivery apps.",
        },
        {
          id: "q2",
          title: "Are there vegan options?",
          content: "We offer several plant-based alternatives.",
        },
        {
          id: "q3",
          title: "Can I order online?",
          content: "Yes, through our official website or app.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Join Us"
      title="Let's Stay Connected"
      description="Sign up for exclusive deals and news."
      imageSrc="http://img.b2bpic.net/free-photo/row-empty-chairs-office_23-2147899557.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="FastFoodCo"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Use",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
