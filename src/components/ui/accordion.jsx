import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, Clock10, PlayCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, extraText, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "md:flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [data-state=open] > svg:rotate-180 ",
        className
      )}
      {...props}>
      <div className=" flex items-center ">
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 mr-3" />
        {children}
      </div>
      <div className=" flex items-center space-x-3 px-1 py-2">
        <div className=" flex items-center">
          <PlayCircle className="w-4 h-4 mr-2 text-[#34197c]" />
          <p className="md:text-sm text-xs whitespace-nowrap font-medium">{extraText.lectures} lectures</p>
        </div>
        <div className=" flex items-center">
          <Clock10 className="w-4 h-4 mr-2 text-orange-500" />
          <p className="md:text-sm text-xs whitespace-nowrap  font-medium">{extraText.duration}</p>
        </div>
      </div>
      {/* <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 mr-5" />
      {children} */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName



const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
