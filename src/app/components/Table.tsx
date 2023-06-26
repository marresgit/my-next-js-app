export default function Form() {
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm-px-10">
                <form className="mb-0 space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="hero" className="block text-sm font-medium text-gray-700">
                            Hero name
                        </label>
                        <div className="mt-1">
                            <input id="hero" name="hero" type="hero" autoComplete="hero" required className="text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"/>
                        </div>

                        <div className="mt-5">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
