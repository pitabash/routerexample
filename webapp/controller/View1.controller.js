sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("routerexample.controller.View1", {
			onInit: function () {
                
                },
                livChange : function(oEvent){
                    var x = oEvent.getParameters().value;
                    alert("You Entered : " + x);
            }
		});
	});
