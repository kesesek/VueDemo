<h1>Welcome to Music App!</h1>
This is a music website developed using Vue.js, Vue Router, SASS, and Element Plus.  

Follow these instructions to run this program on your device:

✨**Prerequisites**

- Ensure you have [Visual Studio Code (VSCode)](https://code.visualstudio.com/) installed.
- Ensure you have [Node.js](https://nodejs.org/en) installed. If not, visit the Node.js official website and download the version appropriate for your operating system.

✨**Setup**

1. **Clone the repository**
   - Click to download or open in GitHub Desktop.
   - Alternatively, you can use the following command in your terminal or command prompt:
     ```bash
     git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-kesesek.git
     ```

2. **Open the project in VSCode**
   - Navigate to the cloned repository folder.
   - Right-click on the folder and select "Open with Code" or simply open VSCode and use the "File > Open Folder" option to open the project.

3. **Install dependencies**
   - In VSCode, open the integrated terminal by right-clicking on the `732Demo` folder and selecting "Open in Integrated Terminal".
   - Run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

4. **Start the development server**
   - Run the following command in the terminal:
     ```bash
     npm run dev
     ```
   - This will start the development server and provide you with a link to access the web application.

5. **Access the web application**
   - Open the link provided in the terminal in your web browser.
   - You can now interact with the web pages!

✨Functions of the Website

1. Navigation: Click buttons in the left bar to switch between pages.
   
   In [App.vue](732Demo/src/App.vue), you can see the front-end code for the left navigation bar, where the navigation for each page is implemented using Router Link. Router Link is a component provided by Vue Router, locally imported in [App.vue](732Demo/src/App.vue). It replaces the traditional `<a>` tag and uses the to attribute to specify the destination of the route.

2. History Navigation: Use the left and right arrows to go back or forward in your browser history.
   
   In [App.vue](732Demo/src/App.vue#L94-L101), You can see two arrow icon codes provided by Element Plus. Element Plus is a Vue 3 based component library that, in this project, is globally configured in [main.js](732Demo/src/main.js), allowing any of the various components provided by Element Plus to be simply pasted where needed for use.
   
   These two arrow icons are bound with events using the `@click` directive, which triggers the corresponding events when clicked. By using Ctrl/Cmd+left click on the events they are bound to, we can see the following code: In this context, the `.go()` method from the Router instance in Vue Router is used, which allows you to move forward or backward through the history. Therefore, we can use these two arrow icons to go back to the previous page or move forward to the next page we visited before.

3. Authentication: Click the user icon to log in or log out.
   
   In [App.vue](732Demo/src/App.vue#L108), you can find a user icon, which is bounded with an event of opening a modal window. Looking further down to line 110 in [App.vue](732Demo/src/App.vue#L110), you can see the `<LoginModal />`, which is imported into the file as a component. By using Ctrl/Cmd+left click, the LoginModal.vue will open, allowing you to explore the role of Composition APIs provided by Vue, such as ref and reactive, in dynamically rendering components.
   
   Additionally, you can see that the modal window is wrapped in `<Teleport>`, which is used to transport the modal to the body tag without disrupting the original structure and styling. The use of syntax such as v-if, v-else, and mustache syntax is also demonstrated in LoginModal.vue.

Enjoy exploring Music App!

Official Websites:  

Vue.js: https://vuejs.org/  

Vue Router: https://router.vuejs.org/  

Element Plus: https://element-plus.org/en-US/  

