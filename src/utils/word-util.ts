export async function getRandomWord(){
    try{
        const response = await fetch(
            "https://random-word-api.herokuapp.com/word?length=5"
          );
          const [word] = await response.json();
          console.log(word);
          return word;
    }catch(err){
        console.log(err)
    }
}