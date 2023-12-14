namespace rksqlite.db;
using{ managed} from '@sap/cds/common';

type Integer16 : Integer @edm.type: 'Int16';

entity orders: managed
{
    key orderid : Integer;
    customername : String(120);
    contactperson : String(180);
    grossamount : Decimal(10,2);
    currency : String(4) not null;
}
    