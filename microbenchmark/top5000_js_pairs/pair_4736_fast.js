const Benchmark = {
    run: function() {
        var VAR_5 = {
          KEY_1: 1,
          KEY_2: "test",
          KEY_3: true,
          KEY_4: function () {
            return this.test1 + this.KEY_2 + this.KEY_3;
          },
        };
        VAR_5.KEY_4();
    }
};