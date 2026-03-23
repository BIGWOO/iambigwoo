import { z } from "zod/v4";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "請輸入您的大名")
    .max(100, "名稱不可超過 100 字"),
  email: z
    .string()
    .min(1, "請輸入 Email")
    .email("Email 格式不正確"),
  inquiryType: z.enum(["consulting", "project", "collaboration", "other"], {
    message: "請選擇洽詢類型",
  }),
  budget: z
    .enum(["5k-10k", "10k-30k", "30k+", "tbd"])
    .optional(),
  message: z
    .string()
    .min(10, "訊息至少需要 10 個字")
    .max(2000, "訊息不可超過 2000 字"),
  turnstileToken: z.string().min(1, "請完成人機驗證"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
