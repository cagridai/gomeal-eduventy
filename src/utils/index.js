import config from "@/config/environment";

export function generateApiEndpoint(url) {
  return `${config.urls.api}/${url}`;
}
