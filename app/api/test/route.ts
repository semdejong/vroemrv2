export async function GET(req: Request) {
  return new Response("Hello World!", {
    headers: {
      "content-type": "text/plain",
    },
  })
}
