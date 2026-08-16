import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';

export const metadata = {
    title: "Portfolio & Demo Gallery | Soft Expert Zone",
    description: "Explore our successful projects and website demos.",
};

const projectLinks: Record<string, string> = {
    brashop: 'https://brashopf.softexpertzone.com/',
    chaldal: 'https://chaldalf.softexpertzone.com/',
    chinabd: 'https://chinabdf.softexpertzone.com/',
    dorjibari: 'https://dbarif.softexpertzone.com/',
    ghorerbazar: 'https://ghorerbazarf.softexpertzone.com/'
};

const PortfolioPage = async () => {
    const demoPath = path.join(process.cwd(), 'public', 'images', 'demo');
    let images: string[] = [];
    
    try {
        const files = await fs.readdir(demoPath);
        images = files.filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file));
    } catch (error) {
        console.error("Failed to read demo images:", error);
    }

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20">
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের কাজসমূহ</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        আমাদের তৈরি করা কিছু চমৎকার ওয়েবসাইটের ডেমো গ্যালারি
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                {images.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg py-12">
                        কোন ডেমো ছবি পাওয়া যায়নি।
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((image, index) => {
                            const imageName = image.replace(/\.[^/.]+$/, "");
                            const liveLink = projectLinks[imageName.toLowerCase()] || `/images/demo/${image}`;
                            
                            return (
                                <div 
                                    key={index} 
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                                        <Image
                                            src={`/images/demo/${image}`}
                                            alt={imageName}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <a 
                                                href={liveLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-50"
                                            >
                                                Live Link
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 capitalize">
                                            {imageName}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
};

export default PortfolioPage;