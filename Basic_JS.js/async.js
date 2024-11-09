async function abcd() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

abcd();