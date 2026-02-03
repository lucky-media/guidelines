import { slugify } from "@/utils/sidebar";

export type DropdownIdGroup = {
    trigger: string;
    content: string;
}

export type XProps = "x-show" | `x-transition${string}` | "x-cloak";

export const generateIdGroup = (base?: string): DropdownIdGroup => {
    if (!base) {
        base = Math.random().toString(36).slice(2, 9)
    }

    return {
        trigger: slugify(base, "dropdown-trigger"),
        content: slugify(base, "dropdown-content")
    };
};