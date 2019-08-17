$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/fleet/vehicles/CreateCar.feature");
formatter.feature({
  "name": "Create a Car",
  "description": "  As user I want to be able to create a car",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@create_a_car"
    }
  ]
});
formatter.scenario({
  "name": "Create a regular car (with list of maps)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create_a_car"
    },
    {
      "name": "@create_a_car_with_list_of_maps"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as a \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStepDefinitions.user_navigates_to_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that \"All Cars\" page name is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_name_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create a car button",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_on_the_create_a_car_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters car information to create a car",
  "rows": [
    {
      "cells": [
        "License Plate",
        "Driver",
        "Location",
        "Model Year",
        "Color",
        "Power",
        "Vehicle Make",
        "Vehicle Model"
      ]
    },
    {
      "cells": [
        "Cybertek",
        "Spartan",
        "Alaska",
        "2019",
        "Black",
        "500",
        "BMW",
        "X5M"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_enters_car_information_to_create_a_car(String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save and close",
  "keyword": "Then "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_clicks_save_and_close()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that general information is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "VehiclesStepDefinitions.user_verifies_that_general_information_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});