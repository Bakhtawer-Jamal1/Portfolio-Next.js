export async function POST(req) {
  try {
    const data = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Contact data is received successfully
    // You can add additional processing here (e.g., send email notifications, log to file, etc.)
    
    return new Response(
      JSON.stringify({ success: true, message: "Message received successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
