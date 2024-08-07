
# Posts List Webpage

This Angular application fetches and displays a list of posts from the JSONPlaceholder API. It includes a search bar to filter posts by title, making it easy to find specific entries.

## Features

- Fetches posts from the JSONPlaceholder API
- Displays posts in a list format
- Includes a search bar to filter posts by title

run the code
ng serve
Open http://localhost:4200 in your web browser to view the application.

process
Step-by-Step Process
Install Angular CLI (if not already installed):

Command: npm install -g @angular/cli
Create a New Angular Project:

Command: ng new Accuknox
Follow prompts to configure the new project (e.g., choose Angular routing and stylesheet format).
Navigate to the Project Directory:

Command: cd list-app

generate component if needed or else we can do in app.component.html

Command: ng generate service user
Implement the Service:
Use the service to interact with the API and retrieve the list of posts.


Update the Component:
Configure the component to utilize the service for fetching and displaying posts.
Implement logic for filtering posts based on user input from the search bar.
Modify Component’s HTML:

Update the HTML file to include the search bar and display the list of posts.
Run the Development Server:

Command: ng serve
Open a web browser and navigate to http://localhost:4200 to view the running application.
Build for Production:

Command: ng build --prod
This command prepares the application for deployment by creating optimized build artifacts.
Deploy the Application:

