
Feature: Product autopract
    Background:
        Given Open product autopract
        When Close modal letter

    Scenario: Open shop page
        When Open section "no sidebar" in shop header
        Then Page have header "fashion"
       
    @focus
    Scenario Outline: Open main page dress
        And Open section "no sidebar" in shop header
        And Page have header "fashion"