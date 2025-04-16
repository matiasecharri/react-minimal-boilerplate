type ApiNextPrev = string | null;

export interface ApiInfo {
  count: string;
  pages: number;
  next: ApiNextPrev;
  prev: ApiNextPrev;
}

type ApiCharacterStatus = "Alive" | "Dead" | "unknown";

type ApiCharacterGender = "Male" | "Female" | "unknown";

interface ApiNameAndUrl {
  name: string;
  url: string;
}

interface ApiOrigin extends ApiNameAndUrl {}
interface ApiLocation extends ApiNameAndUrl {}

export interface ApiCharacter {
  id: number;
  name: string;
  status?: ApiCharacterStatus;
  species?: string;
  type?: string;
  gender?: ApiCharacterGender;
  origin?: ApiOrigin;
  location?: ApiLocation;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface ApiResponse {
  info: ApiInfo;
  results: ApiCharacter[];
}
