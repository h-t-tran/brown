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
Ext.define('com.rmc.projects.helloworld.Beer',
{
    // --------------------------------------
    // Super Class
    // --------------------------------------    
    extend: "Ext.util.Observable",

    // --------------------------------------
    // Properties
    // --------------------------------------
    brandName: 'Unknown',
    calories: 0,
    
    // --------------------------------------
    // Constructor
    // --------------------------------------
    constructor: function( config )
    {

        // EVENTS
        this.addEvents ({
            drinked : true
        });
        
        // SUPER
        this.initConfig ( config );
        this.callParent ( arguments );
        
        // VARIABLES
        brandName = arguments[0]; //first item passed in, we'll consider the brandName
        
        // PROPERTIES
        this.calories = 200;
        if (brandName) {
            this.brandName = brandName;
        }
        
        // METHODS
        
        // RETURN
        return this;
    },

    // --------------------------------------
    // Methods
    // --------------------------------------
    drink: function() 
    {
        this.fireEvent ('drinked', " 'Argument String Message' " );
    }
    
});

