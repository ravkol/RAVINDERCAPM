using { rksqlite.db as rkolipak } from '../db/datamodel';

@path: '/sap/opu/Odata/SAP/API_SALES_ORDER'
service MySRV @(require: 'authenticated-user'){

    entity OrderSet @(restrict: [

        {
             grant: ['*'],
             to : 'SalesAdmin'

        },

        {
             grant: ['READ'],
             to : 'SalesViewer'

        }

    ])
        
    as projection on rkolipak.orders;

}
