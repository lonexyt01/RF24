async function loadStats(){

    try{

        const res = await fetch("/api/stats");

        const game = await res.json();

        document.getElementById("online").innerText =
        game.playing.toLocaleString();

        document.getElementById("favorites").innerText =
        game.favoritedCount.toLocaleString();

        document.getElementById("visits").innerText =
        game.visits.toLocaleString();

        const likes =
        Math.floor(
            game.upVotes /
            (game.upVotes + game.downVotes) * 100
        );

        document.getElementById("likes").innerText =
        likes + "%";

    }
    catch(err){

        console.log(err);

        document.getElementById("online").innerText =
        "Offline";

    }

}

loadStats();

setInterval(loadStats,10000);