export async function updateForm(id: string | undefined, answer: string, points: number) {
    try {
        const response = await fetch(`http://localhost:3006/form/add/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                answers: answer,
                points: points
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