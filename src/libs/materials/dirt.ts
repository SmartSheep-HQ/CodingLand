import type { MaterialType } from "@/libs/material"
import { Material } from "@/libs/material"
import { defaults, join } from "@/libs"

export class DirtMaterial extends Material {
  id = join(defaults.namespace, "materials", "dirt")

  static attributes = {
    standable: false,
    unbreakable: false,
    replaceable: false,
    hardness: 10
  }

  static style = {
    color: "#815c3f"
  }

  static type: MaterialType = "solid"
}