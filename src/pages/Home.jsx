// src/pages/Home.jsx
import { MapPin, Award, ScrollText, ShieldCheck } from 'lucide-react';
import { products, businessDetails } from '../data';

export default function Home() {

    return (
        <div className="pb-0">

            {/* --- HERO SECTION --- */}
            <section id="home" className="bg-khadi-200 py-24 px-4 text-center relative overflow-hidden dark:bg-khadi-900 border-b dark:border-khadi-700 transition-colors duration-300">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/woven.png')] dark:opacity-5"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 border border-khadi-800 rounded-full text-xs font-bold tracking-[0.2em] text-khadi-800 uppercase mb-6 dark:border-khadi-400 dark:text-khadi-400">
            Est. 2013 • Nagayalanka
          </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-khadi-900 mb-6 leading-tight dark:text-khadi-50">
                        Threads of <span className="text-khadi-accent italic">Heritage</span>
                    </h1>
                    <p className="text-khadi-800 mb-10 text-xl max-w-2xl mx-auto leading-relaxed dark:text-khadi-200">
                        Authentic, handspun Khadi directly from the weavers of {businessDetails.tradeName}.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#gallery" className="bg-khadi-900 text-white px-8 py-4 rounded-sm hover:bg-khadi-accent transition-all shadow-lg hover:shadow-xl dark:bg-khadi-100 dark:text-khadi-900 dark:hover:bg-khadi-accent dark:hover:text-white">
                            View Our Craft
                        </a>
                        <a href="#about" className="border border-khadi-900 text-khadi-900 px-8 py-4 rounded-sm hover:bg-khadi-100 transition-colors dark:border-khadi-100 dark:text-khadi-100 dark:hover:bg-khadi-800">
                            About the Society
                        </a>
                    </div>
                </div>
            </section>

            {/* --- GALLERY SECTION (UPDATED LAYOUT) --- */}
            <section id="gallery" className="max-w-7xl mx-auto px-4 py-24 scroll-mt-16">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-khadi-900 mb-4 dark:text-khadi-50">Masterpieces</h2>
                    <p className="text-khadi-600 max-w-xl mx-auto dark:text-khadi-300">
                        A showcase of the traditional weaving techniques preserved by our artisans in the Krishna District.
                    </p>
                    <div className="h-1 w-24 bg-khadi-accent mx-auto mt-6"></div>
                </div>

                {/* CHANGED: Used flex-wrap and justify-center instead of grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            // CHANGED: Fixed width (w-80 or 320px) ensures uniformity.
                            // 'w-full' for mobile, 'sm:w-80' for larger screens.
                            className="w-full sm:w-80 group bg-white border border-khadi-100 hover:shadow-xl transition-all duration-300 dark:bg-khadi-800 dark:border-khadi-700 flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="relative overflow-hidden aspect-[3/4] bg-khadi-100 dark:bg-khadi-900">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />
                            </div>

                            {/* Info Area */}
                            <div className="p-6 flex-1 flex flex-col text-center">
                                <p className="text-xs text-khadi-accent font-bold uppercase mb-3 tracking-wider">{product.category}</p>
                                <h3 className="font-serif text-lg text-khadi-900 mb-3 leading-snug dark:text-khadi-50">{product.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-khadi-300 leading-relaxed italic">
                                    "{product.desc}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- INSTITUTIONAL PROFILE --- */}
            <section id="about" className="bg-khadi-100 py-24 scroll-mt-16 dark:bg-khadi-900 border-t dark:border-khadi-800">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left: Content */}
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl text-khadi-900 mb-6 dark:text-khadi-50">
                                Institutional Profile
                            </h2>
                            <p className="text-khadi-800 mb-8 text-lg leading-relaxed dark:text-khadi-200">
                                Registered under the Societies Registration Act (Reg No: {businessDetails.regNo}),
                                <span className="font-bold"> {businessDetails.tradeName}</span> is a recognized pillar
                                of the Nagayalanka weaving community. We are committed to preserving the art of handspun cotton.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded shadow-sm border-l-4 border-khadi-accent dark:bg-khadi-800">
                                    <Award className="text-khadi-accent mb-3" size={28} />
                                    <h3 className="font-bold text-khadi-900 dark:text-khadi-100">KVIC Certified</h3>
                                    <p className="text-sm text-gray-600 dark:text-khadi-200">Code: {businessDetails.kvicCode}</p>
                                </div>

                                <div className="bg-white p-6 rounded shadow-sm border-l-4 border-khadi-accent dark:bg-khadi-800">
                                    <ShieldCheck className="text-khadi-accent mb-3" size={28} />
                                    <h3 className="font-bold text-khadi-900 dark:text-khadi-100">Khadi Mark</h3>
                                    <p className="text-sm text-gray-600 dark:text-khadi-200">{businessDetails.certNo}</p>
                                </div>

                                <div className="bg-white p-6 rounded shadow-sm border-l-4 border-khadi-accent dark:bg-khadi-800">
                                    <ScrollText className="text-khadi-accent mb-3" size={28} />
                                    <h3 className="font-bold text-khadi-900 dark:text-khadi-100">Registrations</h3>
                                    <p className="text-sm text-gray-600 dark:text-khadi-200 block">Society: {businessDetails.regNo}</p>
                                    <p className="text-sm text-gray-600 dark:text-khadi-200 font-medium mt-1">GST: {businessDetails.gstin}</p>
                                </div>

                                <div className="bg-white p-6 rounded shadow-sm border-l-4 border-khadi-accent dark:bg-khadi-800">
                                    <MapPin className="text-khadi-accent mb-3" size={28} />
                                    <h3 className="font-bold text-khadi-900 dark:text-khadi-100">Location</h3>
                                    <p className="text-sm text-gray-600 dark:text-khadi-200">Krishna Dist, AP</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual Card */}
                        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-khadi-200 dark:bg-khadi-800 dark:border-khadi-700 relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ScrollText size={120} />
                            </div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 dark:text-khadi-400">Jurisdiction Details</h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-khadi-accent uppercase mb-1">Business Owner</label>
                                    <p className="text-xl font-serif text-khadi-900 dark:text-khadi-50">{businessDetails.owner}</p>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-khadi-accent uppercase mb-1">GST Registration</label>
                                    <p className="font-mono text-khadi-800 dark:text-khadi-200 tracking-wide">{businessDetails.gstin}</p>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-khadi-accent uppercase mb-1">Operational Address</label>
                                    <p className="text-khadi-800 dark:text-khadi-200">{businessDetails.address}</p>
                                </div>

                                <div className="pt-6 border-t border-gray-100 dark:border-khadi-700 text-sm text-gray-500 dark:text-khadi-400">
                                    <p>• Circle: Vijayawada III</p>
                                    <p>• Division: Guntur</p>
                                    <p>• Range: Machilipatnam</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}