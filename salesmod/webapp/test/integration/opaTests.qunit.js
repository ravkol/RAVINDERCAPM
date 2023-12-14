sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/wipro/salesmod/test/integration/FirstJourney',
		'com/wipro/salesmod/test/integration/pages/OrderSetList',
		'com/wipro/salesmod/test/integration/pages/OrderSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderSetList, OrderSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/wipro/salesmod') + '/index.html'
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