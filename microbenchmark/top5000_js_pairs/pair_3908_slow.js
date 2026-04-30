const Benchmark = {
    run: function() {
        this.VAR_1 = "x"
          .repeat(1000)
          .split("")
          .map((VAR_2, VAR_3) => VAR_3);
        var VAR_4 = [];
        this.VAR_1.forEach(function (VAR_5) {
          VAR_4.push({ KEY_1: VAR_5 });
        });
    }
};