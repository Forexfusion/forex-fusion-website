// app/api/contact/route.js

export async function POST(request) {
  try {
    const form = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyNf5WF99IWSHOX-Pvu-y15lGMUqCtOnWUFOtijbE3dwMp1qdW1l8K1cH4iuf94SZJ4yw/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
