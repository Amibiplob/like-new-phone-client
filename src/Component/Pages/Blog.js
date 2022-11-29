import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";

const Blog = () => {
  return (
    <div className="w-full px-4 py-16 bg-slate-100">
      <div className="mx-auto md:w-3/4 rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Q1 : What are the different ways to manage a state in a React
                  application?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <span className="font-bold">ANS : </span>There are four main
                types of state you need to properly manage in your React apps:
                <br />
                1. Local state -Local state is data we manage in one or another
                components. <br />
                2. Global state - Global state is data we manage across multiple
                components. <br />
                3.Server state - Data that comes from an external server must be
                integrated with our UI state.
                <br />
                4. URL state - Data that exists on our URLs, including the
                pathname and query parameters. <br />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Q2 : How does prototypical inheritance work?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <span className="font-bold">ANS : </span>Javascript's prototype
                inheritance is a feature that allows you to add methods and
                properties to objects. It is a method by which an object can
                inherit the properties and methods of another object.
                Traditionally, in order to get and set the prototype of an
                object, we use Object. Object and getPrototypeOf
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Q3 : What is a unit test? Why should we write unit tests?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <span className="font-bold">ANS : </span>The main objective of
                unit testing is to isolate written code to test and determine if
                it works as intended. Unit testing is an important step in the
                development process because, if done correctly, it can help
                detect early flaws in code that may be more difficult to find in
                later testing stages.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Q4 : React vs. Angular vs. Vue?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <span className="font-bold">ANS : </span>
                <br />
                <span className="font-bold">Angular vs React - </span>
                React often requires extra modules and components, which keeps
                the core library small but means there’s extra work involved
                when incorporating outside tools. Angular, on the other hand, is
                more of a full-fledged solution that doesn’t require extras like
                React often does, though it does have a steeper learning curve
                for its core compared to React. React is more suitable for
                intermediate to advanced JavaScript developers who are familiar
                with concepts from ES6 and up, while Angular favors those same
                developers who are also familiar with TypeScript.
                <br />
                <span className="font-bold"> React vs Vue - </span>
                Vue is generally more suited to smaller, less complex apps and
                is easier to learn from scratch compared to React. Vue can be
                easier to integrate into new or existing projects, and many feel
                its use of HTML templates along with JSX is an advantage.
                Overall, Vue might be the best choice if you’re a newer
                developer and not as familiar with advanced JavaScript concepts,
                while React is quite well suited for experienced programmers and
                developers who have worked with object-oriented JavaScript,
                functional JavaScript, and similar concepts.
                <br />
                <span className="font-bold"> Angular vs Vue - </span>
                A large library like Angular would require more diligence in
                keeping up with what’s new, while Vue would be less demanding in
                this regard, and the fact that the two most recent major
                releases of Vue are in separate repositories helps. It should
                also be noted that Vue was created by a developer who formerly
                worked on Angular for Google, so that’s another thing to keep in
                mind, though that wouldn’t have a huge impact on your decision.
                <br />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Blog;
