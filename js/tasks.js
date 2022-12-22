export const fetchData = async (subject) => {
    try {
        const result = await
            fetch(`url`);
        return await result.json();
    } catch (error) {
        msg.textContent = "error";
    }
}