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

So what I decided to do was to create a Framework class and instantiate it 4 times for the 4 different frameworks. I created a table class to be able to display the frameworks in whatever order desired. It sort of began taking the form of MVC with a runner file acting as the controller, a framework file acting as the model, and a view file acting as the view. At this stage I was content enough with the organization to move forward.

Side note. I was having trouble accessing DOM elements in my js code. Initially I used the window.onload function but was annoyed with having to do so. I figured out that I mistakenly put the script tags in the head of the DOM so the scripts had already run before the DOM was even created. THis has happened to me before so I should have known better. It was a simple fix. I moved the script to the bottom on the body.

6. The View

Displaying and being able to order the data was the next step. This was pretty simple since everything was already set up. I created three prototype functions for the table class (orderTable, createTable, clearTable). The orderTable function was a bit tricky using vanilla JS but not terrible. Now the table header could be clicked to order the data in desc order for that particular property. If clicked again, the order would go asc, and so on.

7. What is Next?

The dashboard consisted of a sortable table with several GitHub statistics for four frameworks. I asked myself, what is this dashborad supposed to deliver? "To choose the winning technology, we need to compare development activity, community support, stability, and any other relevant information." And this is to be achieved by "creating a dashboard that helps us make the right choice based on GitHub activity." To be honest, the sortable table alone did not accomplish this. I needed something else... but what? The true answer is that I would never pick a framework based on GitHub statistics. All of these frameworks have fundamental differences that are beneficial in different ways. It would really depend on the application. That, however, is no excuse. If it did come down to GitHub stats, my dashboard would not cut the cake as is. Time to brainstorm.

This was hard. None of the data from the GitHub api seemed like it would swing me one way or another in choosing a framework. I decided to get the weekly commit count for each framework for the past year. I figured this would at least show work activity trends. The more popular the framework, the more people working on it to make updates. I also though it would be cool to graph something.



