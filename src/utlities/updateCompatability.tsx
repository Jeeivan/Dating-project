export async function updateComptability(id: string | undefined, bool: boolean) {
    try {
        const response = await fetch(`http://localhost:3006/form/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                green_flag: bool
            }),
        })

        if (response.ok) {
            console.log("Form updated successfully");
        } else {
            console.error("Error updating form")
        }
    } catch (error) {
        console.error("Error updating form", error)
    }
}