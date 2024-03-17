import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

type Bedrooms = {
  name: string;
  value: string;
  id: any;
}

type BedroomsDropDownProps = {
  setBedrooms?: (bedrooms: object) => void;
  bedrooms?: Bedrooms;
  places: Array<{
    [x: string]: any, name: string; value: string, id: any 
}>;
}

export default function BedroomsDropDown({ setBedrooms, bedrooms, places }: BedroomsDropDownProps) {
  const [selected,] = useState(bedrooms)

  return (
    <Listbox value={selected} onChange={(e) => setBedrooms(e)}>
      {({ open }) => (
        <>
          <div className="relative mt-1 w-full lg:w-48">
            <Listbox.Button className="relative w-full h-12 cursor-default rounded-md bg-white pl-2 pr-4 text-left focus:outline-none sm:text-sm lg:pr-10 lg:pl-1 lg:h-full">
              <span className="flex items-start lg:items-center">
                <span className="block truncate text-lg lg:ml-3">{bedrooms?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {places.map((place) => (
                  <Listbox.Option
                    key={place.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-lg'
                      )
                    }
                    value={place}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {place.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
