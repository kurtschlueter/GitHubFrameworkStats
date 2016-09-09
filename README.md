# GitHubFrameworkStats
Comparing GitHub stats for some popular front-end frameworks

The goal of this dashboard is to be able to compare certain GitHub statistics (like total stars, forks, watchers, commits, contributors, etc..) of four top front-end frameworks; Angular.js, Ember.js, React, and Vue. We will want to be able to sort, filter, and compare the data in a way that lends a hand to someone trying to decide between any of these frameworks. Obviously, this won't be the principal decider in picking between the four since they all differ technically. But at least it will give an idea on public interest. Below will be an illustration of my thought process in creating this application.

1. Setup and picking technologies

- My first question is how and with what am I going to build this dashboard. I want to use React because it would be perfect for this application. A view-intensive framework with rendered components would make it easy to sort, filter, or do whatever I want with the data (props). Angular would also make certain things easier like ordering data through scope functions. I will go with using vanilla JavaScript, however. 1. For the practice and 2. Because that's what is preferred by the client.

2. Retrieving Data from API

- My first goal is to build a sortable table with certain data for the four frameworks. Getting the GitHub api data and rendering it to the table is the first step. At this point, I do not care how or what data I get. All of that can be altered/refactored later. I just want to make sure that I can make that request. I use the XMLHttpRequest API. This allows me to get data using a url without doing a page refresh. Sounds exactly like what I need. I use the .open method to to initialize the request and the .send method to send the request. Once I receive the response, I convert it into a JSON object and presto! I have a bunch of data to pick through for each framework.

3. Organizing and Displaying the Data

- I place all of the framework JSON objects into a frameworks array. I pick stars, watchers, and forks to display... along with the name and avatar of the corresponding framework. I for-loop through the number of frameworks in the framework array and append a row to the initialized table in the DOM.

- I do not like this however. It is  just too sloppy. I need to take a step back and figure out how I want to order my data. Also, not all of the data I will want is in these framework JSON objects. I might have to make other api calls to get total commits or contributors. I will have to organize all of this by creating my own objects.

- Side note. At this stage, I am having trouble with the .open method of the HTTP request. If I make it synchronous by setting the async bool to false, I get no problems. When I make it asynchronous, it seems like the response is not received in time to move forward with the parsing. I am sure some listener is triggered when async is completed so that would be something to look into. But for now, I will leave it as is.

4. Gathering Other Data

- So I’m at a fork in the road here. GitHub (at least from my research) does not have a simple way to extract total commits and total contributors data. They do, however, provide a list of all contributors and commits for the default branch. This means that I would have to loop through and create a count myself. Plus these lists are extensive, requiring pagination and countless api calls.

- Well, I am going to do it anyway. I now have the contributor count and contribution count for the default branch for all four frameworks. The next step is to consolidate the data and to refactor and organize the functions.

5. Organizing my Code Before Moving Forward

- My code is sloppy. I have data strewn everywhere, functions being defined and called at random. I’m not upset because I wanted to make sure of the functionality first. Now, I have to organize.

- I create a Framework class and instantiate it 4 times for the 4 different frameworks. I create a table class to be able to display the frameworks in whatever order desired. It is sort of beginning to take the form of MVC with a runner file acting as the controller, a framework file acting as the model, and a view file acting as the view. At this stage I am content enough with the organization to move forward.

- Side note. I was having trouble accessing DOM elements in my js code. Initially I used the window.onload function but was annoyed with having to do so. I figured out that I mistakenly put the script tags in the head of the DOM so the scripts had already run before the DOM was even created. This has happened to me before so I should have known better. It was a simple fix. I moved the script to the bottom on the body.

6. The View

- Displaying and being able to order the data in the table is the next step. This is pretty simple since everything is already set up. I create three prototype functions for the table class (orderTable, createTable, clearTable). The orderTable function is a bit tricky using vanilla JS but not terrible. Now the table header can be clicked to order the data in desc order for that particular property. If clicked again, the order will go asc, and so on.

7. What is Next?

- The dashboard consists of a sortable table with several GitHub statistics for four frameworks. I ask myself, what is this dashboard supposed to deliver? "To choose the winning technology, we need to compare development activity, community support, stability, and any other relevant information." And this is to be achieved by "creating a dashboard that helps us make the right choice based on GitHub activity." To be honest, the sortable table alone will not accomplish this. I need something else... but what? The true answer is that I would never pick a framework based on GitHub statistics. All of these frameworks have fundamental differences that are beneficial in different ways. It would really depend on the application. That, however, is no excuse. If it does come down to GitHub stats, my dashboard will not cut the cake as is. Time to brainstorm.

- This is hard. None of the data from the GitHub api seems like it would swing me one way or another in choosing a framework. I guess I will get the weekly commit count for each framework for the past year. I figure this would at least show work activity trends. The more popular the framework, the more people working on it to make updates (maybe?). I also think it would be cool to graph something.

8. Finishing Touches or More Tools?

- The graph turned out better than expected thanks to Canvas.js. It’s visually pleasing and responsive. You can compare all four frameworks or just a select few by clicking the names in the legend. You can mouse over a specific week to get the exact numbers comparison. Overall, pretty cool.

- So again, I find myself asking what’s next? The few finishing touches on my mind are; styling the dashboard, adding a data refresh button, adding instructions/information on how to read the dashboard, organize my views since I now have the chart, and cleaning up the readme (for my own sake). Maybe I would also want to deploy it to Heroku. I am also interested in adding another tool. But since this is day 7 of when I received the task, I figure I should go forth with the finishing touches and if more time is allotted to me, continue adding tools.

- Side note. This has been a good experience using vanilla Javascript. It makes me really appreciate the value of using a front-end framework. There were so many instances where I would think to myself, “wow, this would be so much easier with Angular or React”. That being said, it is refreshing to know that I do not have to be dependent on them.


