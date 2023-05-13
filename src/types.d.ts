export type UserRole = "visitor" | "curator" | "admin";

export type Artwork = {
  id: number;
  title_de: string | null;
  title_en: string | null;
  artist: string | null;
  year: number | null;
  work_no: string | null;
  width: number | null;
  height: number | null;
  mat_tech_de: str | null;
  mat_tech_en: str | null;
  keywords: str[] | null;
  linked_works: number[] | null;
  link_description: string | null;
  institution: string | null;
};
