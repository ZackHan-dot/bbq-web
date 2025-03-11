"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { Combobox } from "@/components/combobox";
import { SidebarBreadcrumb } from "@/components/sidebar-breadcrumb";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "请填写标题, 最少2个字符",
  }),
  excerpt: z.string().min(2, {
    message: "请填写摘要，最少2个字符",
  }),
  published: z.boolean(),
  tags: z
    .number({
      message: "请选择标签",
    })
    .array(),
});

export default function Page({
  params,
}: {
  params: Promise<{ action: string }>;
}) {
  console.log(params);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      published: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full">
      <SidebarBreadcrumb />
      <div className="px-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-[40%]">
                  <FormLabel>标题</FormLabel>
                  <FormControl>
                    <Input placeholder="请输入标题" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem className="w-[40%]">
                  <FormLabel>摘要</FormLabel>
                  <FormControl>
                    <Input placeholder="请输入摘要" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>是否发布</FormLabel>
                  <FormControl className="block">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>标签</FormLabel>
                  <FormControl>
                    <div className="block">
                      <Combobox /> {field.value}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">创建</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
