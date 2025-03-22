import { bindable, BindingMode, observable } from "aurelia";
import { GroupedDropdown } from "../../common/dropdowns/grouped-dropdown/grouped-dropdown";
import { ApiKeyAuth, AuthEntity, AuthType, BasicAuth, BearerTokenAuth } from "../../entities/auth-entity";
import { InputComponent } from "../../common/input/input-component";

export class RequestAuth {
    @bindable({ mode: BindingMode.twoWay }) public auth: AuthEntity;
    @bindable({ mode: BindingMode.twoWay }) public selectedAuthType: string = 'none';
    @observable public selectedApiKeyLocation: string = 'header';

    static dependencies = [
        GroupedDropdown,
        InputComponent
    ];

    public username: string = '';
    public password: string = '';
    public token: string = '';
    public prefix: string = '';
    public key: string = '';
    public value: string = '';
   

    public authTypeOptions: Array<{ label: string, imageUrl?: string, imageClass?: string, options: Array<{ label: string, value: string }>}> = [
        {
            label: 'Other',
            options: [
                { label: 'None', value: 'none'}
            ]
        },
        {
            label: 'Auth types',
            options: [
                { label: 'API Key', value: 'api-key' },
                { label: 'Basic', value: 'basic' },
                { label: 'Bearer Token', value: 'bearer-token' },
            ]
        }
    ];

    public apiKeyLocationOptions: Array<{ label: string, imageUrl?: string, imageClass?: string, options: Array<{ label: string, value: string }>}> = [
        {
            label: '',
            options: [
                { label: 'Header', value: 'header' },
                { label: 'Query Param', value: 'query-param' },
                { label: 'Cookie', value: 'cookie' }
            ]
        }
    ];

    public selectedAuthTypeChanged(newValue: AuthType): void {
        this._saveAuthState();
        this._loadAuthState(newValue);
    }

    private _saveAuthState(): void {
        switch (this.auth.type) {
            case 'basic':
                this.username = (this.auth as BasicAuth).username;
                this.password = (this.auth as BasicAuth).password;
                break;
            case 'bearer-token':
                this.token = (this.auth as BearerTokenAuth).token;
                this.prefix = (this.auth as BearerTokenAuth).prefix;
                break;
            case 'api-key':
                this.key = (this.auth as ApiKeyAuth).key;
                this.value = (this.auth as ApiKeyAuth).value;
                break;
        }
    }

    private _loadAuthState(newValue: AuthType): void {
        if (newValue === this.auth.type) {
            return;
        }

        if (this.auth.type === 'none') {
            this.auth.enabled = true;
        }

        switch (newValue) {
            case 'none':
                this.auth = { type: 'none', enabled: false };
                break;
            case 'basic':
                this.auth = { 
                    type: 'basic', 
                    enabled: this.auth.enabled, 
                    username: this.username, 
                    password: this.password
                };
                break;
            case 'bearer-token':
                this.auth = { 
                    type: 'bearer-token', 
                    enabled: this.auth.enabled, 
                    token: this.token,
                    prefix: this.prefix
                };
                break;
            case 'api-key':
                this.auth = { 
                    type: 'api-key', 
                    enabled: this.auth.enabled, 
                    key: this.key,
                    value: this.value
                };
                break;
        }
    }

    public usernamePlaceholder: string = 'John Doe';
    public passwordType: string = 'password';
}