export const fetchResponse= async(chats) => {
    try{
        const response= await fetch('http://localhost:3080', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chats.map((message)=> message.message).join(" \n ")
            })
        })

        const data= await response.json()
        return data
    }catch (error) {
        console.log(error);
    }
}