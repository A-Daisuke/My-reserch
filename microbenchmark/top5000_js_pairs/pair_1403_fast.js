const Benchmark = {
    run: function() {
        var VAR_2 = 999999 % 8,
          VAR_3 = 0;
        while (VAR_2--) {}
        VAR_2 = Math.floor(999999 / 8);
        while (VAR_2--) {}
    }
};