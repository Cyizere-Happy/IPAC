import React from 'react';

const Services = () => {
    return (
        <section className="bg-white py-28 px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                {/* Visual Column */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-black">Education</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Workshops on copyrights, patents, and trademarks for student innovators.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-black">Advocacy</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Promoting positive IP policies and practices within Rwanda Coding Academy.
                    </p>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-black">Protection</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Helping creators understand how to secure and monetize their intellectual property.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
