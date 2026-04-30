const Benchmark = {
    run: function() {
        var VAR_3 = (function () {
          return {
            KEY_1: function () {
              this.VAR_1 = "b";
            },
            KEY_2: function () {
              console.log(this.VAR_1);
            },
          };
        })();
        VAR_3.KEY_1();
        VAR_3.KEY_2();
    }
};