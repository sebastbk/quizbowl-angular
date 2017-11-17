export class Question {
  id?: number;
  created_by?: string;
  created_on?: Date;
  modified_on?: Date;
  collections?: number[];
  difficulty: number = 1;
  text: string = '';
  answer: string = '';
  alternate_answer: string = '';
  answer_widget: string = 'text';
  tags: string[] = [];
}

export const difficulties = [
  { value: 1, name: '1' },
  { value: 2, name: '2' },
  { value: 3, name: '3' },
  { value: 4, name: '4' },
  { value: 5, name: '5' }
]

export const answer_widgets = [
  { value: 'text', name: 'Text' },
  { value: 'number', name: 'Number' },
  { value: 'date', name: 'Date' },
  { value: 'time', name: 'Time' }
]