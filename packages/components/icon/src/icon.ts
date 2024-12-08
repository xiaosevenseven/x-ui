import { PropType } from "vue";

export const iconProps = {
    color: String,
    size: [String, Number] as PropType<number | string>
} as const 