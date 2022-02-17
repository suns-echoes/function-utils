declare interface AnyFunction extends AnyObject {
	(...args: any[]): any,
}

declare type ObjectKey = string | symbol;

declare interface AnyObject extends Record<ObjectKey, any> {}
