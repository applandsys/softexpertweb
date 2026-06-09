import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import ClientCarousel from "@/components/ClientCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import CustomerReviews from "@/components/CustomerReviews";
import BlogPosts from "@/components/BlogPosts";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer"; // Import the footer

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-950">
            <main>
                <Hero />
                <Services />
                <AboutUs />
                <ClientCarousel />
                <WhyChooseUs />
                <OurServices />
                <CustomerReviews />
                <BlogPosts />
                <CallToAction />
            </main>
            <Footer /> {/* Add the footer here */}
        </div>
    );
}