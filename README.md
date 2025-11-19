<b>BIZZO</b>
an e-commerce web app


Bizzo is an e-commerce web app where you can go through daily-use products and add them to cart. Bizzo is designed and programmed by Raghab Pandit, it uses tools like NextJS15, Redux Toolkit, TailwindCSS etc.

<img width="1365" height="520" alt="1" src="https://github.com/user-attachments/assets/7ca34330-de94-423f-b355-43e74b566d29" />

"How to Run in your code editor?":
- Open your Code Editor
- Copy the repository link (https://github.com/Raghab-Pandit/bizzo.git)
- Open terminal in code editor and run this command
  ```
  git clone https://github.com/Raghab-Pandit/bizzo.git
  npm install
  npm run dev
  ```
- And You are Good to Go!!


"Files & Folders and their function//usage":

-Redux: This folder consists of my state management tools. Since this project doesnt have a backend integrated it acts as a temporary database for frontend. Items in cart are stored here temporarily, you can add, update and delete products in cart using useSelector() and useDispatch() hook
-app: This folder consists of my whole frontend code
-axiosInstance: I have used axios to perform api works so this folder has my baseURL which makes my apifetching in most files simple and easy
-components: this folder consists of components that are used in other files, mainly reusable jsx files

"Features in Bizzo":

-search: you can search for your products using their title
-add to cart: you can add products you are interested in your cart similar to shopping mart in real life
-update your cart: if you mistakenly added more or less quantity of products in your cart than no need to worry as we have a feature where you can update the quantity. Also if you want to reconsider your decision of buying the product, you can delete the product from your cart too
-responsive: Bizzo is a web app made for every device with various sizes. it looks amazing from your mobile to your tv
-image navigator: you can check the product from any angles (if the images are available)
-see reviews: you can see the reviews by our other customers and make the decision of buying our product


"Tools":
-Next15: Newest version of NextJS. Makes routing easier, better for SEO, i can integrate backend in future. Widely used to write JSX uses react as a base
-TailwindCSS: Trendy tool in market and much better than vanilla css. Makes the work for making responsive webpages easier, also makes the coding faster
-Redux Toolkit: Widely used state management tool or i like to call it "a (temporary)database for frontend"
-API: since i have not yet integrated backend in this project so i use a dummy api. All credits to "https://dummyjson.com/products"
-Axios: i used it for performing api works(fetching)

Authors:
Bizzo is designed, programmed and launched by Raghab Pandit.
