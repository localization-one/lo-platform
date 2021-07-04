
/**
 * Used mostly for store wrapping, when we cannot pass undefined
 */
const typeWrapper = <T = string>(value: unknown) => value as T;


export { typeWrapper };
