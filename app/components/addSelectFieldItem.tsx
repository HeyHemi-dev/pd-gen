import { Button } from '~/components/ui/ta-button'
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
import { SelectField } from '~/data'

export default function AddSelectItem({
  selectField,
}: {
  selectField: SelectField
}) {
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
            <DialogTitle className="capitalise">
              Add {selectField.name}
            </DialogTitle>
            <DialogDescription>
              Create a new {selectField.name} option
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="optionName" className="sr-only capitalise">
              {selectField.name} name
            </Label>
            <Input
              id="optionName"
              type="text"
              name="optionName"
              placeholder={selectField.example}
            />
            <input type="hidden" name="optionType" value="industry"></input>
          </div>
          <DialogFooter className="justify-end">
            <Button
              type="submit"
              variant="default"
              name="intent"
              value="ADD-OPTION"
              className="capitalise"
            >
              Add
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="capitalise">
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
