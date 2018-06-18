import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {PublishingComponent} from "./publishing/publishing.component";
import {PublishingViewComponent} from "./publishing-view/publishing-view.component";
import {PublishingSaveComponent} from "./publishing-save/publishing-save.component";

const routes: Routes = [
    {path: 'publishing', component: PublishingComponent},
    {path: 'publishing/save', component: PublishingSaveComponent},
    {path: 'publishing/:id/edit', component: PublishingSaveComponent},
    {path: 'publishing/:id/view', component: PublishingViewComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class PublishingRoutingModule {
}
