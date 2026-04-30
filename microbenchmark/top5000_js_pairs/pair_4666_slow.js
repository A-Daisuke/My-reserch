const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        function FUNCTION_2(VAR_3) {
          if (!(this instanceof FUNCTION_2)) {
            return new FUNCTION_2(VAR_3);
          }
          this.VAR_2 = VAR_3;
        }
        var VAR_4 = { KEY_1: "bar" };
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
          VAR_5.push(VAR_4);
        }
        var VAR_7 = VAR_5.map(function (VAR_8) {
          return new FUNCTION_2(VAR_4);
        });
    }
};