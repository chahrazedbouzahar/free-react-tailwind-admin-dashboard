
import { ServiceRequest } from '../../types/servicerequest';

const serviceRequestData:ServiceRequest [] = [
  {
    serviceRequestId: 1,
    customerId: 1,
    addressId: 1,
    serviceId: 19,
    requirementDesc: 'TBD',
    expectedStartTime: '2022-10-10 11:30:30',
  },
  {
    serviceRequestId: 2,
    customerId: 2,
    addressId: 2,
    serviceId: 8,
    requirementDesc: 'TBD',
    expectedStartTime: '2022-10-10 11:30:30',
  },
  {
    serviceRequestId: 3,
    customerId: 1,
    addressId: 1,
    serviceId: 4,
    requirementDesc: 'TBD',
    expectedStartTime: '2022-10-10 11:30:30',
  },
  {
    serviceRequestId: 4,
    customerId: 3,
    addressId: 3,
    serviceId: 13,
    requirementDesc: 'TBD',
    expectedStartTime: '2022-10-10 11:30:30',
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Service Request ID
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Customer ID
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Address ID
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Service ID
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                Requirement Description
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                Expected Start Time
              </th>
            </tr>
          </thead>
          <tbody>
            {serviceRequestData.map((request, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <p className="font-medium text-black dark:text-white">
                    {request.serviceRequestId}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {request.customerId}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {request.addressId}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {request.serviceId}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {request.requirementDesc}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {request.expectedStartTime}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
