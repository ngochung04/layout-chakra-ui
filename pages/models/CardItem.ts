interface Data {
  name: string;
  description: string;
  method: string;
}

export interface Item {
  id: number;
  name: string;
  content: string;
  image: string;
  percent: number;
  time: number;
  timeAgo: string;
  core: number;
  price: string;
  type: string;
  data: Data[];
}
