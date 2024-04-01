import { useState } from 'react';

const ProvidersTable = () => {
  const [providersData, setProvidersData] = useState([
    {
      id: 1,
      first_name: 'Noureddine',
      last_name: 'Amraoui',
      email: 'noureddine.amraoui@univ-msila.dz',
      mobile_number: '673362658',
      is_individual: true,
      is_registered_office: false,
      office_address: '',
      zip: '28000',
      description: '',
      isApproved: false,
    },
    {
      id: 2,
      first_name: 'Mohamed',
      last_name: 'Baza',
      email: 'mohamed.baza',
      mobile_number: '123',
      is_individual: true,
      is_registered_office: false,
      office_address: '',
      zip: '28000',
      description: '',
      isApproved: false,
    },
    {
      id: 3,
      first_name: 'Chahrazad',
      last_name: 'Bouzahar',
      email: 'chahrazad.bouzahar',
      mobile_number: '456',
      is_individual: true,
      is_registered_office: false,
      office_address: '',
      zip: '28000',
      description: '',
      isApproved: false,
    },
    
  ]);

  const handleApprovalChange = (id: number) => {
    setProvidersData((prevProviders) =>
      prevProviders.map((provider) =>
        provider.id === id ? { ...provider, isApproved: !provider.isApproved } : provider
      )
    );
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 overflow-x-auto">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Providers
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-12 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-3 col-span-1">
            <h5 className="text-sm font-medium uppercase xsm:text-base">ID</h5>
          </div>
          <div className="p-3 col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">First Name</h5>
          </div>
          <div className="p-3 col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Last Name</h5>
          </div>
          <div className="p-3 col-span-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
          </div>
          <div className="p-3 col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Mobile Number</h5>
          </div>
          <div className="p-3 col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
          </div>
        </div>

        {providersData.map((provider) => (
          <div
            key={provider.id}
            className="grid grid-cols-12 border-b border-stroke dark:border-strokedark"
          >
            <div className="p-3 col-span-1">
              <p className="text-black dark:text-white">{provider.id}</p>
            </div>
            <div className="p-3 col-span-2">
              <p className="text-black dark:text-white">{provider.first_name}</p>
            </div>
            <div className="p-3 col-span-2">
              <p className="text-black dark:text-white">{provider.last_name}</p>
            </div>
            <div className="p-3 col-span-3">
              <p className="text-black dark:text-white">{provider.email}</p>
            </div>
            <div className="p-3 col-span-2">
              <p className="text-black dark:text-white">{provider.mobile_number}</p>
            </div>
            
            <div className="p-3 col-span-2 flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                checked={provider.isApproved}
                onChange={() => handleApprovalChange(provider.id)}
              />
              <button className="text-green-500 dark:text-green-300 hover:underline">
                Approve
              </button>
              <button className="text-red-500 dark:text-red-300 hover:underline">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvidersTable;
