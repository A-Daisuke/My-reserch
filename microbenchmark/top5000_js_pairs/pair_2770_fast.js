const Benchmark = {
    run: function() {
        var VAR_5 = [];
        var VAR_6 = {
          KEY_1: "a",
          KEY_2: "b",
          KEY_3: function () {
            return this.KEY_1 + this.KEY_2;
          },
          KEY_4: function () {
            return this.KEY_3();
          },
        };
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) VAR_5.push(VAR_6);
    }
};