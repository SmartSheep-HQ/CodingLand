import { StageObject, type StagePopupOptions, Vector } from "../object"
import { Map } from "./map"
import { ResourceMiner } from "@/stage/unit/miner"

export class MapChunk extends StageObject {
  public type = "codingland.maps.chunk"

  constructor(position: Vector) {
    super()
    this.position = position
    this.visible = true
    this.element?.classList.add("sgt-map-chunk")
    this.mountElement(document.getElementsByClassName("sgt-map")[0] as HTMLElement)
  }

  renderActions(): StagePopupOptions {
    return {
      icon: (this.children[0] as any)?.texture ?? `<span class="mdi mdi-help-rhombus"></span>`,
      title: (this.children[0] as any)?.attributes.name ?? "Area",
      subtitle: `At ${this.position.toString()}`,
      caller: this,
      callbacks: {
        "build.miner": () => this.setChild(1, new ResourceMiner(this.element as HTMLElement))
      }
    }
  }

  render() {
    if (this.element && this.parent) {
      this.element.style.display = "flex"
      this.element.style.justifyContent = "center"
      this.element.style.placeItems = "center"
      this.element.style.border = "1px solid #e4e4e4"
      this.element.style.width = `${Map.chunkSize}px`
      this.element.style.height = `${Map.chunkSize}px`
      this.element.style.position = "absolute"
      this.element.style.left = `${(this.position.x ?? 0) * Map.chunkSize}px`
      this.element.style.top = `${(this.position.y ?? 0) * Map.chunkSize}px`
    }
  }
}
