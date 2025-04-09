
This is a small fullstack project for practice.

## To start the project:

Go to the backend directory and run:

### `npm install`

Installing the packages.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:4000/api/campaigns](http://localhost:4000/api/campaigns) to view it in your browser.


For the frontend, go to the frontend directory and run:

### `npm install`

Installing the packages.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

There is a local npm package in the shared folder that has to be linked to fronend and backend. To do this, go to the shared directory and run:

### `npm link`

and then in BOTH the backend and frontend directory run 

### `npm link @campaigns/shared-types`

Then it's good to go.

---

## How the webapp works:

You can create a new campaign with the form and when submitting it creates a new campaign in the campaign-section. There you can also delete it again.
It runs on a local REST-Api as for now. The page is also responsive. Main tech used is TypeScript, Vite, React, Express, Node, MaterialUI. There is also a locally created NPM package in the shared folder, which can be linked to the backend and frontend with npm link.

To do:
- Add modal when you click on a campaign to get more info.
- Set up backend on a server.
- Better accessability.
