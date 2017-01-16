class Config {
    private properties: { [key: string]: any; } = {};

    constructor() {
    }
    public put(key: string, value: any) {
        this.properties[key] = value;
        return this;
    }
    public get(key: string): any {
        return this.properties[key];
    }
};

export default Config;