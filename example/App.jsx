import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  GlassAccordion,
  GlassAccordionContent,
  GlassAccordionItem,
  GlassAccordionTrigger,
  GlassButton,
} from "../src";

export default function App() {
  return (
    <div className="p-8 dark:bg-zinc-950 min-h-screen w-full dark:text-white ">
      <h1 className="text-2xl font-bold mb-4">Reline UI — Example</h1>
      <div className="flex flex-col gap-8 items-start">
        <div className="flex flex-col gap-4">
          <Button onClick={() => alert(" button clicked")}>Button </Button>
          <GlassButton onClick={() => alert("Glass button clicked")}>
            Button
          </GlassButton>
        </div>
        {/* Accordion */}
        <div className=" bg-transparent flex items-center justify-center p-6">
          <Accordion className="w-full max-w-xl">
            <AccordionItem id="accordion-1">
              <AccordionTrigger id="accordion-1">Accordion 1</AccordionTrigger>
              <AccordionContent id="accordion-1">
                An accordion is a UI component that lets users expand or
                collapse content sections. It helps reduce clutter while keeping
                information easily accessible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="accordion-2">
              <AccordionTrigger id="accordion-2">Accordion 2</AccordionTrigger>
              <AccordionContent id="accordion-2">
                An accordion is a UI component that lets users expand or
                collapse content sections. It helps reduce clutter while keeping
                information easily accessible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="accordion-3">
              <AccordionTrigger id="accordion-3">Accordion3</AccordionTrigger>
              <AccordionContent id="accordion-3">
                An accordion is a UI component that lets users expand or
                collapse content sections. It helps reduce clutter while keeping
                information easily accessible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* glassAccordion */}
        <div className="bg-transparent flex flex-col gap-3 items-center justify-center p-6">
          <GlassAccordion className="max-w-xl mx-auto">
            <GlassAccordionItem id="accordion-1">
              <GlassAccordionTrigger id="accordion-1">
                What is a Glass Accordion?
              </GlassAccordionTrigger>

              <GlassAccordionContent id="accordion-1">
                A glass accordion is a UI component styled with blur, inner
                shadows, and subtle motion to feel premium and tactile.
              </GlassAccordionContent>
            </GlassAccordionItem>
          </GlassAccordion>

          <GlassAccordion className="max-w-xl mx-auto">
            <GlassAccordionItem id="accordion-1  ">
              <GlassAccordionTrigger id="accordion-1">
                What is a Glass Accordion?
              </GlassAccordionTrigger>

              <GlassAccordionContent id="accordion-1">
                A glass accordion is a UI component styled with blur, inner
                shadows, and subtle motion to feel premium and tactile.
              </GlassAccordionContent>
            </GlassAccordionItem>
          </GlassAccordion>
        </div>

        {/* Alert Dialog */}
        <AlertDialog>
         <AlertDialogTrigger>
          <Button>Show Dialog</Button>
         </AlertDialogTrigger>

         <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Wanna See the the dialog?
            </AlertDialogTitle>
            <AlertDialogDescription>
              well, here it is. Enjoy your dialog
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => alert('Deleted')}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
         </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
