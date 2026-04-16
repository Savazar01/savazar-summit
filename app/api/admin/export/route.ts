import { NextRequest, NextResponse } from "next/server";
import { getAllLeads } from "@/lib/db";
import Papa from "papaparse";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "savazar2025";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("x-admin-password");
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const leads = getAllLeads();
    const leadsWithFinancials = leads.map(l => {
      const basePrice = l.request_type === "consulting" ? 5000 : 50000;
      const hasDiscount = l.coupon_code === "GVSS" || l.coupon_code === "SIPL";
      const discount = hasDiscount ? basePrice * 0.1 : 0;
      return {
        ...l,
        price: basePrice,
        discount: discount,
        total_amount: basePrice - discount
      };
    });

    const csv = Papa.unparse(leadsWithFinancials, {
      header: true,
      columns: [
        "id",
        "request_type",
        "full_name",
        "email",
        "whatsapp",
        "price",
        "discount",
        "total_amount",
        "referrer_name",
        "referrer_email",
        "city",
        "country",
        "company_name",
        "role",
        "years_experience",
        "ai_experience",
        "industries",
        "tech_skills",
        "ai_skills",
        "interests",
        "coupon_code",
        "additional_details",
        "created_at",
      ],
    });

    const timestamp = new Date().toISOString().split("T")[0];
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="gvss-leads-${timestamp}.csv"`,
      },
    });
  } catch (err) {
    console.error("[admin/export] Error:", err);
    return NextResponse.json({ error: "Export failed" }, { status: 500 });
  }
}
