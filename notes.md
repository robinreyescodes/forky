### some notes while coding

something new i learned!

- the hashchange event
  - the hash is everything that is after the '#' in a url, also known as fragment in the url.
  - so this happened when a new recipe link was clicked
  - added this into the window's event listener
  - another thing that was new was window.location.hash!
    - this will get the hash in the windows current location

### publisher subscriber method

we want to keep the Model, View and Controller separate.. more notes on that later?

- in order to have event listeners in the views that can be accessed in the controller, you have te publisher subscriber method
  - the event listeners go inside the view, in the class that gets exported
  - then the controller accesses it in the init() function
  - the controller also has the method where it gets the information from the view
