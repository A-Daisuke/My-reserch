const Benchmark = {
    run: function() {
        var VAR_7 = [];
        function FUNCTION_2(VAR_8) {
          VAR_7.push(VAR_8);
        }
        function FUNCTION_3() {
          if (VAR_7.length >= 0) {
            return VAR_7.pop();
          } else {
            return new FUNCTION_1();
          }
        }
        var FUNCTION_1 = function () {
          this.VAR_1 = {};
          this.VAR_2 = [];
          this.VAR_3 = "foo";
          this.VAR_4 = [[], [], [], []];
        };
        for (var VAR_5 = 0; VAR_5 < 8192; VAR_5++) {
          var VAR_9 = FUNCTION_3();
          FUNCTION_2(VAR_9);
        }
    }
};