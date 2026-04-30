const Benchmark = {
    run: function() {
        this.VAR_1 = "x"
          .repeat(1000)
          .split("")
          .map((VAR_2, VAR_3) => VAR_3);
        var VAR_4 = [];
        for (const VAR_6 of this.VAR_1) {
          VAR_4.push({ KEY_1: VAR_6 });
        }
        VAR_4.VAR_7 = this.VAR_1.VAR_7;
    }
};