import { AuthEntity, NoneAuth } from "./auth-entity";
import { BodyEntiry } from "./body-entity";
import { KeyValueEntity } from "./key-value-entity";

export class RequestEntity {
    public id: string = '';
    public name: string = '';
    public url: string = '';
    public method: string = 'GET';
    public headers: KeyValueEntity[] = [];
    public defaultHeaders: KeyValueEntity[] = this._getDefaultHeaders();
    public queryParameters: KeyValueEntity[] = [];
    public body: BodyEntiry = new BodyEntiry();
    public auth: AuthEntity = { type: 'none', enabled: false } as NoneAuth;

    private _getDefaultHeaders(): KeyValueEntity[] {
        const acceptHeader = new KeyValueEntity('Accept', '*/*');
        acceptHeader.isHidden = true;

        const hostHeader = new KeyValueEntity('Host', '<calculated at runtime>');
        hostHeader.isHidden = true;

        return [
            acceptHeader,
            hostHeader,
        ];
    }
}