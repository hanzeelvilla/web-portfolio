export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: responsibility[];
}

type responsibility = {
  id: string;
  text: string;
};
