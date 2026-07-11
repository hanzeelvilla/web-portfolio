export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: responsibility[];
}

export type responsibility = {
  id: string;
  text: string;
};
