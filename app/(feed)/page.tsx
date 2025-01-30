import { NotesFeed } from "@/components/notes/notes-feed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DialogComponent } from "@/components/editor/dialog-component";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center overflow-y-auto">
      <div>
        <DialogComponent />
      </div>
      <Tabs
        defaultValue="general"
        className="w-full flex flex-col items-center"
      >
        <TabsList>
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="personal">Pessoal</TabsTrigger>
        </TabsList>
        <div className="w-full px-10">
          <TabsContent value="general">
            <NotesFeed type="general" />
          </TabsContent>
          <TabsContent value="personal">
            Componente do feed personal
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
