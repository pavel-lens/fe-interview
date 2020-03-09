# Frontend coding challenge

You'll be building a simple component: an avatar picker. It looks like this:

![Pick an avatar](avatar_picker.gif "Pick me!")

The user clicks on the avatar to open a popover which allows the user to choose another avatar from the list. After a click a HTTP request is made, the popover closes and the new avatar will appear in the inital view.

## Design and behaviour:

* The initially shown avatar is the first in the received list of avatars
* The initial avatar which opens the popover has a border of 1px on hover and active state
* The avatar icons are shown in groups of 4, aligned left (with 6 icons it will exactly look like it does in the gif)
* The popover opens with a scaling animation that overbounces a bit
* The currently chosen avatar has a blue border of 3px
* The avatar list icons have grey border and are overlaid by a blue colored area with an opacity of 20% on hover
* The loading spinner should look like shown above. It is also blue.
* The popover fades out with a scaling animation (no overbounce)
* A click outside the popover area will result in the popover closing
* While setting the selected avatar a spinner is shown on the selected avatar
* The popover is closed when an avatar is chosen

## Colors and measurements (we won't count exact pixels):

* Avatar image
  * height: 60px, width: 60px, perfect circles
  * border for initial image: hover, focus 1px, color: rgb(155, 160, 163)
  * avatar list images:
    * border on hover: 3px border, color rgb(155, 160, 163);
    * overlay on hover: color rgb(122, 161, 178), opacity: 20%
    * border spinner, currently active avatar: color: rgb(122, 161, 178)
    * margin between two avatars: 14px
* Popover
  * width: 280px
  * height: variable
  * rounded corners of 2px radius
  * background: rgb(44, 48, 51)
  * drop shadow: color: rgb(102, 102, 102), size 2px, blur 10px
  * padding: 14px
  * triangle: equilateral, 8px each side
* "Choose your avatar" title
  * font: 'Source Sans Pro' (use the google font)
  * color: rgb(249, 249, 249)
  * size: 16px
  * margin top and bottom: 14px

## Instructions:

Create a reusable component using the framework of your choice (Vue, React, Angular). 
The component should have only two properties: the list of available avatars (avatars) and accept a callback on select (onSelect). 
This list contains the avatar image (`src`), the avatar `label`, a unique avatar `id` and a boolean for the `selected` state. 
The number of avatars can vary (up to 12). 

The repository contains a simple API for receiving and updating the avatars.

* Requested browser compatibility: last 2 versions of Chrome, FF, Safari
* You may split up the main component in as many sub-components as you see fit
* Think of it as a component that will end up in a large, scalable app. Consider this when writing HTML and CSS as well.
* You're free to use as many third party JS libraries that you see fit
* You're NOT allowed to use any third party CSS libraries
* You're free to use any build tools that you like (including CSS pre/post-processors).
* Use proper semantics when writing HTML

### Optional extras

* A suite of unit tests written for this component using your favourite testing toolchain
* Keyboard accessible component
* IE11 support
* Any other improvement you can think of

## API documentation

#### Install
Install all dependencies:  
`npm install`

Serve the application:  
`node app.js`
 
#### Get avatars
Type: GET  
Path: `/avatars`

Returns an Array of Objects with all available avatars.

#### Set avatar
Type: POST  
Path: `/avatars`  
Example request body: `{"avatarId": 3}`
Required header: `Content-Type: application/json`

Returns the updated Array of Objects with all available avatars.

## Evaluation criteria (in order of importance)

* Code organization
* Code style/readability (including comments)
* Completeness
* Optional extras

## Time

Total time: ~2.5 hours (excluding lunch break from 12 to 1pm).  
Please be ready to present the outcome at 2.30pm. 
