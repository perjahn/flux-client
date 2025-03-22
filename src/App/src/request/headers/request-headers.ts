import { bindable } from "aurelia"
import { TableComponent } from "../../common/table/table-component";
import { InputComponent } from "../../common/input/input-component";
import { RequestEntity } from "../../entities/request-entity";

export class RequestHeaders {
    static dependencies = [
        TableComponent,
        InputComponent
    ]

    @bindable public request: RequestEntity;
}