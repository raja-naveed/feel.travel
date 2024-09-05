"use client";

import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FC } from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { PathName } from "@/routers/types";
import ClearDataButton from "../ClearDataButton";
import ButtonSubmit from "../ButtonSubmit";

export interface TripLeaderInputProps {
  fieldClassName?: string;
  className?: string;
  buttonSubmitHref?: PathName;
  hasButtonSubmit?: boolean;
}

const TripLeaderInput: FC<TripLeaderInputProps> = ({
  fieldClassName = "[ nc-hero-field-padding ]",
  className = "[ nc-flex-1 ]",
  buttonSubmitHref = "/listing-stay-map",
  hasButtonSubmit = true,
}) => {
  const [tripLeaderIncluded, setTripLeaderIncluded] = useState<boolean | null>(null);

  const handleSelectTripLeader = (include: boolean) => {
  
    setTripLeaderIncluded(include);
  };

  return (
    <Popover className={`flex relative ${className}`}>
      {({ open }) => (
        <>
          <div
            className={`flex-1 z-10 flex items-center focus:outline-none ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            <Popover.Button
              className={`relative z-10 flex-1 flex text-left items-center ${fieldClassName} space-x-3 focus:outline-none`}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <UserGroupIcon className="w-5 h-5 lg:w-7 lg:h-7" />
              </div>
              <div className="flex-grow">
                <span className="block xl:text-lg font-semibold">
                  {tripLeaderIncluded !== null ? (tripLeaderIncluded ? "Yes" : "No") : "Trip Leader"}
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  {tripLeaderIncluded !== null ? "Trip Leader Included" : "Select if you want a trip leader"}
                </span>
              </div>

              {tripLeaderIncluded !== null && open && (
                <ClearDataButton
                  onClick={() => setTripLeaderIncluded(null)}
                />
              )}
            </Popover.Button>

            {/* BUTTON SUBMIT OF FORM */}
            {hasButtonSubmit && (
              <div className="pr-2 xl:pr-4">
                <ButtonSubmit href={buttonSubmitHref} />
              </div>
            )}
          </div>

          {open && (
            <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -left-0.5 right-0.5 bg-white dark:bg-neutral-800"></div>
          )}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <div className="flex flex-col space-y-4">
                <button
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  // onClick={() => handleSelectTripLeader(true)}
                >
                  Yes
                </button>
                <button
                  className="w-full px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                  // onClick={() => handleSelectTripLeader(false)}
                >
                  No
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default TripLeaderInput;
