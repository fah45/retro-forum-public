
// _________________________________________________________________________
// Latest Post Field
const latestPostContainer = document.getElementById('latest-card-container')
// Get Element By Id

const latestLoader = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const posts = await res.json();
// console.log(posts)
displayLatestPosts(posts)
}
const displayLatestPosts = (posts) =>{
posts.forEach(post => {
    // console.log(post)
const cardDiv = document.createElement('div')
cardDiv.innerHTML =`
<div class="card w-[300px] h-[482px] bg-base-100 shadow-xl mt-6">
<figure><img src="${post.cover_image}" alt="Shoes" /></figure>
<div class="card-body">
  <p><i class="fa-solid fa-calendar-days"></i> <span id="latest-date">${post?.author?.posted_date ? post.author.posted_date : 'No Date Found'}</span></p>
  <h2 id="latest-title" class="card-title mt-4">${post.title}</h2>
  <p id="latest-paragraph" class="mt-3">${post.description} </p>
  <div class="flex gap-5 mt-4">
    <div>
      <img id="latest-image" class="rounded-full h-[58px] w-[60px]" src="${post.profile_image}" alt="">
    </div>
    <div>
      <h1 id="latet-name" class="text-xl font-bold">
      ${post?.author?.name}
      </h1>
      <p id="latest-designation" class="text-lg">
      ${post?.author?.designation ? post.author.designation : 'Unknown'}
      </p>
    </div>
  </div>
</div>
</div>`
latestPostContainer.appendChild(cardDiv)
});
}
latestLoader()
const letsDiscussLoaderContainer = document.getElementById('left-container')
// lets Discuss Section
const letsDiscussLoader = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const allPostsData = await res.json();
    const allPosts = allPostsData.posts;
    // console.log(typeof allPosts);
    // const allPosts = allPostsData.posts;
    displayAllPosts(allPosts);
    }

    // const displayAllPosts = (allPosts) =>{
    //     // console.log(allPosts)
    //     allPosts.forEach(singlePost => {
    //         console.log(singlePost)
    //         // Div Create 
    //        const cardDiv2 = document.createElement('div')
    //       // div inner HTML
    //       cardDiv2.innerHTML = `  <div class="hero p-2 border-4 rounded-3xl bg-base-200">
    //       <div class="hero-content flex-col lg:flex-row gap-10">
    
    //         <div class="indicator">
    //           <span class="indicator-item badge badge-secondary"></span>
    //           <div class="place-items-start h-[250px]">
    //             <img class="w-32 h-32  rounded-3xl"
    //               src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //           </div>
    //         </div>
    
    //         <div>
    //           <h1 class="text-xl font-bold">10 Kids Unaware of Their Halloween Costume</h1>
    //           <p class="py-6">>${post?.author?.posted_date ? post.author.posted_date : 'No Date Found'}</p>
    //           <div class="flex justify-around items-center">
    //             <div class="border-t-4 border-dashed flex p-2 gap-10">
    //               <p><i class="fa-solid fa-message"></i><span id="icons"> 560 </span></p>
    //               <p><i class="fa-solid fa-eye"></i><span id="icons"> 1,568 </span></p>
    //               <p><i class="fa-regular fa-clock"></i><span id="icons"> 5 </span>min</p>
    //             </div> 
    //             <div>
    //               <button class="btn p-4 text-white text-sm bg-[#797DFC] rounded-full"><i class="fa-regular fa-envelope"></i></button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div> 
    //       `
    //       latestPostContainer.appendChild(cardDiv2)

          
    //         // Div Append

    //     });
    // }

    letsDiscussLoader()