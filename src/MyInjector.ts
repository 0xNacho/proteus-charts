//import { Injectable } from './Injectable';
export default class Injector {

    /**
     * Maps values by their injectionKey.
     *
     * @type {{ string: * }}
     */
    private valuesByInjectionKey: { [injectionKey: string]: any } = {};

    /**
     * Associate an injectionKey with a value so that when Injector#instantiate is
     * invoked the supplied value will be injected into properties of the target Class
     * decorated with the `@inject` decorator.
     *
     * @param {string} injectionKey
     * @param {*} value
     */
    mapValue(injectionKey: string, value: any): void {
        this.valuesByInjectionKey[injectionKey] = value;
    }

    /**
     * Create a new instance of the supplied Class fulfilling any property injections
     * which are present in the injectionRules map.
     *
     * @param {function} Class
     * @returns {T}
     */
    // instantiate<T extends Injectable>(Class: { new (...args: any[]): T }): T {
    instantiate<T>(Class: { new (...args: any[]): T }): T {

        // Start by creating a new instance of the target Class.
        const instance: any = new Class();

        // Loop through all properties decorated with `@inject()` in this Class and
        // try to satisfy them if there is a mapped value.
        for (let injectionPoint of this.getInjectionPoints(Class)) {
            const injectionValue: any = this.valuesByInjectionKey[injectionPoint.injectionKey];

            // Perform the injection if we have a value assigned to this injectionKey.
            if (injectionValue) {
                instance[injectionPoint.propertyName] = injectionValue;
            }

        }
        //instance.initialize();

        return instance;
    }

    private getInjectionPoints<T>(Class: { __inject__?: { [prop: string]: string } }): Array<InjectionPoint> {
        var result: Array<InjectionPoint> = [];

        // Retrieve the `__inject__` hash created by the @inject decorator from the
        // target Class.
        if (Class.hasOwnProperty('__inject__')) {
            result = Object.keys(Class.__inject__)
                .map((propertyName: string) => {
                    return {
                        propertyName: propertyName,
                        injectionKey: Class.__inject__[propertyName]
                    }
                });
        }

        return result;
    }
}

interface InjectionPoint {
    propertyName: string;
    injectionKey: string;
}