/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const URL = 'https://api.github.com/users/juliekhov';
const cards = document.querySelector('div.cards');

// create read update delete, HTTP status codes and requests
// all server requests are asynchronous github.com/axios/axiosn
// each operation happens at different times
// const getTheData = (id) => async (event) => {
// promise - resolve, reject
// http - request
// .then(res) - success response
// .catch(err) - error response
axios.get(URL)
    .then(res => {
        // append cardMaker fctn to cards
        cards.appendChild(cardMaker(res));
    })
    .catch(err => {
        alert('error!!!');
    })

// make other gh cards from array

//

// .map to store to return the name of the variable you store the component in
// .forEach to append components

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// url to access new user profiles from gh api
newURL = "https://api.github.com/users/";

// friends array
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// for each array element, add the element to the newURL
followersArray.forEach(element => {
    // use axios to get gh api data response
    axios.get(newURL + element)
        .then(res => {
            // append cardMaker fctn to cards for new users
            cards.appendChild(cardMaker(res));
        })
        .catch(err => {
            // throw error if rejected response
            alert('404: No cards found!')
        })
});


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> 1 div /  has class
      <img src={image url of user} /> 2 img / has src
      <div class="card-info"> 3 div / has class
        <h3 class="name">{users name}</h3> 4 h3 / has class
        <p class="username">{users user name}</p> 5 p / has class
        <p>Location: {users location}</p> 6 p
        <p>Profile: 7 p
          <a href={address to users github page}>{address to users github page}</a> 8 a / has src
        </p>
        <p>Followers: {users followers count}</p> 9 p
        <p>Following: {users following count}</p> 10 p
        <p>Bio: {users bio}</p> 11 p
      </div>
    </div>
*/

// res.data.name
function cardMaker(res) {
    // div 1
    const mainCard = document.createElement('div'); // 1
    // add class named 'card' to main card
    mainCard.classList.add('card');
    // img
    const gitImg = document.createElement('img'); // 2
    // img src access data obj under 'avatar_url'
    gitImg.src = res.data.avatar_url;
    // append img to div 1
    mainCard.appendChild(gitImg);
    // div 2
    const cardInfo = document.createElement('div'); // 3
    // add class 'card-info'
    cardInfo.classList.add('card-info');
    // append div 2 to div 1, var doesn't use quotes
    mainCard.appendChild(cardInfo);
    // name
    const name = document.createElement('h3'); // 4
    // add class 'name'
    name.classList.add('name');
    // add text access data obj under 'name'
    name.textContent = res.data.name;
    // append name to div 2
    cardInfo.appendChild(name);
    // username
    const username = document.createElement('p'); // 5
    // add class 'username'
    username.classList.add('username');
    // add text access data obj under 'login'
    username.textContent = res.data.login;
    // append username to div 2
    cardInfo.appendChild(username);
    // location
    const location = document.createElement('p'); // 6
    // add text access data obj under 'location'
    location.textContent = res.data.location;
    // append location to div 2
    cardInfo.appendChild(location);
    // profile
    const profile = document.createElement('p'); // 7
    // append profile to div 2
    cardInfo.appendChild(profile);
    // github url
    const ghURL = document.createElement('a'); // 8
    ghURL.href = res.data.html_url;
    // add url stored in key 'html_url' of data obj
    ghURL.textContent = res.data.html_url;
    // append ghURL to profile
    profile.appendChild(ghURL);
    // followers count
    const followersCount = document.createElement('p'); // 9
    // add text Followers: {users followers count} to followersCount
    followersCount.textContent = `Followers: ${res.data.followers}`;
    // append followersCount to div 2
    cardInfo.appendChild(followersCount);
    // followers
    // user's following count
    const usersFollowingCount = document.createElement('p'); // 10
    // add text 'Following:' {users following count} to usersFollowingCount <<
    usersFollowingCount.textContent = `Following: ${res.data.following}`;
    // append usersFollowingCount to div 2
    cardInfo.appendChild(usersFollowingCount);
    // bio
    const bio = document.createElement('p'); // 11
    // add text access data obj under 'bio'
    bio.textContent = res.data.bio;
    // append bio to div 2
    cardInfo.appendChild(bio);

    return mainCard;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/