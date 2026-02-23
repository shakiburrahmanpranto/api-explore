function loadPosts() {
  //console.log("post loaded");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  // for (const post of posts) {
  //   console.log(post);
  // }

  const sectionContainer = document.getElementById(" section_container");

  for (const post of posts) {
    const div = document.createElement("div");

    div.innerHTML = `
   <h4>User-${post.userId}</h4>
   <h5>Posts : ${post.title}</h5>
   <p>Post body : ${post.body}</p>
`;

    sectionContainer.appendChild(div);

    console.log(post);
  }
}

loadPosts();
