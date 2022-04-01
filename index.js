const read = require('readline-sync')
const fetch = require('node-fetch')

const username = read.question('masukan username : ');

async function test() {
    const hasil = await fetch(`https://api.github.com/users/${username}` , {
        method : "GET"
    })
    .then(Response => Response.json())
   const user = hasil.login
   const followers = hasil.followers
   const following = hasil.following
   console.log(`username : ${user}`);
   console.log(`Jumlah Followers : ${followers}`);
   console.log(`Jumlah Following : ${following}`);

}
test()