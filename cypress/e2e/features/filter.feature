Feature: Filter category autopract
    Background:
        Given Open product autopract.com
        When Close modal window letter

    Scenario: Open products bags
        When Open shop section "left sidebar" in header
        Then Pages have header "fashion"
        When Open section "bags" in filter category
        Then Page open