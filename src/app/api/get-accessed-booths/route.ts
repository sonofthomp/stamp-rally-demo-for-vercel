import { NextRequest } from "next/server";

const fs = require("fs");
const file = require("@/data/booths_attended.json");

export function GET(req: NextRequest) {
  return new Response(JSON.stringify(file), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}