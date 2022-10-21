# PUBG Stats

## Project Objectives

1. Design a simple web app that consumes a third party API.
2. Consumes API data
3. Preforms CRUD with that data
4. Engaging Interesting User Experience
5. Engaging Interesting User Interface

## Goal:
Create a SPA that functions like a news feed. Players on a predefiend list will have their match history rendered in a news feed. This list will be displayed as cards

### Preparation:
1. Refresh react development principles including;
    1. react-router-dom
    2. material-ui
    3. axios
    4. express

### Build:
1. Begin development of main app
    1. Build cards to display data
        ### Card Features
        1. :white_check_mark: Player name 
        2. :white_check_mark: Last game placement 
        3. :white_check_mark: Match duration 
        4. :white_check_mark: Damage 
        5. Teammates names and damage
            1. Would be nice to have their damage / ADR for current season expressed as a preformance %
        6. :white_check_mark: Map displayed as background with low opacity 
        7. :white_check_mark: Map name 
    2. :white_check_mark:  Build side bar 
    3. Build a form to intake new players to the "followed players list"
        1. :white_check_mark: Add state to favorites
        2. Connect new state to back end
            1. Check if player is alrady in db/static data
            2. if player not in db or static db get playerId from PUBG API
        3. Make playerCard update based on current state of Favorites list

### Stretch Goals:
    1. Stretch goals:
        1. Login
        2. User profiles
            1. Followed players per user profile
        