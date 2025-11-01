
const posts = [
  {
    name: "Hoàng Đại",
    avatar: "avata1.JPG",
    time: "2h",
    text: "Buổi sáng thật tuyệt vời, lắm điều thú vị ☀️",
    image: "https://picsum.photos/600/350?random=1"
  },
  {
    name: "Việt Dũng",
    avatar: "avata2.JPG",
    time: "now",
    text: "Cẩm nang du lịch mùa hè, và những điều cần biết 🌴",
    image: "https://picsum.photos/600/350?random=2"
  },
  {
    name: "Trần Xuân Hải",
    avatar: "avata3.JPG",
    time: "1h ago",
    text: "Hôm nay học lập trình web nhé!",
    image: "https://picsum.photos/600/350?random=3"
  },
  {
    name: "Du lịch Việt",
    avatar: "avata1.JPG",
    time: "3 min ago",
    text: "Đi Đà Lạt chill cực, Cung đường hoa vàng 🏞️",
    image: "https://picsum.photos/600/350?random=4"
  },
  {
    name: "Nguyễn Văn Cường",
    avatar: "avata1.JPG",
    time: "2h ago",
    text: "cảm ơn bạn đã chia sẻ bài viết hữu ích này! 👍 ",
    image: "https://picsum.photos/600/350?random=6"
  },
  {
    name: "Lê Văn Hùng",
    avatar: "avata2.JPG",
    time: "now",
    text: "Đi chơi cuối tuần thôi nào! 🌟",
    image: "https://picsum.photos/600/350?random=9"
  },
  {
    name: "Doanh nhân trẻ",
    avatar: "avata3.JPG",
    time: "now",
    text: "Chúng ta cùng nhau phát triển kinh tế! 📈",
    image: "https://picsum.photos/600/350?random=7"
  },
  {
    name: "Ngân hàng số",
    avatar: "avata1.JPG",
    time: "3 min ago",
    text: "Tiền trong tay, tương lai trong tầm tay! 💰",
    image: "https://picsum.photos/600/350?random=11"
  },
];

const newsfeed = document.getElementById("newsfeed");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `
    <div class="post-header">
      <img src="images/${post.avatar}" alt="Avatar" class="avatar">
      <div>
        <b>${post.name}</b><br>
        <small class="text-muted">${post.time}</small>
      </div>
    </div>

    <p class="mt-2">${post.text}</p>
    <img src="${post.image}" alt="" class="post-img">

    <div class="post-stats">
      <span class="like-count">👍😆❤️999 Likes </span>
      <span class="comment-count">99 Comments</span>
      <span class="share-count">100 Shares</span>
    </div>

    <div class="post-actions">
      <button class="action like-btn"><i class="bi bi-hand-thumbs-up"></i> Like</button>
      <button class="action comment-btn"><i class="bi bi-chat"></i> Comment</button>
      <button class="action share-btn"><i class="bi bi-share"></i> Share</button>
    </div>
  `;
  
  newsfeed.appendChild(div);
    const likeBtn = div.querySelector(".like-btn");
  const commentBtn = div.querySelector(".comment-btn");
  const shareBtn = div.querySelector(".share-btn");

  const likeCount = div.querySelector(".like-count");
  const commentCount = div.querySelector(".comment-count");
  const shareCount = div.querySelector(".share-count");

  let likes = 999, comments = 99, shares = 100;
  let liked = false;
  

  likeBtn.addEventListener("click", () => {
    liked = !liked;
    likes += liked ? 1 : -1;
    if(likes >= 1000) {
      likeCount.textContent = `👍😆❤️${(likes/1000).toFixed(1)}k`;
    } else {
      likeCount.textContent = `👍😆❤️${likes} Like${likes !== 1 ? "s" : ""}`;
    }
    likeBtn.classList.toggle("liked");
  });

  commentBtn.addEventListener("click", () => {
    comments++;
    commentCount.textContent = `${comments} Comment${comments !== 1 ? "s" : ""}`;
  });

  shareBtn.addEventListener("click", () => {
    shares++;
    shareCount.textContent = `${shares} Share${shares !== 1 ? "s" : ""}`;
    alert("You shared this post!");
  });
});

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-icon");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

