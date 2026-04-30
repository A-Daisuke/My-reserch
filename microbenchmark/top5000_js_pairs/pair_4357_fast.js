const Benchmark = {
    run: function() {
        var VAR_2 = {
          KEY_1: "hello world",
          KEY_2: function () {
            console.log(this.KEY_1);
          },
        };
        VAR_2.KEY_2();
    }
};