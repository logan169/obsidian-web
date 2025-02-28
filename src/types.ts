import { AlertProps } from "@mui/material/Alert";

export interface OutputPreset {
  name: string;
  urlTemplate: string;
  contentTemplate: string;
  headers: Record<string, string>;
  method: "post" | "put" | "patch";
}

export interface ExtensionLocalSettings {
  version: string;
  apiKey: string;
  insecureMode?: boolean;
}

export interface ContentCache {
  url?: string;
  method?: "put" | "post" | "patch";
  compiledUrl?: string;
  headers?: Record<string, string>;
  compiledContent?: string;
}

export interface ExtensionSyncSettings {
  version: string;
  presets: OutputPreset[];
  searchEnabled: boolean;
  searchBackgroundEnabled: boolean;
  searchMatchMentionTemplate: string;
  searchMatchDirectTemplate: string;
}

export interface AlertStatus {
  severity: AlertProps["severity"];
  title: string;
  message: string;
}

export interface SandboxRenderRequest {
  command: "render";
  template: string;
  id: string;
  context: Record<string, any>;
}

export type SandboxRequest = SandboxRenderRequest;

export interface SandboxMessageBase {
  type: string;
  success: boolean;
}

export interface SandboxLoadedResponse extends SandboxMessageBase {
  type: "loaded";
}

export interface SandboxResponseBase extends SandboxMessageBase {
  type: "response";
}

export interface SandboxExceptionResponse extends SandboxResponseBase {
  request: SandboxRequest;
  success: false;
  message: string;
}

export interface SandboxSuccessResponse extends SandboxResponseBase {
  request: SandboxRequest;
  success: true;
}

export interface SandboxRenderResponse extends SandboxSuccessResponse {
  request: SandboxRenderRequest;
  rendered: string;
}

export type SandboxResponse = SandboxRenderResponse | SandboxExceptionResponse;

export interface SearchJsonResponseItem {
  filename: string;
  result: unknown;
}

export interface StatusResponse {
  status: string;
  versions: {
    obsidian: string;
    self: string;
  };
  service: string;
  authenticated: boolean;
}

export interface FileMetadataObject {
  tags: string[];
  frontmatter: Record<string, unknown>;
  path: string;
  content: string;
}


// returned array object structure
export interface SubCaptions {
  start: string;
  dur: string;
  text: string;
}