(() => {
    window.ProteusFactory = {
        create(params) {
            switch (params.type) {
                case 'Linechart':
                    return new Linechart(params.data, params.config);
                case 'Barchart':
                    return new Barchart(params.data, params.config);
                case 'Gauge':
                    return new Gauge(params.data, params.config);
                case 'Streamgraph':
                    return new Streamgraph(params.data, params.config);
                default:
                    throw TypeError('Unknow chart type' + params.type);
            }
        }
    };
})();