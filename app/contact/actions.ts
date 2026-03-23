"use server";

import { contactFormSchema } from "@/lib/schemas";

// Mock types matching the DB schema from PRD
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  inquiryType: string;
  budget: string | null;
  message: string;
  status: "pending" | "email_sent" | "email_failed" | "replied";
  emailSentAt: Date | null;
  createdAt: Date;
}

// Phase 0: Mock DB — will be replaced by Railway PostgreSQL in Phase 1
async function mockDbInsert(
  data: Omit<ContactSubmission, "id" | "status" | "emailSentAt" | "createdAt">
): Promise<ContactSubmission> {
  console.log("[mock-db] INSERT contact_submissions:", data);
  return {
    ...data,
    id: crypto.randomUUID(),
    status: "pending",
    emailSentAt: null,
    createdAt: new Date(),
  };
}

// Phase 0: Mock Turnstile — will be replaced by Cloudflare Turnstile in Phase 1
async function mockVerifyTurnstile(token: string): Promise<boolean> {
  const isEnabled = process.env.TURNSTILE_SECRET_KEY;
  if (!isEnabled) {
    console.log("[mock-turnstile] Verification skipped (no secret key)");
    return true;
  }
  // Real implementation will call Cloudflare API
  console.log("[mock-turnstile] Would verify token:", token.slice(0, 10));
  return true;
}

// Phase 0: Mock Resend — will be replaced by Resend SDK in Phase 1
async function mockSendEmail(submission: ContactSubmission): Promise<boolean> {
  const isEnabled = process.env.RESEND_API_KEY;
  if (!isEnabled) {
    console.log("[mock-resend] Email skipped (no API key)");
    return true;
  }
  console.log("[mock-resend] Would send notification to:", process.env.NOTIFICATION_EMAIL);
  return true;
}

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Parse & validate with Zod
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    inquiryType: formData.get("inquiryType"),
    budget: formData.get("budget") || undefined,
    message: formData.get("message"),
    turnstileToken: formData.get("turnstileToken") || "mock-token",
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }
    return {
      success: false,
      message: "表單驗證失敗，請檢查欄位",
      errors: fieldErrors,
    };
  }

  // 2. Verify Turnstile token
  const isHuman = await mockVerifyTurnstile(parsed.data.turnstileToken);
  if (!isHuman) {
    return { success: false, message: "人機驗證失敗，請重試" };
  }

  // 3. Insert to DB (mock)
  const submission = await mockDbInsert({
    name: parsed.data.name,
    email: parsed.data.email,
    inquiryType: parsed.data.inquiryType,
    budget: parsed.data.budget ?? null,
    message: parsed.data.message,
  });

  // 4. Send email notification (mock, non-blocking)
  // Email failure should NOT block form submission
  mockSendEmail(submission).catch((err) => {
    console.error("[contact] Email failed, but submission saved:", err);
  });

  return {
    success: true,
    message: "✓ Message sent. Status: 202 Accepted",
  };
}
