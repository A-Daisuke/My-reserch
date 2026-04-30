const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var VAR_2 = "";
        var VAR_3 = (Math.random() * 1000) >> 0;
        while (VAR_3--) {
          VAR_2 += VAR_1[(Math.random() * 52) >> 0];
        }
        VAR_2.toUpperCase() === VAR_2;
    }
};