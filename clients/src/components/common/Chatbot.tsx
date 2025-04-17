import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Chat from "./Chat"
import { MessageSquare } from "lucide-react"

export function Chatbot() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="fixed bottom-10 right-10 h-16 w-16  bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <MessageSquare className="h-16 w-16 rounded-full" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-full h-[450px] p-4 bg-white rounded-lg shadow">
      <Chat />
      </DialogContent>
    </Dialog>
  )
}
