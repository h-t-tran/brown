/**
 * Copyright (C) 2005-2012 by Rivello Multimedia Consulting (RMC).
 * code [at] RivelloMultimediaConsulting [dot] com
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and#or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//Marks the right margin of code *******************************************************************
Ext.application({
    // --------------------------------------
    // Properties
    // --------------------------------------
    name: 'HelloWorldApplication',
    // --------------------------------------
    // Constructor
    // --------------------------------------
    launch: function () {
        //  SETUP CLASS PATHS -
        //      Now any code that references "com.blah.foo" will look
        //      at the physical location "src.com.blah.foo"
        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                com: "src/com"
            }
        });
        this.testSomeUI();
        this.testSomeObjects();
    },
    // --------------------------------------
    // Methods
    // --------------------------------------
    testSomeUI: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                    region: 'north',
                    html: '<h1 class="x-panel-header">Page Title</h1>',
                    autoHeight: true,
                    border: false,
                    margins: '0 0 5 0'
                }, {
                    region: 'west',
                    collapsible: true,
                    title: 'Navigation',
                    width: 150
                }, {
                    region: 'south',
                    title: 'South Panel',
                    collapsible: true,
                    html: 'Information goes here',
                    split: true,
                    height: 100,
                    minHeight: 100
                }, {
                    region: 'east',
                    title: 'East Panel',
                    collapsible: true,
                    split: true,
                    width: 150
                }, {
                    region: 'center',
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [{
                            title: 'Default Tab',
                            html: 'The first tab\'s content. Others may be added dynamically',
                        }
                    ]
                }]
        });
        //Ext.create('Ext.Container', {
        //    renderTo: Ext.getBody(),
        //    items   : [
        //        {
        //            xtype: 'button',
        //            text : 'My Button'
        //        }
        //    ]
        //});
        //Ext.create('Ext.container.Viewport', {
        //    name : "viewPort2",
        //    layout: 'fit',
        //    items: [
        //        {
        //            title: 'My Viewport',
        //            html : 'Hello World!'
        //        }
        //    ]
        //});
    },
    // --------------------------------------
    // Methods
    // --------------------------------------
    testSomeObjects: function () {
        // ****************
        // SUPER CLASS
        // ****************
        console.log("\nSUPER CLASS");
        var myBeer = Ext.create('com.rmc.projects.helloworld.Beer', 'Budweiser');
        myBeer.addListener('drinked', function () {
            var stringArgument = arguments[0];
            console.log(myBeer.brandName + " was drinked! With message" + stringArgument + ".");
        });
        console.log("myBeer.brandName: " + myBeer.brandName);
        myBeer.drink();
        // ****************
        // CHILD CLASS
        // ****************
        console.log("\nCHILD CLASS");
        var myLightBeer = Ext.create('com.rmc.projects.helloworld.LightBeer', 'BudLight');
        myLightBeer.addListener('drinked', function () {
            var stringArgument = arguments[0];
            console.log(myLightBeer.brandName + " was drinked! With message" + stringArgument + ".");
        });
        console.log("myLightBeer.brandName: " + myLightBeer.brandName);
        myLightBeer.drink();
        // ****************
        // MIXIN
        // ****************
        console.log("\nMIXIN");
        //  Because of 'MixinCheers.js' we can call 'cheers()'
        myLightBeer.cheers();
        // ****************
        // OBJECT ORIENTED DEMO
        //
        //	NOTE: This shows some of the concepts above, and more.
        //
        // ****************
        //	CREATE & PASS PARAMETER TO CONSTUCTOR
        console.log("\nOBJECT ORIENTED DEMO");
        var cocktail = Ext.create('com.rmc.projects.helloworld.Cocktail', 'RedBullAndVodka');
        //	TEST PUBLIC PROPERTY
        console.log("cocktail.samplePublicProperty : " + cocktail.samplePublicProperty);
        //	TEST STATIC PROPERTY
        console.log("com.rmc.projects.helloworld.Cocktail.TEST_STATIC_PROPERTY : " + com.rmc.projects.helloworld.Cocktail.TEST_STATIC_PROPERTY);
        //	TEST AUTO-GENERATED GETTER/SETTER
        console.log("cocktail.getCountForFun() : " + cocktail.getCountForFun());
        //	TEST LISTENER
        cocktail.addListener('customEventCalled', function () {
            console.log("cocktail.customEventCalled argument[0] : " + arguments[0]);
        });
        cocktail.customEventCall();
    }
});
//# sourceMappingURL=app.js.map