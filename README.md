# CodeLeap Test Project – Gratitude Edition

## 🙏 Special Note

I am very grateful to participate in the **CodeLeap selection process**.  
This project is my practical submission, demonstrating my skills in building a **functional CRUD application** using modern React technologies.  
I sincerely thank the CodeLeap team for this opportunity!  

---

## Project Description

This is a simple project developed as part of the **CodeLeap test**.  
The goal was to create a **functional CRUD application** with features like creating, editing, deleting, liking, and filtering posts.  
It also includes **login and logout functionality**, simulating a user system.  

Even though this project focuses on simplicity, it demonstrates:

- Structuring a modern **Next.js project**  
- Creating **reusable React components**  
- Managing global state using **React Context API**  
- Using **React Icons** for user interface elements  
- Handling user interactions such as likes, filters, and login/logout  

---

## Technologies Used

- **Next.js** – React framework with built-in routing  
- **React** – Component-based UI  
- **TypeScript** – Type safety and improved code reliability  
- **React Context API** – Global state management, simulating an API  
- **CSS (basic)** – Styling for components and screens  
- **React Icons** – Icons for likes, delete, edit, and filters  
- **GitHub** – For version control and project hosting
- **DTO (Data Transfer Object)** – Used to structure and map the post data between components and the application state.
- **Vercel** – Used to deploy and host the project, making the application available online.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete posts  
- **Like System**: Users can like posts, and likes are displayed dynamically  
- **Filter Posts**: Simple filtering for recent posts or sorting by time  
- **Login & Logout**: Simulated login system  
- **Reusable Components**: Buttons, inputs, cards, and modals  
- **Clean Interface**: Functional UI with responsive design  

---

## Project Structure

```text
/src
  /components
    - Button.tsx         # Reusable button component
    - Input.tsx          # Input field with reusable styling
    - Card.tsx           # Post card component with title, content, likes
    - Modal.tsx          # Reusable modal for delete/edit actions
    - Select.tsx         # Simple dropdown filter component
  /context
    - GlobalContext.tsx     # Global state and simulated API
  /pages
    - page.tsx          # Main page with login
    - main.tsx     # Optional second with posts feed

- global.css         # Basic CSS styles
/public
    - image.png        # Site favicon
```

---

## Como Executar

Clone o repositório:

git clone https://github.com/your-username/repository-name.git

Instale as dependências:

npm install  
npm run dev  

ou

yarn install  
yarn dev




    
 
