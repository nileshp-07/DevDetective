const url = "https://api.github.com/users/";
const searchBtn =  document.querySelector("#btn");
const inputFiled = document.querySelector("#input");


async function getUserInfo(gitUrl){
    console.log(gitUrl);
    const response = await fetch(gitUrl);
    const data = await response.json();
    if (!data) {
        throw data;
    }
    updateUserinfo(data);
    // console.log(data);
    
}

searchBtn.addEventListener('click' , () =>{
    if(inputFiled.value === ""){
    console.log("insert a username first")
    return;
    }

    getUserInfo(url + inputFiled.value);

})



const profilename = document.querySelector("#name");
const username = document.querySelector("#username");
const userImage = document.querySelector("#userImage");
const joinedDate = document.querySelector("#date");
const profileBio = document.querySelector("#profileBio");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const userLocation = document.querySelector("#location");
const website = document.querySelector("#website");
const twitter = document.querySelector("#twitter");
const company = document.querySelector("#company");

// console.log(profileBio)
// // console.log(userImage)
// console.log(joinedDate)
// // console.log(location)
// console.log(followers)
// console.log(following)
// console.log(twitter)
// console.log(company)
// console.log(username)
// console.log(profileBio)
// console.log(repos)
// console.log(profileBio)
// console.log(website)


function updateUserinfo(data)
{
    console.log(data);
    userImage.src = `${data.avatar_url}`;
    profilename.innerText = data?.name;
    username.innerText = `@${data?.login}`;
    username.href = data?.html_url;
    // dateSegment = data?.created_at.split("T").shift().split("-");
    // joinedDate.innerText = `Joined ${dateSegment[2]} ${month[dateSegment[1] - 1]} ${dateSegment[0]}`;
    joinedDate.innerText = data?.created_at ?  data?.created_at : "not available";

    profileBio.innerText = (data?.bio === null) ? "This Profile has no Bio" : data?.bio;;

    repos.innerText = data?.public_repos;
    repos.href = data?.repos_url;
    followers.innerText = data?.followers;
    followers.href = data?.followers_url;
    following.innerText = data?.following;
    following.href = data?.following_url;

    userLocation.innerText =data?.location ? data?.location : "Not Available";

    website.innerText = data?.blog ? data?.blog : "Not Available";

    website.href = data?.blog? data?.blog : "#";

    twitter.innerText =data?.twitter_username ? data?.twitter_username : "Not Available";

    twitter.href = data?.twitter_username ? `https://twitter.com/${data?.twitter_username}` : "#";

    company.innerText = data?.company? data?.company : "Not Available";
}

