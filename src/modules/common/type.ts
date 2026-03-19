import type { paths } from "@/schema";

// Response obj
export type GetProductSuccessResponse =
  paths["/products"]["get"]["responses"][200]["content"]["application/json"];
