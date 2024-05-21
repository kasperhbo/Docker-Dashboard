import {inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoPanelRowComponent} from "./info-panel/info-panel-row/info-panel-row.component";
import {InfoPanelComponent} from "./info-panel/info-panel/info-panel.component";
import {InfoPanelFooterComponent} from "./info-panel/info-panel-footer/info-panel-footer.component";
import {NgIcon, provideNgIconLoader} from "@ng-icons/core";
import {HttpClient} from "@angular/common/http";
import {TextWithIconComponent} from "./icons/text-with-icon/text-with-icon.component";
import {SnippetComponent} from "./snippet/snippet.component";


@NgModule({
    imports: [
        CommonModule,
        NgIcon
    ],
    exports: [
        InfoPanelComponent,
        InfoPanelRowComponent,
        InfoPanelFooterComponent,
        TextWithIconComponent,
        SnippetComponent
    ],
    declarations: [InfoPanelComponent, InfoPanelRowComponent, InfoPanelFooterComponent, TextWithIconComponent, SnippetComponent],
    providers: [
        provideNgIconLoader(name => {
            const http = inject(HttpClient);
            return http.get(`/assets/icons/${name}.svg`, {responseType: 'text'});
        })
    ],

})
export class TemplateModule {

}
