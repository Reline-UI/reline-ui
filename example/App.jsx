"use client";

import {
  Button,
  GlassButton,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  GlassAccordion,
  GlassAccordionItem,
  GlassAccordionTrigger,
  GlassAccordionContent,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  Callout,
  Tab,
  TabList,
  TabPanel,
  TabContext,
  ThemeToggle,
  MediaCard,
  MediaBlurCard,
} from "../src";

import ComponentPreview from "../src/docs/ComponentPreview";

export default function App() {
  return (
    <main className="relative min-h-screen w-full p-8 pt-20 dark:bg-zinc-950 dark:text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />

      <div className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sxm shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-center flex items-center gap-10 justify-center">
            Reline UI
            <ThemeToggle />
          </h1>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-16">
        {/* ---------------- Buttons ---------------- */}
        <ComponentPreview
          title="Button"
          docs="/src/components/Buttons/Button/docs.md"
        >
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4 flex-wrap justify-center">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="success">Success</Button>
            </div>

            <GlassButton>Glass Button</GlassButton>
          </div>
        </ComponentPreview>

        {/* ---------------- Accordion ---------------- */}
        <ComponentPreview
          title="Accordion"
          docs="/src/components/Accordion/docs.md"
        >
          <div className="flex flex-col gap-4 items-center w-full">
            <Accordion className="max-w-xl w-full">
              <AccordionItem id="a1">
                <AccordionTrigger id="a1">What is Reline?</AccordionTrigger>
                <AccordionContent id="a1">
                  Reline is an open-source React component library focused on
                  modern UI patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem id="a2">
                <AccordionTrigger id="a2">Is it customizable?</AccordionTrigger>
                <AccordionContent id="a2">
                  Yes, all components are unstyled primitives enhanced with
                  Tailwind.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ComponentPreview>

        {/* ---------------- Glass Accordion ---------------- */}
        <ComponentPreview
          title="Glass Accordion"
          docs="/src/components/GlassAccordion/docs.md"
        >
          <div className="flex flex-col gap-4 items-center w-full">
            <GlassAccordion className="max-w-xl w-full">
              <GlassAccordionItem id="g1">
                <GlassAccordionTrigger id="g1">
                  What is Glass UI?
                </GlassAccordionTrigger>
                <GlassAccordionContent id="g1">
                  Glass UI uses blur, translucency and depth for a premium feel.
                </GlassAccordionContent>
              </GlassAccordionItem>
            </GlassAccordion>
          </div>
        </ComponentPreview>

        {/* ---------------- Alert Dialog ---------------- */}
        <ComponentPreview
          title="Alert Dialog"
          docs="/src/components/AlertDialogue/docs.md"
        >
          <div className="flex flex-col gap-4 items-center">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Open Dialog</Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete item?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => alert("Deleted")}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </ComponentPreview>

        {/* ---------------- Callout ---------------- */}
        <ComponentPreview
          title="Callout"
          docs="/src/components/Callout/docs.md"
        >
          <div className="flex flex-col gap-4 items-center">
            <Callout.Root>
              <Callout.Text>
                This is a contextual callout used to highlight important
                information.
              </Callout.Text>
            </Callout.Root>

            <Callout.Root variant="info">
              <Callout.Text>
                This is a contextual callout used to highlight important
                information.
              </Callout.Text>
            </Callout.Root>

            <Callout.Root variant="destructive">
              <Callout.Text>
                This is a contextual callout used to highlight important
                information.
              </Callout.Text>
            </Callout.Root>

            <Callout.Root variant="warning">
              <Callout.Text>
                This is a contextual callout used to highlight important
                information.
              </Callout.Text>
            </Callout.Root>

            <Callout.Root variant="success">
              <Callout.Text>
                This is a contextual callout used to highlight important
                information.
              </Callout.Text>
            </Callout.Root>
          </div>
        </ComponentPreview>

        {/* ---------------- Tabs ---------------- */}
        <ComponentPreview title="Tabs" docs="/src/components/Tabs/docs.md">
          <div className="flex flex-col gap-6 items-center w-full">
            <TabContext defaultValue="tab1">
              <TabList>
                <Tab value="tab1">Tab One</Tab>
                <Tab value="tab2">Tab Two</Tab>
              </TabList>

              <TabPanel value="tab1">This is the content of Tab One.</TabPanel>

              <TabPanel value="tab2">This is the content of Tab Two.</TabPanel>
            </TabContext>
          </div>
        </ComponentPreview>

        {/*------------------ Cards----------------*/}
        <ComponentPreview
          title="Media Card"
          docs="/src/components/Tabs/docs.md"
        >
          <MediaCard
            mediaType="video"
            mediaSrc="https://videos.pexels.com/video-files/857195/857195-hd_1280_720_25fps.mp4"
            avatar="https://images.pexels.com/photos/27603695/pexels-photo-27603695.jpeg"
            title="Debajoyti Paul"
            subtitle="@pauldebajoyti"
            actions={
              <a href="https://x.com/pauldebajoyti">
                <Button className="rounded-full w-full">Follow</Button>
              </a>
            }
            description={"Frontend developer"}
          />

          {/* <MediaBlurCard
            title="Blur Card"
            subtitle="Media-first layout"
            mediaType="image"
            mediaSrc="https://images.pexels.com/photos/2078266/pexels-photo-2078266.jpeg"
          /> */}
        </ComponentPreview>
      </div>
    </main>
  );
}
