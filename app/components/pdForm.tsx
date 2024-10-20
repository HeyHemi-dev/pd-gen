import { Form } from '@remix-run/react'
import { z } from 'zod'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/ta-button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'
import { SelectField } from '~/data'

export const pdFormSchema = z.object({
  position: z
    .string({
      required_error: 'Required field',
      invalid_type_error: 'Must be a text string',
    })
    .min(2, { message: '2 characters minimum' })
    .max(60, { message: '60 characters max' })
    .regex(/^[A-Za-z0-9\-,'".():;/& ]*$/, {
      message: 'Contains invalid characters',
    }),
  industry: z.string().min(1, { message: 'pick an option' }),
  tone: z.string().min(1, { message: 'pick an option' }),
  experience: z.string().min(1, { message: 'pick an option' }),
})

export interface PdFormFields {
  position: string
  location?: string
  industry: string
  company?: string
  positionType: string
  experience: string
  salary?: string
  requirements?: string
  opportunities?: string
  tone: string
}

export default function PdForm({
  selectFields,
}: {
  selectFields: SelectField[]
}) {
  const [form, fields] = useForm({
    id: 'pdForm',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: pdFormSchema })
    },
    shouldValidate: 'onBlur',
  })

  return (
    <Form method="post" id={form.id} className="grid gap-8">
      <div className="grid gap-4">
        <div className="form-field">
          <Label className="capitalize" htmlFor="position">
            Position
          </Label>
          <Input
            id="position"
            type="text"
            name={fields.position.name}
            placeholder="Senior front-end developer"
          ></Input>
          <p className="text-sm text-ta">{fields.position.errors}</p>
        </div>
        {selectFields.map((selectField, index) => (
          <div key={index} className="form-field">
            <Label className="capitalize">{selectField.name}</Label>
            <Select name={selectField.name.toLowerCase()}>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${selectField.name}`} />
              </SelectTrigger>
              <SelectContent>
                {selectField.items.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <Button type="submit" variant="default" className="">
        Generate
      </Button>
    </Form>
  )
}
