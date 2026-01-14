import { twMerge } from "tailwind-merge";
import clsx, {type ClassValue} from "clsx";

export default function cn(...classes: ClassValue[]) {return twMerge(clsx(classes)) }