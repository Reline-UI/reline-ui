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
  TooltipAvatar,
  Menu,
  GlassProfileCard,
  RelineSlider,
  RelineSliderPrev,
  RelineSliderNext,
  RelineCard,
  SliderButton,
  RelineBentoGrid,
  BlurStaggeredText,
  StaggeredText,
  BentoTestimonials,
} from "../src";

import ComponentPreview from "../src/docs/ComponentPreview";

export default function App() {
  // Bento card data
  const bentoItems = [
    {
      title: "25+ Components Shipping",
      description:
        "Buttons, Tabs, Carousels, Tooltips, Glass Cards — production ready.",
      large: true,
    },
    {
      title: "Zinc Native Theming",
      description: "Designed with zinc-50 → zinc-950 system consistency.",
    },
    {
      title: "Micro Interactions",
      description: "Subtle motion. System-driven animation.",
    },
    {
      title: "Open Governance",
      description: "Community powered. Carefully curated evolution.",
      large: true,
    },
  ];
  return (
    <main className="relative min-h-screen w-full p-8 pt-20 dark:bg-zinc-950 dark:text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />

      <div className="fixed top-0 left-0 z-10 right-0 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sxm shadow">
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
            <SliderButton>Follow Me!</SliderButton>
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
          docs="/src/components/MediaCard/docs.md"
        >
          <div className="flex justify-between items-center flex-wrap">
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

            <GlassProfileCard />
          </div>
        </ComponentPreview>
        {/* ---------Tooltip----------- */}
        <ComponentPreview
          title="Tooltips"
          docs="/src/components/Tooltip/docs.md"
        >
          <div className="flex flex-wrap gap-0.5 p-10 justify-center items-center mt-5">
            <a href="https://x.com/pauldebajoyti">
              <TooltipAvatar
                image="https://plus.unsplash.com/premium_photo-1658527200977-60838ec5e428?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Debajoyti Paul"
                designation="UI Engineer"
              />
            </a>

            <TooltipAvatar
              image="https://images.unsplash.com/photo-1521296797187-726205347ca9?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Mercédès Herrera"
              designation="Product Maneger"
            />
            <TooltipAvatar
              image="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Edmond Dantès"
              designation="Product Designer"
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          docs="/src/components/NavigationMenu/docs.md"
          title={"Menu"}
        >
          <div className="flex items-center justify-between relative z-50">
            <Menu />
          </div>
        </ComponentPreview>

        {/* ----------------Slider----------------- */}
        <ComponentPreview
          title={"Slider"}
          docs={"src/components/Slider/docs.md"}
        >
          <div className=" py-24">
            <RelineSlider>
              <RelineCard
                image="https://i.pinimg.com/736x/2b/61/60/2b6160ed0838b820be63025f45593acd.jpg"
                subtitle="Latest Component"
                title="Logo Carousel"
                description="Headless logo carousel animation."
              />

              <RelineCard
                image="https://i.pinimg.com/736x/d8/92/95/d8929536feb879675921ecfa39f00c95.jpg"
                subtitle="Featured"
                title="Modern Layout"
                description="Smooth dark UI components powered by Framer Motion."
              />

              <RelineCard
                image="https://i.pinimg.com/1200x/65/37/86/653786a94632faf88fa785a988f379f6.jpg"
                subtitle="New Release"
                title="Interactive Slider"
                description="Ultra smooth animation with depth and focus."
              />

              <RelineSliderPrev />
              <RelineSliderNext />
            </RelineSlider>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title={"BentoGrid"}
          docs={"src/components/BentoGrid/docs.md"}
        >
          <RelineBentoGrid items={bentoItems} />
        </ComponentPreview>
        {/* ------------------Text Effects animations------------ */}
        {/* -----------Staggered effect------------------ */}
        <ComponentPreview
          docs={"src/components/TextEffects/docs.md"}
          title={"Staggered Text Aimation"}
        >
          <StaggeredText
            text="Reline makes motion feel premium."
            className="text-4xl font-bold"
            type="word"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          />
        </ComponentPreview>

        {/* -----------------Blur effect---------------------- */}
        <ComponentPreview title={"Blur Text Effect"}>
          <BlurStaggeredText
            text="Build premium UI faster."
            className="text-5xl font-bold tracking-tight"
            type="word"
            amount={1}
            viewport={{ once: false }}
          />
        </ComponentPreview>

        {/* ----------------Bento testimonials------------------------ */}
        <ComponentPreview
          docs={"src/components/Testimonials/docs.md"}
          title={"Bento Testimonial"}
        >
          <BentoTestimonials />
        </ComponentPreview>
      </div>
    </main>
  );
}
