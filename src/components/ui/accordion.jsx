import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-[1.6px] border-[#222222B2] rounded-xl mb-4", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-[32px] pl-[60px] font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
      <div className="shrink-0 transition-transform duration-200 pr-[50px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 33" fill="none">
  <g clipPath="url(#clip0_25796_5439)">
    <path d="M16 0.171875C7.17706 0.171875 0 7.34894 0 16.1719C0 24.9948 7.17706 32.1719 16 32.1719C24.8229 32.1719 32 24.9936 32 16.1719C32 7.35019 24.8229 0.171875 16 0.171875ZM16 29.6932C8.54531 29.6932 2.47869 23.6278 2.47869 16.1719C2.47869 8.71594 8.54531 2.65056 16 2.65056C23.4547 2.65056 29.5213 8.71594 29.5213 16.1719C29.5213 23.6278 23.4559 29.6932 16 29.6932Z" fill="#222222" fill-opacity="0.7"/>
    <path d="M22.1973 14.8217H17.24V9.86437C17.24 9.18025 16.686 8.625 16.0006 8.625C15.3152 8.625 14.7612 9.18025 14.7612 9.86437V14.8217H9.80383C9.11845 14.8217 8.56445 15.377 8.56445 16.0611C8.56445 16.7452 9.11845 17.3005 9.80383 17.3005H14.7612V22.2579C14.7612 22.942 15.3152 23.4972 16.0006 23.4972C16.686 23.4972 17.24 22.942 17.24 22.2579V17.3005H22.1973C22.8827 17.3005 23.4367 16.7452 23.4367 16.0611C23.4367 15.377 22.8827 14.8217 22.1973 14.8217Z" fill="#222222" fill-opacity="0.7"/>
  </g>
  <defs>
    <clipPath id="clip0_25796_5439">
      <rect width="32" height="32" fill="white" transform="translate(0 0.171875)"/>
    </clipPath>
  </defs>
</svg> </div>
   
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm px-[60px] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
