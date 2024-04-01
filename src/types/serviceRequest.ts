export interface ServiceRequest {
    serviceRequestId: number;
    customerId: number;
    addressId: number;
    serviceId: number;
    requirementDesc: string;
    expectedStartTime: string;
}
