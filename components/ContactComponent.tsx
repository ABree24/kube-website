
export default function ContactComponent() {
    return (
        <div className="bg-white py-24 sm:py-32 mt-8">
          <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-2">
            <div className="max-w-2xl flex items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in touch
              </h2>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600 w-[15em] sm:w-auto lg:w-[25em]">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p> */}
            </div>
            <div className="flex flex-col justify-between sm:flex-row">
                <div className="flex flex-col h-[10em] w-[15em] bg-blue-50 rounded-lg p-6 text-left lg:w-[35em]">
                    <p className="font-semibold">Looking for land?</p>
                    <p className="mt-2 text-primary font-semibold">sales@krek.ke</p>
                    <p className="mt-2 text-gray-600">+254 712 345 678</p>
                </div>
                <div className="flex flex-col h-[10em] w-[15em] bg-blue-50 rounded-lg p-6 text-left mt-4 sm:ml-4 sm:mt-0 lg:w-[35em]">
                    <p className="font-semibold">Need Survey Services?</p>
                    <p className="mt-2 text-primary font-semibold">sales@krek.ke</p>
                    <p className="mt-2 text-gray-600">+254 712 345 678</p>
                </div>
            </div>
          </div>
        </div>
    )
}