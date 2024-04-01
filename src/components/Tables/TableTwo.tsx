import { Service } from '../../types/service';


const serviceCategoryMap: { [key: number]: string } = {
  1: 'Category 1',
  
};

const serviceData: Service[] = [
  {
    id: 1,
    name: 'Babysitting',
    service_category_id: 1,
  },
  {
    id: 2,
    name: 'Carpenter',
    service_category_id: 1,
  },
 
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
         Services
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">ID</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Service Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Service Category ID</p>
        </div>
        
      </div>

      {serviceData.map((service) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={service.id}
        >
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{service.id}</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">{service.name}</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
           
            <p className="text-sm text-black dark:text-white">
              {serviceCategoryMap[service.service_category_id]}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{service.service_category_id}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
