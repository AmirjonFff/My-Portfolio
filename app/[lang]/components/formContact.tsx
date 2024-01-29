"use client";

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ContactForm } from './IComponents';

interface IFormContact {
    lang: ContactForm;
}

function FormContact({ lang }: IFormContact) {

    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_e3gtz8d', 'template_nic07af', form.current, 'io7MteAYkaUykjhIB')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            form.current.reset();
        }
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                <input name="to_name" className="hidden" value={"Amirjon"} type="text" />
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="text-white block mb-2 text-sm font-medium"
                    >
                        {lang.name}
                    </label>
                    <input
                        name="from_name"
                        type="text"
                        id="text"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={lang.namePlac}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="text-white block mb-2 text-sm font-medium"
                    >
                        Your email
                    </label>
                    <input
                        name="from_email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="jacob@google.com"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        {lang.subject}
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={lang.subjectPlac}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        {lang.message}
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={lang.messagePlac}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    {lang.btn}
                </button>
            </form>
        </div>
    )
}

export default FormContact
