"use client";

import { LogOut, Settings, User } from "lucide-react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import BlocksPage from "./Pages/BlocksPage";
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
  Loader,
  Dropdown,
  DropdownItem,
  SlideText,
  Drawer,
  AuthForm,
  MagicCursorArea,
  InteractiveToast,
} from "../src";

import ComponentPreview from "../src/docs/ComponentPreview";
import { useEffect, useState } from "react";

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

  // drawe's state
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // For toast
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      function endShow() {
        setTimeout(() => setShow(false), 15000);
      }
      endShow();
    }
  }, [show]);

  return (
    <main className="relative min-h-screen w-full  dark:bg-zinc-950 dark:text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />

      <div className="fixed top-0 left-0 z-10 right-0 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sxm shadow"></div>

      {/* Navigation */}
      <nav className="relative top-0 inset-x-0 bg-transparent  px-40 py-5 backdrop-blur-2xl w-full flex justify-between items-center ">
        <div className="reline flex items-center gap-2">
          <img
            className="size-6 md:size-10 overflow-hidden rounded-lg border dark:border-neutral-600"
            src="example/public/Reline_logo_black.png"
            alt="Reline"
          />
          <h1 className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-100">
            Reline UI
          </h1>
        </div>
        <div className="button relative flex items-center gap-4">
          <ThemeToggle />
          <Button onClick={() => setOpenMenu(true)} className={`pb-0.5`}>
            <SlideText text={"Menu"} />
          </Button>
        </div>
      </nav>
      <nav>
        {/* For Drawer */}
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
          <div className="  h-screen  p-6 flex flex-col">
            {/* 1. Top Action Section */}
            <div className="flex justify-end">
              <Button
                variant="danger"
                onClick={() => setOpenMenu(false)}
                className="px-4 pt-2 pb-0.5 text-sm"
              >
                <SlideText text="Close Menu" />
              </Button>
            </div>

            {/* 2. Navigation Links */}
            <nav className="mt-10 flex flex-col gap-6">
              <NavLink
                to="/"
                onClick={() => setOpenMenu(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors  pt-2 pb-0.5 rounded-md
          ${isActive ? " text-neutral-500" : "hover:text-neutral-600"}
          dark:text-neutral-200 dark:hover:text-neutral-300
          `
                }
              >
                <SlideText text={"Components"} />
              </NavLink>

              <NavLink
                to="/blocks"
                onClick={() => setOpenMenu(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors p-2 rounded-md
          ${isActive ? " text-neutral-500" : "hover:text-neutral-600"}
          dark:text-neutral-200 dark:hover:text-neutral-300
          `
                }
              >
                <SlideText text={"Blocks"} />
              </NavLink>
            </nav>
          </div>
        </Drawer>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-10 flex flex-col gap-16 pt-16">
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
                  {/* ------GlassButton------ */}
                  <GlassButton>Glass Button</GlassButton>
                  {/* Slider button */}
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
                      <AccordionTrigger id="a1">
                        What is Reline?
                      </AccordionTrigger>
                      <AccordionContent id="a1">
                        Reline is an open-source React component library focused
                        on modern UI patterns.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem id="a2">
                      <AccordionTrigger id="a2">
                        Is it customizable?
                      </AccordionTrigger>
                      <AccordionContent id="a2">
                        Yes, all components are unstyled primitives enhanced
                        with Tailwind.
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
                        Glass UI uses blur, translucency and depth for a premium
                        feel.
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
              <ComponentPreview
                title="Tabs"
                docs="/src/components/Tabs/docs.md"
              >
                <div className="flex flex-col gap-6 items-center w-full">
                  <TabContext defaultValue="tab1">
                    <TabList>
                      <Tab value="tab1">Tab One</Tab>
                      <Tab value="tab2">Tab Two</Tab>
                    </TabList>

                    <TabPanel value="tab1">
                      This is the content of Tab One.
                    </TabPanel>

                    <TabPanel value="tab2">
                      This is the content of Tab Two.
                    </TabPanel>
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
              {/* -------------------------slide text-------------- */}
              <ComponentPreview>
                <div>
                  <h3 className="text-3xl font-medium cursor-pointer">
                    <SlideText text={"Hover me to see the magic"} />
                  </h3>
                </div>
              </ComponentPreview>
              {/* ----------------Bento testimonials------------------------ */}
              <ComponentPreview
                docs={"src/components/Testimonials/docs.md"}
                title={"Bento Testimonial"}
              >
                <BentoTestimonials />
              </ComponentPreview>
              {/* ------------------Loader-------------------- */}
              <ComponentPreview title="Loader">
                <div className="w-full h-full flex justify-center items-center">
                  <Loader
                    svgPath="M100,100 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0 M100,25 L100,175 M25,100 L175,100 M46.97,46.97 L153.03,153.03 M46.97,153.03 L153.03,46.97 M100,100 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0 M100,50 L120,80 L150,100 L120,120 L100,150 L80,120 L50,100 L80,80 Z"
                    size={120}
                    color="#6366f1"
                  />
                </div>
              </ComponentPreview>
              {/* --------------dropdown---------------------- */}
              <ComponentPreview
                title={"Dropdown"}
                docs="src/components/Dropdown/docs.md"
              >
                <div className="w-full h-full flex justify-center items-center">
                  <Dropdown label="Account">
                    <DropdownItem icon={User} href="/profile">
                      Profile
                    </DropdownItem>

                    <DropdownItem icon={Settings} href="/settings">
                      Settings
                    </DropdownItem>

                    <DropdownItem
                      icon={LogOut}
                      color="danger"
                      onClick={() => alert("Logged out")}
                    >
                      Logout
                    </DropdownItem>
                  </Dropdown>
                </div>
              </ComponentPreview>
              {/* -------------------------Drawer---------------------------- */}
              <ComponentPreview
                title={"Drawer"}
                docs={"src/components/Drawer/docs.md"}
              >
                <div className="w-full h-full flex justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="px-4 pt-2 pb-0.5 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-lg"
                  >
                    <SlideText text={"Open Drawer"} />
                  </button>

                  <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    direction="right"
                  >
                    <div className="flex h-full flex-col">
                      {/* Header */}
                      <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                        <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                          Account Settings
                        </h2>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                          Manage your profile preferences, notifications and
                          security settings.
                        </p>
                      </div>

                      {/* Body */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Profile Section */}
                        <div>
                          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Profile
                          </h3>
                          <div className="mt-3 space-y-3">
                            <button className="w-full text-left px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-neutral-700 dark:text-neutral-300 text-sm">
                              Edit Profile
                            </button>
                            <button className="w-full text-left px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-neutral-700 dark:text-neutral-300 text-sm">
                              Change Password
                            </button>
                          </div>
                        </div>

                        {/* Notifications */}
                        <div>
                          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Notifications
                          </h3>

                          <div className="mt-3 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                Email Updates
                              </span>
                              <input
                                type="checkbox"
                                className="accent-neutral-900 dark:accent-white"
                              />
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                Push Notifications
                              </span>
                              <input
                                type="checkbox"
                                className="accent-neutral-900 dark:accent-white"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Danger Zone */}
                        <div>
                          <h3 className="text-sm font-medium text-red-600 dark:text-red-400">
                            Danger Zone
                          </h3>
                          <button className="mt-3 w-full text-left px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors text-red-600 dark:text-red-400 text-sm">
                            Delete Account
                          </button>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 flex gap-3">
                        <button
                          onClick={() => setOpen(false)}
                          className="flex-1 px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Cancel
                        </button>
                        <button className="flex-1 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition text-sm font-medium">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </Drawer>
                </div>
              </ComponentPreview>
              {/* ----------------------form-------------------------- */}
              <ComponentPreview
                title={"Form"}
                docs={"src/components/Form/docs.md"}
              >
                <AuthForm />
              </ComponentPreview>

              {/* --------------------------------Magic curser----------------------------- */}
              {/* Only for this component */}
              <ComponentPreview title={"Curser Effect"}>
                <MagicCursorArea className="h-100 flex justify-center items-center">
                  <h3 className="text-neutral-600 dark:text-neutral-300 font-medium text-xl md:text-2xl lg:text-4xl">
                    Move Your Mouse...
                  </h3>
                </MagicCursorArea>
              </ComponentPreview>

              {/* ----------------------Toast------------------ */}
              <ComponentPreview>
                <Button onClick={() => setShow(true)}>Show Toast</Button>

                {show && <InteractiveToast />}
              </ComponentPreview>
            </div>
          }
        />
        <Route path="/blocks" element={<BlocksPage />} />
      </Routes>
    </main>
  );
}
