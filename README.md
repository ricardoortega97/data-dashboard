# Web Development Project 5 - *Stock Data Dashboard v2*

Submitted by: **Ricardo Ortega-Pacheco**

This web app: **Data Dashboard that displays current active stocks in the market using Polygon.io API as the request. There are three APIs that are being used in this project: Aggregates, Tickers, Tickers Details v3. When clicking on a Ticker item, it will route the user to the Ticker details with a chart that uses Recharts.**

Time spent: **16** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [ ] *insert details*
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

New Functions

- [x] **The app includes at least one unique chart developed using the fetched data that tell an interesting story**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**
- [x] To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording. 

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types such as a text input, a selection, or a slider
- [x] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] Implemented an Authorization header to request the image logo. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/onc3anN.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
<img src='https://imgur.com/j1w6qOG.gif' title='Video Walkthrough 2' width='' alt='Video Walkthrough 2' />
<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux.
https://imgur.com/Xo233jv
-->

## Notes

- Setting the api data to display in a table list while moving the information to a component.
- Trying to understand how the API calls and the reference as each JSON is different than others. 
- Limited by 5 API calls a minute made it hard to understand how the API calls work as the beginning, the function was calling it multiple times. 
- Finding an API to use for the project as the first one was to do a Salary API from the BLS.
- Using three different API data endpoints as each were unique on the JSON that was being provided. 


## License

    Copyright [2024] [Ricardo Ortega-Pacheco]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.