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
import { Form } from '@remix-run/react'

export default function AddIndustry() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="justify-self-start">
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Form method="post" className="grid gap-y-4">
          <DialogHeader>
            <DialogTitle>Add Industry</DialogTitle>
            <DialogDescription>Create a new industry option</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="optionName" className="sr-only">
              Industry Name
            </Label>
            <Input
              id="optionName"
              type="text"
              name="optionName"
              placeholder="tech"
            />
            <input type="hidden" name="optionType" value="industry"></input>
          </div>
          <DialogFooter className="justify-end">
            <Button
              type="submit"
              variant="default"
              name="intent"
              value="ADD-OPTION"
            >
              Add
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export interface AddOption {
  optionName: string
  optionType: string
  intent: string
}
