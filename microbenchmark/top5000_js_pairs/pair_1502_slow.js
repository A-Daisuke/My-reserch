const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(10000);
        VAR_1.forEach(function (VAR_2, VAR_3, VAR_4) {
          VAR_4.set([128], VAR_3);
        });
    }
};