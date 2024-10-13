import { Form } from '@remix-run/react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'
import { appSettings } from '~/data'

export default function PdForm() {
  return (
    <Form method="post" className="grid gap-2">
      <div className="form-field">
        <Label htmlFor="position">Position</Label>
        <Input
          id="position"
          type="text"
          name="position"
          placeholder="Senior front-end developer"
        ></Input>
      </div>
      <div className="form-field">
        <Label>Industry</Label>
        <Select name="industry">
          <SelectTrigger>
            <SelectValue placeholder="Select an Industry" />
          </SelectTrigger>
          <SelectContent>
            {appSettings.industries.map((industry, index) => (
              <SelectItem key={index} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="form-field">
        <Label>Tone</Label>
        <Select name="tone">
          <SelectTrigger>
            <SelectValue placeholder="Select an copy tone" />
          </SelectTrigger>
          <SelectContent>
            {appSettings.tones.map((tone, index) => (
              <SelectItem key={index} value={tone}>
                {tone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" variant="default">
        Generate
      </Button>
    </Form>
  )
}

export interface pdFormData {
  position: string
  industry: string
  tone: string
}
