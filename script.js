async function loadStats(){

  try{

    const res = await fetch("/api/stats");
    const data = await res.json();

    document.getElementById("online").innerText = data.online.toLocaleString();
    document.getElementById("visits").innerText = data.visits.toLocaleString();
    document.getElementById("favorites").innerText = data.favorites.toLocaleString();
    document.getElementById("likes").innerText = data.likes + "%";

  }
  catch(err){

    console.log(err);

    document.getElementById("online").innerText = "0";
    document.getElementById("visits").innerText = "0";
    document.getElementById("favorites").innerText = "0";
    document.getElementById("likes").innerText = "0";

  }

}

loadStats();
setInterval(loadStats, 10000);
