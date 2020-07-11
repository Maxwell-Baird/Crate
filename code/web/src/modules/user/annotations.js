// overview: user will be able to navigate to their profile overview
// inside of their profile view they will be see a button that says "edit profile"
// when the user clicks on this button they will be taken to a new page (edit profile form / component)
// with components strictly for editing and updating global state about the user

// components needed:
// edit profile button - button displayed on profile
// user image - section containing image tag  <img>
// user description - P tag displayed on profile
// dates available - P tag displayed on profile
// product history - P tag displayed on profile
// shipping and email address - P tag displayed on profile
// upcoming deliveries - P tag displayed on profile

// controlled form component to edit all of the above components - navigated to using edit profle button
// for cohesiveness, stick to the same level and organization of styling used prior (components for H1s, ptags, etc)


// edit profile button component:
// button that says "edit profile"
// routes to editprofile url
// displays all of the above components

// user description component:
// uneditable p tag showing current description

// dates available component:
// uneditable p tag showing dates available
// displays when the user is generally available for their packages

// product history:
// uneditable p-tags showing product history
// consider an array of objects with key value pairs of item ordered, item kept, date ordered, date delivered, etc.

// upcoming deliveries component:
// uneditable p-tags showing their upcoming deliveries for packages they have ordered
// section that holds all upcoming deliveries
// consider storing data as an array of objects and mapping through data to display

// user image component:
// contains a image tag with current image

// shipping and email address component:
// uneditable p-tags showing their primary email address and shipping address

// editProfile.js component
// editable versions of every above component with text fields to edit




// revised annotations 7/7/2020

// uneditable profile additions will be added directly into the "profile.js" file
// this will include:
  // shipping and email address
  // description
  // image
  // product history (whats been kept and what hasn't been kept)
  // upcoming deliveries
  // availability (dates available and times available)
// will also be adding a button to profile.js to edit the profile, which will navigate
// to a route to edit that user's profile

// EditProfile.js will live in the "pages" folder and will be rendered via a route
// EditProfile.js will have text areas to edit the above information
// and will also have a button to save all of that information and navigate back to the
// user's profile page.
