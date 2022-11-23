import { Tab } from '@headlessui/react';
import React from 'react';

const dashboard = () => {
    return (
      <div className="flex ">
        <Tab.Group>
          <div className="w-1/4">
            <Tab.List className="bg-red-400 flex flex-col">
              <Tab className="hover:bg-white">Tab 1</Tab>
              <Tab className="hover:bg-white">Tab 2</Tab>
              <Tab className="hover:bg-white">Tab 3</Tab>
            </Tab.List>
          </div>
          <div className="flex-1">
            <Tab.Panels className="bg-blue-700">
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    );
};

export default dashboard;