sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/btp/salesordermodule/test/integration/FirstJourney',
		'com/btp/salesordermodule/test/integration/pages/OrderSetList',
		'com/btp/salesordermodule/test/integration/pages/OrderSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderSetList, OrderSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/btp/salesordermodule') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderSetList: OrderSetList,
					onTheOrderSetObjectPage: OrderSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);