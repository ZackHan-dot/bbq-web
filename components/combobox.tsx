"use client";

import * as React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function Combobox() {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-[200px] justify-between"
        >
          {value && value.length ? (
            <div className="max-w-full overflow-hidden">
              {frameworks
                .filter((framework) => value.includes(framework.value))
                .map((item) => (
                  <span
                    key={item.value}
                    className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground"
                  >
                    {item.label}
                  </span>
                ))}
            </div>
          ) : (
            "请选择标签"
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="搜索标签" className="h-9" />
          <CommandList>
            <CommandEmpty>暂无数据</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    // 检查当前值是否已经在选择列表中
                    const vIdx = value.indexOf(currentValue);

                    if (vIdx !== -1) {
                      // 如果已经存在，则从列表中移除
                      setValue((prevValue) =>
                        prevValue.filter((item, index) => index !== vIdx),
                      );
                    } else {
                      // 如果不存在，则添加到列表中
                      setValue((prevValue) => [...prevValue, currentValue]);
                    }
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value.includes(framework.value)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
