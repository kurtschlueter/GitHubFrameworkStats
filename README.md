# GitHubFrameworkStats
Comparing GitHub stats for some popular front-end frameworks

The goal of this dashboard is to be able to compare certain GitHub statistics (like total stars, forks, watchers, commits, contributers, etc..) of four top front-end frameworks; Angular.js, Ember.js, React, and Vue. We will want to be able to sort, filter, and compare the data in a way that lends a hand to someone trying to decide between any of these frameworks. Obviously, this won't be the principal decider in picking between the four since they all differ technically. But at least it will give an idea on public interest. Below will be an illustration of my process creating this application.

1. Setup and picking technologies

My first question was how and with what was I going to build this dashboard. Originally I was going to use React because it would be perfect for this dashboard. A view-intensive framework with rendered components would make it easy to sort, filter, or do whatever I wanted with the data (props). Angular would also make certain things easier like ordering data through scope functions. I decided to go with vanilla JavaScript for the practice and also becuase that's what was prefferred by the client.

2. Retrieving Data from API

My first goal was to get the GitHub api data and render it to a table in the DOM. I didn't care how. I didn't care what data. All of that could be altered/refactored later. I just wanted to make sure I could make that request. I did this using the XMLHttpRequest API. This would allow me to get data using a url without doing a page refresh. Sounds exactly like what I needed. I used the .open method to to initialize the request and the .send method to send the request. Once I recieved the response, I turned it into a JSON object and presto! I had a bunch of data to pick through for each framework.

3. Organizing and Displaying the Data

I placed all of the framework JSON objects into a frameworks array. I picked stars, watchers, and forks to display... along with the name and avatar of the corresponding framework. I for-looped through the number of frameworks in the framework array and appended a row to the initialized table in the DOM. I did not like this. It was sloppy. I needed to take a step back and figure out how I wanted to order my data. Also, not all of the data I wanted was in these framework JSON objects. I might have to make other api calls to get total commits or contributers. I would have to organize all of this by creating my own objects.

Side note. At this stage, I was having trouble with the .open method of the HTTP request. If I made it synchronus by setting the async bool to false, I got no problems. When I made it asynchronus, it seemed like the response was not received in time to move forward with the parsing. I am sure some listner is triggered when async is completed so that would be something to look into.

4. Gathering Other Data

So I ran into a fork in the road here. GitHub (at least from my research) has no simple way to extract total commits and total contributers data. They do, however, provide a list of all contributers and commits for the default branch. This would mean that I would have to loop through and create a count myself. Plus these lists were extensive, requiring pagination and countless api calls. Well, I decided to do it anyway. I got the contributor count and contribution count for the default branch for all four frameworks. The next step was to consolidate the data and to refactor and organize the functions.

5. Organizing my Code Before Moving Forward

So what I decided to do was to create a Framework class and instantiate it 4 times for the 4 different frameworks.