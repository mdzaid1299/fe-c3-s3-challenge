import { Component, OnInit } from '@angular/core';
import { NOTES } from '../models/notes';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  saveNote(id:string,title:string,content:string){
    let cardadd ={
      id: parseInt(id),
      title: title,
      content: content
    }
    alert('new item added')
    NOTES.push(cardadd)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
