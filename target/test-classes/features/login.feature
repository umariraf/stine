Feature: Login
	As a user I want a login page so that only authentic users
	can login.
	
	@automated
	@smoke
	@prod
	@login
	Scenario: Authentic users will be able to login
	Given a user with valid credentials
	When user goes to TechFios Login Page
	Then TechFios Login Page should display
	When user enter login information
	Then Submit button should be enabled 
	When user selects the Submit Button
	Then Dashboard Page should display

#	@automated
#	@smoke
#	@login
#	Scenario: User should not be able to create a new account
#	Given a user with valid credentials
#	When user goes to TechFios Login Page
#	Then TechFios Login Page should display
#	When user enter login information
#	Then Submit button should be enabled 
#	When user selects the Submit Button
#	Then Dashboard Page should display
#
#	Given an internal user
#	When user navigates to Bank&Cash Module -> Add New Account Page
#	Then Add Account page should display
#	When user creates a new account
#	Then success message should display
#	And New account information should display in the table
#	
#	Given an internal user
#	When user navigates to Add Deposite -> Add New Account Page
#	Then Add Account page should display
#	When user creates a new account
#	Then success message should display
#	And New account information should display in the table