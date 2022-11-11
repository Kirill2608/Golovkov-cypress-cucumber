Feature: Authorization error
    Background:
        Given Open product
        And Select authorization in the header
    Scenario: Error alert Authentication
        And Log in form with email "test@gmail.com", pass "qwerty" and click on the login button
        Then The error message "Authentication failed." is displayed