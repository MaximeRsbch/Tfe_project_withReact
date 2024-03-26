function Contact() {
    return (
        <div className="mx-auto container">
            <div className="flex justify-center">
                <div className="mt-8 lg:w-1/2 lg:mx-6">
                    <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                        <h1 className="text-xl font-medium text-gray-700">
                            Formulaire de contact
                        </h1>

                        <p className="mt-1 text-gray-500">
                            Vous pouvez nous contacter en remplissant le
                            formulaire ci-dessous.
                        </p>

                        <form className="mt-4">
                            <div className="flex-1">
                                <label className="block mb-2 text-sm text-gray-600">
                                    Titre de votre demande
                                </label>
                                <input
                                    v-model="title"
                                    type="text"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                            </div>

                            <div className="w-full mt-6">
                                <label className="block mb-2 text-sm text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    type="text"
                                    v-model="description"
                                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#344d59] rounded-md hover:bg-[#344d59] focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                Envoyer votre demande
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
