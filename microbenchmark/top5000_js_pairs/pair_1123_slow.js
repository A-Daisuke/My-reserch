const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = {};
          this.VAR_2 = [];
          this.VAR_3 = "foo";
          this.VAR_4 = [[], [], [], []];
        };
        for (var VAR_5 = 0; VAR_5 < 8192; VAR_5++) {
          var VAR_6 = new FUNCTION_1();
        }
    }
};