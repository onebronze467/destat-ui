import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { Button } from "./button";
import { rabbykit } from "~/root";

export default function Navigation() {
  return (
    <nav className="fixed top-0 right-0 left-0">
      <div className="flex w-screen items-center justify-between py-5 px-5">
        <Link to="/" className="text-lg font-bold">
          DESTAT
        </Link>
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
                      href="/survey/all"
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">All surveys</div>
                      <p className="text-sm text-muted-foreground">
                        List all surveys
                      </p>
                    </NavigationMenuLink>

                    <NavigationMenuLink
                      href="/survey/create"
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Create survey</div>
                      <p className="text-sm text-muted-foreground">
                        Create survey
                      </p>
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
                      href="/archive/finished"
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">
                        Finished surveys
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Finished surveys
                      </p>
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
                      href="/profile/surveys"
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">My surveys</div>
                      <p className="text-sm text-muted-foreground">
                        My surveys
                      </p>
                    </NavigationMenuLink>

                    <NavigationMenuLink
                      href="/profile/responses"
                      className="block rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">My responses</div>
                      <p className="text-sm text-muted-foreground">
                        My responses
                      </p>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          onClick={() => {
            rabbykit.open();
          }}
        >
          Connect
        </Button>
      </div>
    </nav>
  );
}
