$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user I want a login page so that only authentic users\r\ncan login.",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Authentic users will be able to login",
  "description": "",
  "id": "login;authentic-users-will-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@automated"
    },
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@prod"
    },
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "a user with valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user goes to TechFios Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "TechFios Login Page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter login information",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Submit button should be enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user selects the Submit Button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Dashboard Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.a_user_with_valid_credentials()"
});
formatter.result({
  "duration": 136157961,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_goes_to_TechFios_Login_Page()"
});
formatter.result({
  "duration": 4540801330,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.techfios_Login_Page_should_display()"
});
formatter.result({
  "duration": 54700075,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_login_information()"
});
formatter.result({
  "duration": 273368002,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.submit_button_should_be_enabled()"
});
formatter.result({
  "duration": 32317601,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_selects_the_Submit_Button()"
});
formatter.result({
  "duration": 2194458808,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.dashboard_Page_should_display()"
});
formatter.result({
  "duration": 772108789,
  "status": "passed"
});
});