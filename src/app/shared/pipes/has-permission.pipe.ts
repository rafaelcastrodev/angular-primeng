import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hasPermission',
})
export class HasPermissionPipe implements PipeTransform {
    // private _permissionModuleService = inject(PermissionModuleService);

    transform(module_slug: string, action_slug: string): boolean {
        // return this._permissionModuleService.hasPermission(module_slug, action_slug);
        return true;
    }
}
