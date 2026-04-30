const Benchmark = {
    run: function() {
        const VAR_1 = true;
        const VAR_2 = false;
        const VAR_3 = true;
        var VAR_4 = new Array();
        for (var VAR_5 = 0; VAR_5 < 500000; ++VAR_5) {
          VAR_4.push(VAR_5);
        }
    }
};