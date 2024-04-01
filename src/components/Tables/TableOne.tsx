import React, { useState, useEffect } from 'react';
import { category } from '../../types/category';

const CategoriesTable = () => {
  const [servicesData, setServicesData] = useState<category[]>([
    {
      id: 1,
      name: 'Service One',
      category: 'Category One',
    },
    {
      id: 2,
      name: 'Service Two',
      category: 'Category Two',
    },
    
  ]);

  const [editMode, setEditMode] = useState<category | null>(null);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceCategory, setNewServiceCategory] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (editMode) {
        setServicesData((prevServices) =>
          prevServices.map((service) =>
            service.id === editMode.id ? editMode : service
          )
        );
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [editMode]);

  const handleEditService = (service: category) => {
    setEditMode(service);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  const handleSaveEdit = (editedService: category) => {
    setServicesData((prevServices) =>
      prevServices.map((service) =>
        service.id === editedService.id ? editedService : service
      )
    );
    setEditMode(null);
  };

  const handleDeleteService = (serviceId: number) => {
    setServicesData((prevServices) =>
      prevServices.filter((service) => service.id !== serviceId)
    );
  };

  const handleAddService = () => {
    const newService: category = {
      id: Math.max(...servicesData.map((service) => service.id)) + 1,
      name: newServiceName,
      category: newServiceCategory,
    };
    setServicesData((prevServices) => [...prevServices, newService]);
    setNewServiceName('');
    setNewServiceCategory('');
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
       Categories
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ID
            </h5>
          </div>
          <div className="p-2.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
          <div className="p-2.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        {servicesData.map((service, index) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-4 ${
              index === servicesData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={service.id}
          >
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{service.id}</p>
            </div>
            <div className="flex items-center p-2.5">
              {editMode && editMode.id === service.id ? (
                <input
                  type="text"
                  value={editMode.name}
                  onChange={(e) => {
                    const newName = e.target.value;
                    setEditMode((prevService) => ({
                      ...prevService!,
                      name: newName,
                    }));
                  }}
                />
              ) : (
                <p className="text-black dark:text-white">{service.name}</p>
              )}
            </div>
            <div className="flex items-center p-2.5">
              {editMode && editMode.id === service.id ? (
                <input
                  type="text"
                  value={editMode.category}
                  onChange={(e) => {
                    const newCategory = e.target.value;
                    setEditMode((prevService) => ({
                      ...prevService!,
                      category: newCategory,
                    }));
                  }}
                />
              ) : (
                <p className="text-black dark:text-white">{service.category}</p>
              )}
            </div>
            <div className="flex items-center p-2.5">
              {editMode && editMode.id === service.id ? (
                <>
                  <button
                    className="text-green-500 dark:text-green-300 hover:underline mr-2"
                    onClick={() => handleSaveEdit(editMode)}
                  >
                    Save
                  </button>
                  <button
                    className="text-red-500 dark:text-red-300 hover:underline"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="text-blue-500 dark:text-blue-300 hover:underline mr-2"
                    onClick={() => handleEditService(service)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 dark:text-red-300 hover:underline"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleAddService}
          >
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTable;
