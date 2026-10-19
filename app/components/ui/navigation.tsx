import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Dashboard */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/">Dashboard</NavigationMenuLink>
        </NavigationMenuItem>

        {/* Survey */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Survey</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[500px] grid-cols-[180px_1fr] gap-3 p-4">
              <div className="flex flex-col justify-end rounded-md bg-muted p-4">
                <div className="text-lg font-medium">shadcn/ui</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Beautifully designed components built with Tailwind CSS.
                </p>
              </div>

              <div className="grid gap-2">
                <NavigationMenuLink
                  href="/surveys"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="text-sm font-medium">All surveys</div>
                  <p className="text-sm text-muted-foreground">
                    List all surveys
                  </p>
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/surveys/create"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="text-sm font-medium">Create survey</div>
                  <p className="text-sm text-muted-foreground">Create survey</p>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Archive */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Archive</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[500px] grid-cols-[180px_1fr] gap-3 p-4">
              <div className="flex flex-col justify-end rounded-md bg-muted p-4">
                <div className="text-lg font-medium">shadcn/ui</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Beautifully designed components built with Tailwind CSS.
                </p>
              </div>

              <div className="grid gap-2">
                <NavigationMenuLink
                  href="/surveys"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="text-sm font-medium">All surveys</div>
                  <p className="text-sm text-muted-foreground">
                    List all surveys
                  </p>
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/surveys/create"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="text-sm font-medium">Create survey</div>
                  <p className="text-sm text-muted-foreground">Create survey</p>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Profile */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="grid w-[500px] grid-cols-[180px_1fr] gap-3 p-4">
              <div className="flex flex-col justify-end rounded-md bg-muted p-4">
                <div className="text-lg font-medium">shadcn/ui</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Beautifully designed components built with Tailwind CSS.
                </p>
              </div>

              <div className="grid gap-2">
                <NavigationMenuLink
                  href="/surveys"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="text-sm font-medium">All surveys</div>
                  <p className="text-sm text-muted-foreground">
                    List all surveys
                  </p>
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/surveys/create"
                  className="block rounded-md p-3 hover:bg-accent"
                >
                  <div className="text-sm font-medium">Create survey</div>
                  <p className="text-sm text-muted-foreground">Create survey</p>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
