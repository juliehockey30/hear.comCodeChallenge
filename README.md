# Simulated Reddit Post Dashboard

#### This project was created as part of a coding challenge. It represents a simulated Reddit dashboard.
#### When running, the app allows users to view the post as well as view and delete comments


Note - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To start the app locally, simply clone this repo and run the following command:

### `yarn start` or `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Note - you may need to first run `yarn` or `npm install` to ensure all the necessary dependencies are installed.

## Notes/Known Bugs from Julie

#### Points
From the data response we get from the backend, I chose to only display the "ups" for points. I wondered if this was an accurate representation of the data or if I should subtract or add the "downs" as well.

#### Dates on Comments
The mock shows all of the timestamp differences in hours, however, aI chose to represent them in months

#### Threaded Comments UI/UX
I choose to add bottom border to the comments even though it wasn't in the mock. I thought this may help a user visually see which comments are linked to each other

## Future Proposed Work

#### Loading State
Currently, when the data is being retrieved from the backend, there is simply some text that says "Loading data". I would like to improve/prettify this display.

#### Indication Of Deleted Comments

In the future, I'd like to let the user know when one of the "threaded" comments is in response to a comment that has since been deleted.
