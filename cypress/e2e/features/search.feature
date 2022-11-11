Feature: Search Input
    Background:
        Given Open main page
    Scenario: Search result
        When Type to search box "Printed Summer Dress" 
        And click submit
        Then Display message "3 results have been found."