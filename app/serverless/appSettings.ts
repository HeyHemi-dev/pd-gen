import { selectFields, SelectField } from '~/data'
import { db } from './db/kysely'

console.log(db)

// interface Database {
//   select_fields: SelectField[]
//   select_items: SelectItem[]
//   prompts: Prompt[]
// }
// interface SelectFieldData {
//   name: string
//   collection: string
//   items: number | null // Foreign key to SelectItem
//   example: string | null // Optional
// }
// interface SelectField extends SelectFieldData {
//   id: number
// }
// interface SelectItemData {
//   name: string
// }
// interface SelectItem extends SelectItemData {
//   id: number
// }
// interface PromptData {
//   text: string
// }
// interface Prompt extends PromptData {
//   id: number
// }

export async function getSelectFields(): Promise<SelectField[] | undefined> {
  try {
    return selectFields
  } catch (error) {
    console.log(error)
  }
}

export async function getSelectField(
  fieldName: string
): Promise<SelectField | undefined> {
  try {
    // return await appSettings.lrange(list, 0, -1)
    return selectFields.find(
      (selectField) =>
        selectField.name.toLowerCase() === fieldName.toLowerCase()
    )
  } catch (error) {
    console.log(error)
  }
}

export async function addSelectItem(fieldName: string, item: string) {
  try {
    const selectField = await getSelectField(fieldName)
    if (!selectField) {
      throw new Response('Not Found', { status: 404 })
    }
    // return await appSettings.lpush(list, item)
    return selectField.items.push(item)
  } catch (error) {
    console.log(error)
  }
}
