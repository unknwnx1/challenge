const read = require('readline-sync')
const fetch = require('node-fetch')
const moment = require('moment');
const chalk = require('chalk');

//const username = read.question('masukan username : ');

const getUsers = (username) => new Promise((resolve,reject) => {
    fetch("https://api.github.com/users/" + username, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
});
(async() => {
    const username = read.question(chalk.green(`[${moment().format("HH:mm:ss")}] Masukan username : `))
    const hasil = await getUsers(username);
        if (!hasil.login) {
            console.log(chalk.red(`[${moment().format("HH:mm:ss")}] Error` , hasil.message));
        } else {
            const user = hasil.login
            const followers = hasil.followers
            const following = hasil.following
                console.log(chalk.green(`[${moment().format("HH:mm:ss")}] username : ${user}`));
                console.log(chalk.green(`[${moment().format("HH:mm:ss")}] Jumlah Followers : ${followers}`));
                console.log(chalk.green(`[${moment().format("HH:mm:ss")}] Jumlah Following : ${following}`));


        }
})();
