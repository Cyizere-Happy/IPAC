import React from 'react';

const Services = () => {
    return (
        <section className="bg-[#FDFBF7] py-28 px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                {/* Visual Column (Empty to match design negative space or just text) */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-black">Pillars of Strength</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        We build the foundation for lasting confidence and leadership in the workplace.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-black">Mentorship</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Connecting aspiring leaders with established executives to guide their professional journey.
                    </p>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-black">Community</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        A safe space for women to share experiences, strategies, and successes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
