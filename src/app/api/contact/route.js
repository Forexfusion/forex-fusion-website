// app/api/contact/route.js

export async function POST(request) {
  try {
    const form = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwJfHC64hc411pH5NciAWS2QOnPpWl5kJCZhrOjf734azH-r5dr3l96JAAtp6yqIsY/exec",
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
