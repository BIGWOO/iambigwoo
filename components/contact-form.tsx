"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { submitContactForm, type FormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const inquiryTypes = [
  { value: "consulting", label: "技術顧問" },
  { value: "project", label: "專案開發" },
  { value: "collaboration", label: "合作提案" },
  { value: "other", label: "其他" },
] as const;

const budgetOptions = [
  { value: "5k-10k", label: "$5K – $10K" },
  { value: "10k-30k", label: "$10K – $30K" },
  { value: "30k+", label: "$30K+" },
  { value: "tbd", label: "再議" },
] as const;

const initialState: FormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      turnstileToken: "mock-token", // Phase 0: mock
    },
  });

  // If form was submitted successfully, show terminal-style response
  if (state.success) {
    return (
      <Card className="border-surface1 bg-mantle">
        <CardContent className="p-8 font-mono">
          <div className="space-y-2 text-sm">
            <p className="text-green">{state.message}</p>
            <p className="text-subtext">
              {"// x-reply-within: 48h"}
            </p>
            <p className="text-surface2 mt-4">
              {"// 感謝你的訊息，我會盡快回覆 ☕"}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-surface1 bg-mantle">
      <CardHeader>
        <CardTitle className="font-mono">
          <span className="text-mauve">await</span>{" "}
          <span className="text-blue">bigwoo</span>.
          <span className="text-green">contact</span>({"{"})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          {/* Hidden turnstile token — Phase 0: mock */}
          <input type="hidden" name="turnstileToken" value="mock-token" />

          <div className="space-y-2">
            <Label htmlFor="name" className="font-mono text-subtext">
              name: <span className="text-red">*</span>
            </Label>
            <Input
              id="name"
              placeholder="您的大名"
              className="border-surface1 bg-crust"
              {...register("name")}
            />
            {(errors.name || state.errors?.name) && (
              <p className="text-sm text-red">
                {errors.name?.message || state.errors?.name?.[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-mono text-subtext">
              email: <span className="text-red">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="border-surface1 bg-crust"
              {...register("email")}
            />
            {(errors.email || state.errors?.email) && (
              <p className="text-sm text-red">
                {errors.email?.message || state.errors?.email?.[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiryType" className="font-mono text-subtext">
              type: <span className="text-red">*</span>
            </Label>
            <Select
              name="inquiryType"
              onValueChange={(v) =>
                setValue("inquiryType", v as ContactFormData["inquiryType"])
              }
            >
              <SelectTrigger className="border-surface1 bg-crust">
                <SelectValue placeholder="選擇洽詢類型" />
              </SelectTrigger>
              <SelectContent>
                {inquiryTypes.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(errors.inquiryType || state.errors?.inquiryType) && (
              <p className="text-sm text-red">
                {errors.inquiryType?.message || state.errors?.inquiryType?.[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="font-mono text-subtext">
              budget?:
            </Label>
            <Select
              name="budget"
              onValueChange={(v) =>
                setValue("budget", v as ContactFormData["budget"])
              }
            >
              <SelectTrigger className="border-surface1 bg-crust">
                <SelectValue placeholder="預算範圍（選填）" />
              </SelectTrigger>
              <SelectContent>
                {budgetOptions.map((b) => (
                  <SelectItem key={b.value} value={b.value}>
                    {b.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-mono text-subtext">
              message: <span className="text-red">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="想聊什麼..."
              rows={5}
              className="border-surface1 bg-crust"
              {...register("message")}
            />
            {(errors.message || state.errors?.message) && (
              <p className="text-sm text-red">
                {errors.message?.message || state.errors?.message?.[0]}
              </p>
            )}
          </div>

          {/* Turnstile widget placeholder — Phase 1 */}
          <div className="rounded-md border border-dashed border-surface2 p-4 text-center text-sm text-surface2 font-mono">
            {"// Cloudflare Turnstile — Phase 1"}
          </div>

          {state.message && !state.success && (
            <p className="text-sm text-red">{state.message}</p>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full font-mono"
          >
            {isPending ? "// sending..." : "}) // 送出"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
