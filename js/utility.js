const displayAllPosts = (allPosts) => {
  //  console.log(allPosts)
  const latestPostContainer = document.getElementById('left-container');
  allPosts.forEach((singlePost) => {
    console.log(singlePost)
    // Div Create 
    const cardDiv2 = document.createElement('div')
    // div inner HTML
    //   console.log(cardDiv2);
    cardDiv2.innerHTML = `
      <div class="hero p-2 border-4 rounded-3xl bg-base-200">
        <div class="hero-content flex-col lg:flex-row gap-10">

            <div class="indicator">
            <span class="indicator-item badge badge-${singlePost.isActive === true ? 'success' : 'error'}"></span>
            <div class="place-items-start h-[250px]">
                <img class="w-32 h-32  rounded-3xl"
                src="${singlePost?.image || 'error'}" />
            </div>
            </div>

            <div>
            <div class="flex gap-6">
            <p># <span>${singlePost.category} </span></p> 
            <p>Author : <span>${singlePost.author.name}</span></p>
            </div>
            <h1 class="text-xl font-bold">${singlePost?.title || 'error'}</h1>
            <p class="py-6">${singlePost?.description || 'error'}</p>
            <div class="flex justify-around items-center">
                <div class="border-t-4 border-dashed flex p-2 gap-10">
                <p><i class="fa-solid fa-message"></i><span id="icons"> ${singlePost?.comment_count || 'error'} </span></p>
                <p><i class="fa-solid fa-eye"></i><span id="icons"> ${singlePost?.view_count || 'error'} </span></p>
                <p><i class="fa-regular fa-clock"></i><span id="icons"> ${singlePost?.posted_time || 'error'} </span>min</p>
                </div> 
                <div>
                <button onclick = "btnClick('${singlePost?.title}','${singlePost?.view_count}' )" class="btn p-4 text-white text-sm bg-[#10B981] rounded-full"><i class="fa-regular fa-envelope"></i></button>
                </div>
            </div>
            </div>
        </div>
        </div> 
      
      `;
    latestPostContainer.appendChild(cardDiv2)


    // Div Append
  });
}
let count = 0;
btnClick = (title, views) => {
  count++;
  const counter = document.getElementById('clickCounter')
  counter.innerText = count;
  const rightContainer = document.getElementById('dynamic-rightSide')
  const newCard = document.createElement('div')
  newCard.innerHTML =`
  <div class=" flex gap-10 mt-10 shadow-xl p-6 rounded-xl">
  <h1 class="text-xl font-bold">${title}<h1>
  <p><i class="fa-solid fa-eye"></i><span>${views}</span></p>
</div>`
rightContainer.appendChild(newCard)
}