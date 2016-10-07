import {Component, OnInit} from '@angular/core';
import {DocumentGS} from '../../../shared/document.model';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'gs-documents-list-item',
  templateUrl: './documents-list-item.component.html',
  styleUrls: ['./documents-list-item.component.scss']
})
export class DocumentsListItemComponent implements OnInit {

  @Input()
  document: DocumentGS;

  constructor() {
  }

  ngOnInit() {
  }

}
