import { ElNotification, NotificationParamsTyped } from 'element-plus';

export class Notification {
    private static setDefaultOptions = (options: NotificationParamsTyped, title: string) => {
        let params: any = { title };
        if (typeof options === 'string') {
            params.message = options;
        } else {
            params = { ...params, ...options };
        }
        return params;
    };

    public static Success(params: NotificationParamsTyped) { return ElNotification.success(this.setDefaultOptions(params, 'Succes')); }

    public static Warning(params: NotificationParamsTyped) { return ElNotification.warning(this.setDefaultOptions(params, 'Attention')); }

    public static Error(params: NotificationParamsTyped) { return ElNotification.error(this.setDefaultOptions(params, 'Error')); }
}
