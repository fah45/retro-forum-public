// const loadPhone = async (searchText, isShowAll) =>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phones);
//     displayPhones(phones, isShowAll);
// }

// const displayPhones = (phones, isShowAll) =>{
//     //  console.log(phones);

//     const phoneContainer = document.getElementById('phone-container');
//     // clear phone container cards before adding new cards
//     phoneContainer.textContent = '';

//     // display show all button if there are more than 12 phones
//     const showAllContainer = document.getElementById('show-all-container')
//     if(phones.length > 12 && !isShowAll){
//        showAllContainer.classList.remove('hidden');
//     }
//     else{
//         showAllContainer.classList.add('hidden');
//     }
//     // console.log('is show all', isShowAll)

//     // console.log(phones.length)
//     // display only first 12 phones if not ShowAll
//    if(!isShowAll){
//     phones = phones.slice(0,12);
//    }

//     phones.forEach(phone =>{
//         // console.log(phone);
//         // 2: create a div
//         const phoneCard = document.createElement('div');
//         phoneCard.classList = `card  bg-gray-100 p-4 shadow-xl`;
//         // 3: set inner html
//         phoneCard.innerHTML = `
//         <figure><img src="${phone.image}" alt="Shoes" /></figure>
//         <div class="card-body">
//         <h2 class="card-title">${phone.phone_name}</h2>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div class="card-actions justify-center">
//         <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
//         </div>
//     </div>
//         `;
//         // 4: append child
//         phoneContainer.appendChild(phoneCard);
//     });

//     // hide loading spinner
//     toggleLoadingSpinner(false);
// }

// // 
// const handleShowDetail = async (id) =>{
//     // console.log('clicked show details', id)
//     // load single phone data
//     const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
//     const data = await res.json();
//     const phone = data.data;

//     showPhoneDetails(phone)
// }

// const showPhoneDetails = (phone) =>{
//     console.log(phone);
//     const phoneName = document.getElementById('show-detail-phone-name');
//     phoneName.innerText = phone.name;
    

//     const showDetailContainer = document.getElementById('show-detail-container');

//     showDetailContainer.innerHTML = `
//      <img src="${phone.image}" alt="">
//      <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
//      <p><span>Storage:</span>${phone?.others?.GPS || 'NO GPS availabe'}</p>
//      <p><span>Storage:</span>${phone.others?.GPS ? phone.others.GPS : 'NO GPS availabe in this device'}</p>
//     `


//     // show the modal
//     show_details_modal.showModal();
// }

// // handle search button
// const handleSearch = (isShowAll) =>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     console.log(searchText);
//     loadPhone(searchText, isShowAll);
// }
// // handle search recap
// // const handleSearch2 = () =>{
// //     toggleLoadingSpinner(true);
// //     const searchField = document.getElementById('search-field2')
// //     const searchText = searchField.value;
// //     loadPhone(searchText);

// // }

// const toggleLoadingSpinner = (isLoading) =>{
//     const loadingSpinner = document.getElementById('loading-spinner');
//    if(isLoading){
//     loadingSpinner.classList.remove('hidden');
//    }
//    else{
//     loadingSpinner.classList.add('hidden');
//    }
// }

// // handle show all
// const handleShowAll = () =>{
//     handleSearch(true);
// }

// // loadPhone();

// _________________________________________________________________________
// Latest Post Field
const latestPostContainer = document.getElementById('latest-card-container')

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

// lets Discuss Section
const letsDiscussLoader = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const allPostsData = await res.json();
    const allPosts = allPostsData.posts
    displayAllPosts(allPosts)
    }

    const displayAllPosts = (allPosts) =>{
        console.log(allPosts)
        allPosts.forEach(singlePost => {
            console.log(singlePost)  
        });
    }

    letsDiscussLoader()