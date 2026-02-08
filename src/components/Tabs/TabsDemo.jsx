"use client";

import { Tab } from "./Tab";
import { TabContext } from "./TabContext";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";

export default function TabsDemo() {
  return (
    <div className="p-10">
      <TabContext defaultValue="account">
        <TabList>
          <Tab value="account">Account</Tab>
          <Tab value="password">Password</Tab>
          <Tab value="security">Security</Tab>
          <Tab value="billing">Billing</Tab>
          <Tab value="notifications">Notifications</Tab>
        </TabList>

        <TabPanel value="account">
          <div className="text-sm">Manage your account settings.</div>
        </TabPanel>

        <TabPanel value="password">
          <div className="text-sm">Update your password.</div>
        </TabPanel>

        <TabPanel value="security">
          <div className="text-sm">Security & 2FA controls.</div>
        </TabPanel>

        <TabPanel value="billing">
          <div className="text-sm">Billing history & invoices.</div>
        </TabPanel>

        <TabPanel value="notifications">
          <div className="text-sm">Notification preferences.</div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
