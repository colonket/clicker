var coins = 0;

function coinClick(number){
    coins = coins + number;
    document.getElementById("coins").innerHTML = coins;
};

var asics = 0;

function buyCursor(){
    var asicCost = Math.floor(10 * Math.pow(1.1,asics));     //works out the cost of this cursor
    if(coins >= asicCost){                                   //checks that the player can afford the cursor
        asics = asics + 1;                                   //increases number of asics
    	coins = coins - asicCost;                          //removes the coins spent
        document.getElementById('asics').innerHTML = asics;  //updates the number of asics for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of coins for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,asics));       //works out the cost of the next cursor
    document.getElementById('asicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	coinClick(asics);
	
}, 1000);
