sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.btp.salesordermodule',
            componentId: 'OrderSetList',
            contextPath: '/OrderSet'
        },
        CustomPageDefinitions
    );
});