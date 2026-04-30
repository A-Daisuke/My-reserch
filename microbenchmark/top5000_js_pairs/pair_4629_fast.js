const Benchmark = {
    run: function() {
        var VAR_1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var VAR_2 = VAR_1.split("");
        while (VAR_2.length) {
          VAR_2.splice((Math.random() * VAR_2.length) | 0, 1)[0];
        }
    }
};