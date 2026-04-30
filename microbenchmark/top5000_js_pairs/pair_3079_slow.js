const Benchmark = {
    run: function() {
        var VAR_1 = "thisisatest",
          VAR_2 = 0;
        while (VAR_2 < 1000) {
          if (/thisisatest/.test(VAR_1)) VAR_2++;
        }
    }
};