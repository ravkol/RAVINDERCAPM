using { rksqlite.db as rkolipak } from '../db/datamodel';

@path: '/sap/opu/Odata/SAP/API_SALES_ORDER'
service MySRV {

    entity OrderSet as projection on rkolipak.orders;

}
