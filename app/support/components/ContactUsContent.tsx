"use client";

import { LineReveal } from "@/app/utils/animation";


const ContactUsContent = () => {
    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-4">
                Contact Us
            </h2>

            <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed mb-10">
                <LineReveal text="We value your feedback and are always here to help you with any questions or concerns you may have. Please feel free to contact us using any of the methods below:" />
            </div>

            {/* Email Section */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">

                    <img src="/icons/majesticons_mail.svg" alt="Email" className="" />

                    <h3 className="text-2xl font-gilroy-semibold text-[#16242A]">Email</h3>
                </div>
                <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed pl-1">
                    <LineReveal text="Send us an email at phoenixflytravel@gmail.com and we'll get back to you as soon as possible. Our email support team aims to respond within 24 hours." />
                </div>
            </div>

            {/* Phone Section */}
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-2">
                    <img src="/icons/solar_phone-bold.svg" alt="Phone" className="" />
                    <h3 className="text-2xl font-gilroy-semibold text-[#16242A]">Phone</h3>
                </div>
                <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed pl-1">
                    <LineReveal text="Call us at +917610584428 anytime and we'll be happy to assist you. Our phone support team is available 24 hours a day." />
                </div>
            </div>

            {/* Contact Form */}
            <div className="mb-12">
                <div className="flex items-center gap-2 mb-2">

                    <img src="/icons/fluent_contact-card-48-filled.svg" alt="Form" className="" />

                    <h3 className="text-2xl font-gilroy-semibold text-[#16242A]">Contact Form</h3>
                </div>
                <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed pl-1 mb-6">
                    <LineReveal text="Fill out our contact form and we'll respond to your message within 10-15 minutes. Our contact form is available 24 hours a day." />
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:ring-1 focus:ring-primary-orange outline-none font-gilroy-medium text-base transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:ring-1 focus:ring-primary-orange outline-none font-gilroy-medium text-base transition-all"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:ring-1 focus:ring-primary-orange outline-none font-gilroy-medium text-base transition-all"
                    />
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-4 rounded-xl bg-white border border-gray-100 w-24">
                            <img src="/icons/mdi_internet.svg" alt="Globe" className="text-[#FF6A00]" />
                            <span className="text-sm font-gilroy-medium text-[#16242A]">
                            </span>
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="flex-1 px-5 py-4 rounded-xl bg-white border border-gray-100 focus:ring-1 focus:ring-primary-orange outline-none font-gilroy-medium text-base transition-all"
                        />
                    </div>
                    <textarea
                        placeholder="Your Comment (Max Limit 150 Words)"
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:ring-1 focus:ring-primary-orange outline-none font-gilroy-medium text-base transition-all resize-none"
                    ></textarea>

                    <button className="w-full md:w-fit py-3.5 px-12 bg-[#FF6A00] text-white rounded-xl font-gilroy-semibold text-sm hover:bg-[#e96f21] transition-all self-center md:mx-auto block mt-4">
                        Contact Us
                    </button>
                </form>
            </div>

            {/* Social Media */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <img src="/icons/mdi_internet.svg" alt="Social" className="" />
                    <h3 className="text-2xl font-gilroy-semibold text-[#16242A]">Social Media</h3>
                </div>
                <div className="text-base font-gilroy-medium text-[#16242A] mb-6 leading-relaxed">
                    <LineReveal text="Reach out to us through social media channels." />
                </div>

                <div className="flex gap-1 mb-4">
                    <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                        <img src="/icons/ic_baseline-facebook.svg" alt="Facebook" className="" />
                    </a>
                    <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                        <img src="/icons/fe_instagram.svg" alt="Instagram" className="" />
                    </a>
                    <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                        <img src="/icons/ant-design_whats-app-outlined.svg" alt="WhatsApp" className="" />
                    </a>
                    <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                        <img src="/icons/mdi_twitter.svg" alt="Twitter" className="" />
                    </a>
                    <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                        <img src="/icons/ri_youtube-fill.svg" alt="YouTube" className="" />
                    </a>
                </div>

                <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                    <LineReveal text="Our social media accounts are monitored and we aim to respond to direct messages within 5-10 minutes." />
                </div>
            </div>
        </div>
    );
};

export default ContactUsContent;
