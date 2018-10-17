# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Due Date |Deliverable | Status
|---|---| ---| ---|
|Day 1| Oct 15 | Project Description | Complete
|Day 2| Oct 16 | Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Oct 17 | Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Oct 18 | Pseudocode / actual code | Incomplete
|Day 5| Oct 19 | Initial Clickable Model  | Incomplete
|Day 6| Oct 21 | MVP | Incomplete
|Day 7| Oct 22 | Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Meet Me Halfway is a mobile app that allows users to easily find places of interest that are Halfway between you and your friend by entering two starting locations and selecting the type of place you are interested in meeting at, whether it is a restarant, bar, coffeeshop, etc. 

https://developers.google.com/maps/documentation/

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[Wireframe picture](https://res.cloudinary.com/dvjtpejbw/image/upload/v1539635929/20181015_141834.jpg "Wireframe")



## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[Priority Matrix](https://res.cloudinary.com/dvjtpejbw/image/upload/v1539635946/20181015_141846.jpg "Priority Matrix")


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Enter in 2 starting locations
- Render List View of results
- Render Map View of results

#### PostMVP 

- Filter by type of place
- Accept more than 2 starting locations
- Suprise meetup location
- Simultaneously use on multiple devices

## React Architectural Design

Define the the React components and the architectural design of your app.

[React Architectural Design](https://res.cloudinary.com/dvjtpejbw/image/upload/v1539635976/20181015_160832.jpg "React Architectural Design")

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will render the UI | 
| StartLocations | This will render the landing page that accepts the starting location input and handle data entry | 
| ResultList | This will render the results list | 
| ResultItem | This will render each result on the the result list/map |
| Map | This will render the map view of the results | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 3hrs |  |  |
| StartLocations | H | 4hrs|  |  |
| ResultList | H | 4hrs|  |  |
| ResultItem | H | 5hrs|  |  |
| Map | H | 4hrs |  |  |
| Filter by Type of Place | L | 3hrs |  |  |
| Suprise Meetup Location | L | 2hrs |  |  |
| Accept more than 2 startking locations | L | 3hrs |  |  |
| Simultaneously use on multiple phones | L | ∞hrs |  |  |
| Total | H | 31hrs|  |  |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
