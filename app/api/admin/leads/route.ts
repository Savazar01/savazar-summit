import { NextRequest, NextResponse } from "next/server";
import { getAllLeads } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "savazar2025";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const leads = getAllLeads();
    return NextResponse.json({ leads });
  } catch (err) {
    console.error("[admin/leads] Error:", err);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
