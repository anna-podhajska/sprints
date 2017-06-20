Question: What happens to the layout when you resize the screen to less than 550 px. How do you think that works? If you're stuck, discuss with your cohort in Slack.

Answer:
The Skeleton demo page layout when resized to less that 550px behaves responsively and the page adjusts to the new screen size.

First, the the font-size and images are getting smaller. Finally, when the screen size hits the minimum, the some page elements are displayed differently. One-half column element (the image of iPhone), which was positioned in-line with another one-half column element (paragraph) receives new positioning, and instead of being displayed in-line, they are displayed one under another.

At this stage of learning, I am not 100% sure how it works, however by checking the page with developer tools, and after looking at the css, I think that this behavior might be connected with the use of 12-grid system and Media Queries. Media queries are used to apply different display of the page's elements if the screen-sizes hits less than 550px.  
