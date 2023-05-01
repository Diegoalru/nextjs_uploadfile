export async function POST(request: Request) {

    const data = request.formData();
    console.log(data);

    return new Response(JSON.stringify({
            message: "Hello World",
    }), {
        headers: {
            "content-type": "application/json"
        },
    });
}
