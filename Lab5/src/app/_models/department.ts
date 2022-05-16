export class Department {
  id: number;
  name: string;
  location: string;
  isEditing: boolean;
  constructor(id:number=0, name:string='', location:string='') {
    this.id = id;
    this.name = name;
    this.location = location;
    this.isEditing = false;
  }
}
