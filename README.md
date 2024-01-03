# 🕺🏿 NextEvent- Event Recommendation App

NextEvent is an application that uses personalized data from Spotify to recommend nearby events to users. The frontend was handled by React and Tailwind while Supabase handled the backend and authentication. This app works both on large screens and mobile devices.

## 🚀 Features

- 🗝 Sign in with Google and Github (OAuth 2.0 authentication)
- 🧑🏿 View your own profile, email, name, id, etc.
- ♥  Add a favorite event.
- 🎫 Book tickets to an event.
- 📈 View trending events in your area.
- 🔍 Search for events worldwide



### 🛠 Main Technologies
- `React`
- `Tailwind`
- `JavaScript`
- `Jest`
- `Supabase`

### 📝 Process

- I began by listing down what features the application would have.
- Secondly, using Figma, I came up with the design for the landing page.
- Then I moved on to looking for a suitable API that I could use to help me get details about events. I landed on the Discovery API that uses data from sources such as TicketMaster to come up with events. You can check 
  out the documentation [here](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)
- Next, I set up the backend which involved creating a project in Supabase and creating relevant tables that would be used for this small project.
- Then I focused on the other remaining smaller details such as developing the other relevant pages that would be used. Setting up tests to see if the application worked as expected and also setting up Oauth sign-in to assist with authentication of users.
- The most challenging part was trying to find an API that fits perfectly for this project. Most of the available APIs focused on the US and Western Europe markets and hence were not suitable for this project. In the future, instead of using the Discovery API, I will try to come up with some fake data to help finalize some of the remaining functionalities.

### 🤔 How can It be Improved

- It would be amazing if the first screen that the users encounter is a page that allows users to choose their best musicians and genres that will help in displaying only events that are related to their preferred choices.
- Although I added some tests, the application has still not yet been tested thoroughly and I plan to do this in the future.
- The application is supposed to send a notification to users about upcoming events. I intend to read more on how this can be done and then implement it.

### 🐛 Current Bug
At the moment, there are two bugs that I know of. One is when a user logs out the placeholder profile image isn't removed immediately and the second is that it takes a few seconds for a favorite to be deleted which in turn leads to the error notification being displayed

<details>
<summary><h3> 🎥 - Demo Video </h3></summary>
 <video src="https://github.com/RoyJumah/next-event/assets/61903079/2a5fedfc-b63b-457f-b5e8-9a55e895bb5a" controls="controls" style="max-width: 730px;"> 
</details>




<details>
<summary><h3> 📸 - Demo Images </h3></summary>
<img src ="https://github.com/RoyJumah/next-event/assets/61903079/b4047cf2-f501-4029-a8c9-bf7853401733"/>
<img src="https://github.com/RoyJumah/next-event/assets/61903079/81111971-7457-4291-979d-966dd1752b0b"/>
<img src="https://github.com/RoyJumah/next-event/assets/61903079/fb1fab89-77d2-4a6c-80ed-fb99cf7b4c6e"/>
<img src="https://github.com/RoyJumah/next-event/assets/61903079/c479ffae-f29a-4402-bd22-cbc8e9841a0a"/>
</details>





