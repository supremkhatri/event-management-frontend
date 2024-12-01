import { getEventInfo } from "@/lib/utils";

const { month } = getEventInfo(); // Get the current month
const monthInFocus = new Date(new Date().getFullYear(), month - 1).toLocaleString("en-US", { month: "long" });

export { monthInFocus };