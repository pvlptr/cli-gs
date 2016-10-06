import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import {DocumentsSearchComponent} from "./documents-search/documents-search.component";

const documentsRoutes: Routes = [
  {
    path: 'documents',
    component: DocumentsSearchComponent
  }
];

export const documentsRouting: ModuleWithProviders = RouterModule.forChild(documentsRoutes);
