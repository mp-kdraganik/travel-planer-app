import { useEffect, useState } from "react"

export default function Plans() {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        const getData = async function (){
            const response = await fetch('/api/destinations')
            const data = await response.json()
            console.log(data)
            setDestinations(data)
        }

        getData()
    }, [])

    
    return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Twoje plany podróży</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {destinations.map((destination) => (
            <article key={1} className="flex max-w-xl flex-col items-start justify-between">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                    className="w-auto"
                    src={destination.Photos[0].url}
                    alt=""
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{destination["Date start"]}</time> - <time className="text-gray-500">{destination["Date end"]}</time>
                <a
                  href={"/"}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {destination.Country}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={"/"}>
                    <span className="absolute inset-0" />
                    {destination.City}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{destination.Description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}