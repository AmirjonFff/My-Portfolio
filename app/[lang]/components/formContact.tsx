"use client";
import toast from 'react-hot-toast';

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
                    toast.success("Сообшения успешно отправлено")
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                    toast.error("Ошибка при отправлении сообшения")
                });

            form.current.reset();
        }

    };

    return (
        <div className='relative z-10'>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 md:gap-3 lg:gap-6">
                <input name="to_name" className="hidden" value={"Amirjon"} type="text" />
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        {lang.name}
                    </label>
                    <input
                        name="from_name"
                        type="text"
                        id="text"
                        required
                        className="bg-[#100e2b] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={lang.namePlac}
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        {lang.email}
                    </label>
                    <input
                        name="from_email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#100e2b] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="jacob@google.com"
                    />
                </div>
                <div>
                    <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        {lang.subject}
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="bg-[#100e2b] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={lang.subjectPlac}
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        {lang.message}
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="bg-[#100e2b] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder={lang.messagePlac}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-br from-[#00FFFF] to-[#87CEEB] text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    {lang.btn}
                </button>
            </form>
        </div>
    )
}

export default FormContact
