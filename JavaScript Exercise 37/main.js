const postForm = document.querySelector("#post-form");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");
const bodyInput = document.querySelector("#body-input");
const postList = document.querySelector("#post-list");

document.addEventListener("DOMContentLoaded", loadPosts);

function loadPosts() {
  const posts = getPostsFromLocalStorage();

  posts.forEach(post => {
    addPostToDom(post);
  });
postForm.addEventListener("submit", addPost);

function addPost(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const body = bodyInput.value.trim();

  if (title !== "") {
    const post = {
      id: Date.now(),
      title: title,
      image: image,
      body: body
    };

    addPostToDom(post);
    savePostToLocalStorage(post);

    // i clear all 3 inputs instead of one because a post has more fields than a task
    titleInput.value = "";
    imageInput.value = "";
    bodyInput.value = "";
  }
}

function addPostToDom(post) {
  // i have used div instead of li because a post has an image and more content than a  list item
  const div = document.createElement("div");
  div.className = "post-item";
  div.dataset.id = post.id;

  // The image line is conditional because it is optional, unlike task text which is always there
  div.innerHTML = `
    <h3 class="post-title">${post.title}</h3>
    ${post.image ? `<img class="post-image" src="${post.image}" alt="post image" />` : ""}
    <p class="post-body">${post.body}</p>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  postList.appendChild(div);

  attachEventListener(div, post);
}

function attachEventListener(div, post) {
  const editBtn = div.querySelector(".edit-btn");
  const deleteBtn = div.querySelector(".delete-btn");

  editBtn.addEventListener("click", function() {
    handleEdit(post.id, div);
  });

  deleteBtn.addEventListener("click", function() {
    handleDelete(post.id, div);
  });
}

function handleEdit(postId, div) {
  const titleEl = div.querySelector(".post-title");
  const imageEl = div.querySelector(".post-image");

  const newTitle = prompt("Edit Title:", titleEl.textContent);

  // i have used two prompts instead of one because a post has both a title and an image to edit
  const newImage = prompt("Edit Image URL:", imageEl ? imageEl.src : "");

  if (newTitle !== null && newTitle.trim() !== "") {
    updatePost(postId, newTitle, newImage);
    titleEl.textContent = newTitle;

    if (imageEl) {
      imageEl.src = newImage;
    }
  }
}

function updatePost(id, newTitle, newImage) {
  const posts = getPostsFromLocalStorage();
  const post = posts.find(post => post.id == id);

  if (post) {
    // i have updated two fields instead of one because a post has title and image
    post.title = newTitle;
    post.image = newImage;

    localStorage.setItem("posts", JSON.stringify(posts));
  }
}

function handleDelete(id, div) {
  let posts = getPostsFromLocalStorage();

  posts = posts.filter(post => post.id != id);

  localStorage.setItem("posts", JSON.stringify(posts));

  div.remove();
}

function savePostToLocalStorage(post) {
  const oldPosts = getPostsFromLocalStorage();

  oldPosts.push(post);

  localStorage.setItem("posts", JSON.stringify(oldPosts));
}

function getPostsFromLocalStorage() {
  const oldPosts = JSON.parse(localStorage.getItem("posts")) || [];
  return oldPosts;
}