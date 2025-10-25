/**
 * Shared UI Components
 * Public API for shadcn/ui components
 *
 * FSD Layer: shared/ui
 * Purpose: Re-export all UI components for clean imports across the app
 */

// Accordion
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion"

// Button
export { Button, buttonVariants } from "./button"

// Card
export {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./card"

// Dialog
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

// Sheet
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"