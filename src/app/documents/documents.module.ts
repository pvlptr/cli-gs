import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentsSearchComponent} from "./documents-search/documents-search.component";
import {DocumentsListComponent} from "./documents-search/documents-list/documents-list.component";
import {DocumentsListItemComponent} from "./documents-search/documents-list/documents-list-item/documents-list-item.component";
import {DocumentsFacetComponent} from "./documents-search/documents-facets/documents-facet/documents-facet.component";
import {DocumentsFacetsComponent} from "./documents-search/documents-facets/documents-facets.component";
import {documentsRouting} from "./documents.routes";

@NgModule({
  imports: [
    CommonModule,
    documentsRouting
  ],
  declarations: [DocumentsSearchComponent, DocumentsListComponent, DocumentsListItemComponent, DocumentsFacetsComponent, DocumentsFacetComponent],
  exports: [DocumentsSearchComponent]
})
export class DocumentsModule {
}
