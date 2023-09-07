/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTobjects = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (myName, myEyeColor, myHairColor, myWeapon, myRole) {
   const NFT = {"Name" : myName, 
        "HairColor" : myHairColor, 
        "EyeColor" : myEyeColor, 
        "Weapon" : myWeapon, 
        "Role" : myRole}
   NFTobjects.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTobjects.length; i++) {
        console.log("NFT Name: ",NFTobjects[i].Name);
        console.log("Eye Color: ",NFTobjects[i].HairColor);
        console.log("Hair Color: ",NFTobjects[i].EyeColor);
        console.log("Weapon: ",NFTobjects[i].Weapon);
        console.log("Role: ",NFTobjects[i].Role);
        console.log();
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTobjects.length);
}

// call your functions below this line

mintNFT ("Shiro", "Black", "Black","Sword", "Berserker");
mintNFT ("Kidd", "Red", "Red","Dagger", "Assassin");
mintNFT ("Gojou", "Blue", "White","Staff", "Tank");
listNFTs ();
getTotalSupply();
