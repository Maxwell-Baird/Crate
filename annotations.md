##Annotations
Make a list of the specific files of code that will need to be updated in order to add the additional features outlined in your track
For each file, walk through the code and add a comment above each line/block that describes what that code is doing.

###Improving UX and Community
As a user, it’s frustrating to go to my profile page and see little about myself other than my subscriptions. To give the user more control, I’d love to upload my own image, set a personal description, edit my email address and shipping address, and see a history of products that have been delivered to me and what I have kept. I should also see when my next delivery is coming and adjust the date for when I am available.

###Extensions:
* As a trendsetter who values fashion, I would also like to be able to share this as a public URL (don’t have to have an account or be signed in) so that users can see my subscriptions and items that I have chosen to purchase as well. This page should include my profile picture, but keep info including my email address/shipping address, order history, and delivery times private. 
* I would specifically like to use Twitter to tweet which clothes have been purchased (actually integrate it with the Twitter API). 


###Functionality Changes
- User Profile Page
- User DB Table
- Delivery/Order Status through Crate ship date time

###Files To Be Changed
* code/src/modules/user/model.js
* code/src/modules/user/query.js
* code/src/modules/crate/model.js
