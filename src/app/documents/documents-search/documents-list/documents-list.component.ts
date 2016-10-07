import {Component, OnInit} from '@angular/core';
import {DocumentGS} from '../../shared/document.model';
import {DocumentsService} from "../../shared/documents.service";
import {documentsRouting} from "../../documents.routes";
import {error} from "util";

@Component({
  selector: 'gs-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentsListComponent implements OnInit {

  errorMessage: string;
  documents: DocumentGS[];

  constructor(private documentsService: DocumentsService){

  }

  ngOnInit() {
     this.getDocuments();
  }

  getDocuments(){
    this.documentsService.getDocuments()
      .subscribe(
        documents => this.documents = documents,
        error => this.errorMessage = error
      );
  }

}
