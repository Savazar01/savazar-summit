import { NextRequest, NextResponse } from "next/server";
import { insertLead } from "@/lib/db";

const VALID_COUPONS: Record<string, string> = {
  GVSSC1APR19: "10% OFF on Agentic AI Automation Workshop",
  GVSSC2APR19: "5% OFF on AI Solution Architect Certification",
  GVSS: "10% OFF on GVSS Summit",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      full_name, 
      email,
      whatsapp, 
      role, 
      ai_experience, 
      interests, 
      coupon_code,
      company_name,
      proposed_time,
      request_type = "workshop",
      city,
      country,
      years_experience,
      industries,
      tech_skills,
      ai_skills,
      additional_details,
      referrer_name,
      referrer_email,
      company_size,
      turnover,
      company_location,
      requirement_description,
      consulting_industry
    } = body;

    // Validation
    if (!full_name || !whatsapp || !email) {
      return NextResponse.json(
        { error: "Full Name, Email, and WhatsApp are required." },
        { status: 400 }
      );
    }

    if (request_type === "workshop" && !role) {
      return NextResponse.json(
        { error: "Role is required for workshop registration." },
        { status: 400 }
      );
    }

    const interestsStr = Array.isArray(interests)
      ? interests.join(", ")
      : String(interests || "");

    const industriesStr = Array.isArray(industries)
      ? industries.join(", ")
      : String(industries || "");

    const techSkillsStr = Array.isArray(tech_skills)
      ? tech_skills.join(", ")
      : String(tech_skills || "");

    const aiSkillsStr = Array.isArray(ai_skills)
      ? ai_skills.join(", ")
      : String(ai_skills || "");

    const coupon = (coupon_code || "").toString().toUpperCase().trim();
    const VALID_COUPONS_EXTENDED: Record<string, string> = {
      ...VALID_COUPONS,
      GVSSBUNDLE25: "20% BUNDLE SAVINGS: Agentic AI + Solution Architect",
    };

    let couponMessage = "";
    if (coupon && VALID_COUPONS_EXTENDED[coupon]) {
      couponMessage = VALID_COUPONS_EXTENDED[coupon];
    }

    const lead = insertLead({
      full_name: full_name.toString().trim(),
      email: email.toString().trim(),
      whatsapp: whatsapp.toString().trim(),
      role: (role || (request_type === "consulting" ? "Consulting Inquiry" : "Developer")).toString().trim(),
      ai_experience: ai_experience ? Math.round(Number(ai_experience)) : 1,
      interests: interestsStr || "AI Consulting",
      coupon_code: coupon,
      company_name: (company_name || "").toString().trim(),
      proposed_time: (proposed_time || "").toString().trim(),
      request_type,
      city: (city || "").toString().trim(),
      country: (country || "").toString().trim(),
      years_experience: (years_experience || "").toString().trim(),
      industries: industriesStr,
      tech_skills: techSkillsStr,
      ai_skills: aiSkillsStr,
      additional_details: (additional_details || "").toString().trim(),
      referrer_name: (referrer_name || "").toString().trim(),
      referrer_email: (referrer_email || "").toString().trim(),
      company_size: (company_size || "").toString().trim(),
      turnover: (turnover || "").toString().trim(),
      company_location: (company_location || "").toString().trim(),
      requirement_description: (requirement_description || "").toString().trim(),
      consulting_industry: (consulting_industry || "").toString().trim(),
    });

    const isConsulting = request_type === "consulting";

    return NextResponse.json({
      success: true,
      message: isConsulting 
        ? "Consultation request received! Our team will contact you shortly to confirm the appointment and process the ₹5000 strategic intake fee (waived if implementation is signed). *Proposed dates subject to change based on registrations."
        : `Registration successful for ${interestsStr}! You are now enrolled in both track weekends. Check your WhatsApp for the Elite Masterclass brochure and preparation guide. *Proposed dates subject to change based on registration volume.`,
      coupon_discount: isConsulting ? null : (couponMessage || null),
      flyers: [
        { title: "Agentic AI Automation Workshop", url: "/course1" },
        { title: "AI Solution Architect Certification", url: "/course2" },
        { title: "AI Consulting & Solutions", url: "/consulting" },
      ],
      lead_id: lead.id,
    });
  } catch (err) {
    console.error("[register] Error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
