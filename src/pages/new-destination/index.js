import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";

export default function NewDestination() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [date, setDate] = useState({startDate: new Date(), endDate: new Date()});
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/add-destination', {
            method: 'POST',
            body: JSON.stringify({ city, country, description, url, date }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log('Destination added');
            setCity('');
            setCountry('');
            setDescription('');
            setUrl('');
            setDate({startDate: new Date(), endDate: new Date()});
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Twoje plany podróży</h2>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-6 border-t border-gray-200 gap-x-8 gap-y-4 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            type="text"
                            name="city"
                            id="city"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                            type="text"
                            name="country"
                            id="country"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <label for="message" class="block mt-4 mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea onChange={(e) => {setDescription(e.target.value)}} value={description} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 " placeholder="Leave a comment..."></textarea>

            <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Photo
                </label>
                <div className="mt-2">
                    <input
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        type="url"
                        name="photo"
                        id="photo"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <label for="date" class="block mt-4 mb-2 text-sm font-medium text-gray-900">Date</label>
            <Datepicker 
                id="date"
                value={date} 
                onChange={(dateValue) => setDate(dateValue)} 
            />

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
            {success ? <p className='text-green-500'>Succesfully added to the list</p> : "" }
            </div>
        </div>
    </form>
  )
}
