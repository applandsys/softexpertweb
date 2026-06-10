import React from 'react';
import Footer from "@/components/Footer";
import HeroLanding from "@/components/HeroLanding";
import EcommerceFeatureSection from "@/components/sections/EcommerceFeatureSection";
import FeatureList from "@/components/sections/FeatureList";
import CallToAction from "@/components/sections/CallToAction";


const EcommerceLandingPage = () => {
    return (
        <div className="min-h-screen">
            <main>
                <HeroLanding />
                <EcommerceFeatureSection/>
                <FeatureList/>
                <div className="bg-black">
                    <CallToAction/>
                </div>
            </main>
            <Footer /> {/* Add the footer here */}
        </div>
    );
};

export default EcommerceLandingPage;