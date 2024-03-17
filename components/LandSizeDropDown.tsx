import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

type LandSize = {
  name: string;
  value: string;
  id: any;
}

type LandSizeDropDownProps = {
  setLandSize?: (land: object) => void;
  landSize?: LandSize;
  landSizes: Array<{
    [x: string]: any, name: string; value: string, id: any 
}>;
}

export default function LandSizeDropDown({ setLandSize, landSizes, landSize }: LandSizeDropDownProps) {
  const [selected,] = useState(landSize)

  return (
    <Listbox value={selected} onChange={(e) => setLandSize(e)}>
      {({ open }) => (
        <>
          <div className="relative mt-1 w-48">
            <Listbox.Button className="relative w-full h-full cursor-default rounded-md bg-white pl-3 pr-10 text-left focus:outline-none sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate text-lg">{landSize?.name}</span>
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
                {landSizes.map((land) => (
                  <Listbox.Option
                    key={land.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-lg'
                      )
                    }
                    value={land}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {land.name}
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
