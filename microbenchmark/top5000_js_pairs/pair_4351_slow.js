const Benchmark = {
    run: function() {
        var VAR_1 = {};
        VAR_1.VAR_2 = new (function () {
          this.VAR_3 = "test";
        })();
        VAR_1.VAR_4 = new (function () {
          this.VAR_3 = "test";
        })();
        VAR_1.VAR_5 = new (function () {
          this.VAR_3 = "test";
        })();
    }
};