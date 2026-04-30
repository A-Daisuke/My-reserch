const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 0;
        for (VAR_1 = 0; VAR_1 < 64000; VAR_1 += 1) {
          VAR_2 += /^[\x09\x0a\x0d\x20-\x7e]$/.test(String.fromCharCode(VAR_1)) ? 1 : 0;
        }
    }
};