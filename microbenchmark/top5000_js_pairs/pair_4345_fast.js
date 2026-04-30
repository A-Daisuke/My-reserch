const Benchmark = {
    run: function() {
        var VAR_1 = new Date().toISOString();
        var VAR_5 = /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}(\.\d+)?([\+-]\d{2}\:\d{2})?Z?$/;
        var VAR_2, VAR_3, VAR_4;
        for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 = VAR_5.test(VAR_1);
        }
    }
};