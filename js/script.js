const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value ;
    
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showPlayerDetails(data.player                        ) );
    // console.log(searchValue) ;
    
};

const showPlayerDetails = (players) => {
    
    for (const player of players){
        const parent = document.getElementById('player-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card-border p-5">
    <div class="pro-pic">
        <img class="w=25" src="" alt="">
    </div>
    <h2>Name: Cool </h2>
    <h5>Country: </h5>
    <p></p>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-warning">Details</button>
        
    </div>
    </div>
    `;
    parent.appendChild(div);
    }
};