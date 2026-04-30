const Benchmark = {
    run: function() {
        var VAR_1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var VAR_2 = VAR_1.split("");
        VAR_2.sort(function () {
          return 0.5 - Math.random();
        });
        while (VAR_2.length) {
          VAR_2.pop();
        }
    }
};