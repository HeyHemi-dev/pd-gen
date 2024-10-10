import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'

export default function AddIndustry() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="secondary">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Industry</DialogTitle>
          <DialogDescription>Create a new industry option</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="industry" className="sr-only">
              Industry
            </Label>
            <Input id="industry" placeholder="tech" />
          </div>
        </div>
        <DialogFooter className="justify-end">
          <Button type="button" variant="default">
            Add
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
