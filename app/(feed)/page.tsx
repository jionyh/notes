import { Feed } from "@/components/notes/feed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DialogComponent } from "@/components/editor/dialog-component";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-full pt-6">
      <div className="">
        <DialogComponent />
      </div>
      <Tabs
        defaultValue="public"
        className="w-full flex flex-col items-center h-full"
      >
        <TabsList className="">
          <TabsTrigger value="public">Notas Públicas</TabsTrigger>
          <TabsTrigger value="private">Notas Privadas</TabsTrigger>
        </TabsList>
        <div className="w-full px-10 mb-5 overflow-y-hidden ">
          <ScrollArea className=" w-full rounded-md  h-full">
            <TabsContent value="public" className="">
              <Feed type="public" />
            </TabsContent>
            <TabsContent value="private">
              <Feed type="private" />
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </div>
  );
}
